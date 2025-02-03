"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Validate input
    const schema = z.object({
      description: z.string().min(1, "Description is required"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return { success: false, message: "Invalid form data", error: result.error.errors };
    }

    const description = result.data.description;

    if (!process.env.GEMINI_API_KEY) {
      return { success: false, message: "GEMINI API KEY IS NOT AVAILABLE!" };
    }

    // Gemini prompt
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Generate a valid JSON response for a form with the following structure. Ensure it is well-formatted JSON without extra text.

    {
      "formTitle": "string",
      "formFields": [
        {
          "label": "string",
          "name": "string",
          "placeholder": "string"
        }
      ]
    }

    Description: ${description}`;

    const genResult = await model.generateContent(prompt);
    if (!genResult.response) {
      return { success: false, message: "Failed to generate form content" };
    }

    const responseText = await genResult.response.text();
    if (!responseText || responseText.trim().length === 0) {
      return { success: false, message: "Received empty response from Gemini" };
    }

    console.log("Raw Gemini Response:", responseText);

    //Extract JSON from response
    // const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    // if (!jsonMatch) {
    //   return { success: false, message: "Generated form content is not valid JSON" };
    // }
    const cleanedResponse = responseText.replace(/```json\s*([\s\S]*?)\s*```/, "$1").trim();
    let formJsonData;
    try {
      formJsonData = JSON.parse(cleanedResponse); // Direct parsing
    } catch (error) {
      console.log("Error parsing JSON:", error);
      return { success: false, message: "Generated form content is not valid JSON" };
    }

    console.log("Parsed JSON Data:", formJsonData);

    // Ensure JSON object is properly structured
    if (!formJsonData || typeof formJsonData !== "object" || !formJsonData.formTitle || !Array.isArray(formJsonData.formFields))
    {
      return { success: false, message: "Generated form content is not properly structured" };
    }

    // Save to database
    console.log("Creating form in database...");
    const form = await prisma.form.create({
      data: {
        ownerId: user.id,
        content: JSON.stringify(formJsonData), // Ensure it's a string if necessary
      },
    });
    console.log("Form created:");

    revalidatePath("/dashboard/forms");
    return { success: true, message: "Form generated successfully", data: form };

  } catch (error) {
    console.log("Error generating form", error);
    return { success: false, message: "An unexpected error occurred" };
  }
};
