
import { DashboardSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      {/* Fixed Navbar (Adjust height accordingly) */}
      <header className="fixed top-0 left-0 w-full h-16 dark:bg-neutral-800 shadow-md z-50 flex items-center px-6">
        <h1 className="text-lg font-bold">My Navbar</h1>
      </header>

      {/* Sidebar & Content Wrapper */}
      <div className="flex h-screen pt-16"> {/* pt-16 ensures content starts below navbar */}
        {/* Sidebar (Fixed & Full Height) */}
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 bg-neutral-100 dark:bg-neutral-800 shadow-md">
          
          <DashboardSidebar />
        </div>

        {/* Main Content Area (Adjusted with padding-left for sidebar) */}
        <main className="ml-60 flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default layout;







// import DashboardSidebar from "@/components/Sidebar";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import React from "react";

// const layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <SidebarProvider>
//       <DashboardSidebar />
//       <main className="mx-6 my-4 w-full">{children}</main>
//     </SidebarProvider>
//   );
// };

// export default layout;
// import DashboardSidebar from "@/components/Sidebar";