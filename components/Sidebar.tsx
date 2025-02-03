// import React from "react";
// import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import { ChartSpline, ClipboardList } from "lucide-react";
// import Link from "next/link";
// import { currentUser } from "@clerk/nextjs/server";
// // import UpgradeButton from "./UpgradeButton";

// interface MenuItem {
//   label: string;
//   href: string;
//   icon: React.JSX.Element;
// }

// const menuItems: MenuItem[] = [
//   {
//     label: "Analytics",
//     href: "/dashboard/analytics",
//     icon: <ChartSpline className="w-5 h-5" />,
//   },
//   {
//     label: "My Forms",
//     href: "/dashboard/forms",
//     icon: <ClipboardList className="w-5 h-5" />,
//   },
// ];

// const DashboardSidebar = async () => {
//   const user = await currentUser();

//   return (
//     <Sidebar>
//       <SidebarBody className="p-4 flex flex-col h-full">
//         {/* Logo & Title */}
//         <div className="mb-4">
//           <Link href="/" className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
//             Formify.ai-Patel
//           </Link>
//         </div>

//         {/* Sidebar Menu */}
//         <nav className="flex flex-col space-y-2">
//           {menuItems.map((item, index) => (
//             <SidebarLink key={index} link={item} />
//           ))}
//         </nav>

//         {/* Footer (Upgrade Button) */}
//         <div className="mt-auto">
//           {/* <UpgradeButton userId={user?.id} /> */}
//         </div>
//       </SidebarBody>
//     </Sidebar>
//   );
// };

// export default DashboardSidebar;

"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconFileText, // Added for My Forms
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import UpgradeButton from "./UpgradeButton";

export function DashboardSidebar() {
interface MenuItem {
    label: string;
    href: string;
    icon: React.JSX.Element;
}

const links: MenuItem[] = [
    {
        label: "Analytics", // Changed from Dashboard to Analytics
        href: "/dashboard/analytics",
        icon: (
            <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "My Forms", // New sidebar item
        href: "/dashboard/forms",
        icon: (
            <IconFileText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Profile",
        href: "#",
        icon: (
            <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Settings",
        href: "#",
        icon: (
            <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
    {
        label: "Logout",
        href: "#",
        icon: (
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[60vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <UpgradeButton  />
        </SidebarBody>
      </Sidebar>
      <Analytics /> 
    </div>
  );
}

// Updated component: Analytics
const Analytics = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">Analytics Overview</h2>
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => (
            <div
              key={"analytics-array" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => (
            <div
              key={"analytics-second-array" + i}
              className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};


{
  /* <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            /> */
}

// export const Logo = () => {
//     return (
//       <Link
//         href="#"
//         className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//       >
//         <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="font-medium text-black dark:text-white whitespace-pre"
//         >
//           Acet Labs
//         </motion.span>
//       </Link>
//     );
//   };
//   export const LogoIcon = () => {
//     return (
//       <Link
//         href="#"
//         className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//       >
//         <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//             {open ? <Logo /> : null}
//         </Link>
//       );
//   };
