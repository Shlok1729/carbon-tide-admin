import { ReactNode, useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`p-6 overflow-auto transition-all duration-300 ${
        isCollapsed ? "ml-16" : "ml-64"
      }`}>
        {children}
      </main>
    </div>
  );
};