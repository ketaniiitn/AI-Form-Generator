"use server"

import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import OpenAI from "openai";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY!});
export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Define the schema for validation
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

    if(!process.env.OPENAI_API_KEY){
      return{success:false,message:"OPENAI KEY IS NOT AVAILABLE!"}
    }
    const prompt = "Create a json form with the following fields: title,fields(IF any field include options then keep it inside array not object)"
    //Request Openai to generate the form content .
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${description}${prompt}` }],
      model: "deepseek-chat",});
      console.log(completion.choices[0]);
      const formContent = completion.choices[0]?.message.content;
      if(!formContent){
        return{success:false,message:"FAILED TO GENERATE FORM CONTENT"}
      }
      let formJsonData;
      try{
        formJsonData=JSON.parse(formContent)
      }
      catch(error){
        console.log("ERROR PARSING JSON",error);
        return{success:false, message:"generated form content is not JSON"}
      }
      //SAVE THE GENERATED FORM TO THE DATABASE
      const form = await prisma.form.create({
         data:{ownerId:user.id,
          content:formJsonData?formJsonData:null
         }
      });
      revalidatePath("/dashboard/forms");//optionally;
      return{
        success:true,message:"Form generated successfully",data:form
      }
  } catch (error) {
    // Handle errors
    console.log(error);
    return { success: false, message: "An unexpected error occurred ${}error" };
  }
};



// API_KEY = sk-1ab66657f0eb457b91854d3c7c9d5772