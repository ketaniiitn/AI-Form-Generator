import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {children}
    </div>
  );
}; 

export default Layout;
