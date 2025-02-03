
// import AiGeneratedForm from "@/components/AiGeneratedForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma"; 
import React from "react";

const Edit = async ({ params }: { params: { formId: string } }) => {
  const { formId } = params;

  if (!formId) {
    return <h1>No form id found for id {formId}</h1>;
  }
  const form : any = await prisma.form.findUnique({
    where: {
      id: Number(formId),
    },
  });
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="font-bold text-2xl text-center">{form.content.formTitle || "NA"}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <AiGeneratedForm form = {form} isEditMode={true}/> */}
      </CardContent>
    </Card>
  );
};

export default Edit;

























// "use client";
// // import AiGeneratedForm from "@/components/AiGeneratedForm";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import prisma from "@/lib/prisma"; 
// import { Link } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// console.log("Edit form -1");
// const Edit = async ({ params }: { params: Promise<{ formId: string }> }) => {
//   const formId = (await params).formId;

//   if (!formId) {
    
//     return <h1>No form id found for id {formId}</h1>;
//   }
//   console.log({ formId });
//   const form : any = await prisma.form.findUnique({
//     where: {
//       id: Number(formId),
//     },
//   });
//   console.log("Edit form -2");
//   return (
// <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Hover over this card to unleash the power of CSS perspective
//         </CardItem>
//         {/* <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem> */}
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as={Link}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// };

// export default Edit;
// import prisma from "@/lib/prisma";
// import EditClient from "./EditClient"; // Import the Client Component

// const Edit = async ({ params }: { params: Promise<{ formId: string }> }) => {
//   const { formId } = await params;

//   if (!formId) {
//     return <h1>No form ID found</h1>;
//   }

//   const form = await prisma.form.findUnique({
//     where: { id: Number(formId) },
//   });

//   return <EditClient form={form} />;
// };

// export default Edit;