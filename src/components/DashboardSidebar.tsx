import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Leaf,
  FileText,
  Building2,
  TrendingUp,
  Settings,
  Menu,
  X,
  TreePine,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Overview",
    icon: BarChart3,
    href: "/",
    description: "Dashboard overview"
  },
  {
    title: "Projects",
    icon: TreePine,
    href: "/projects",
    description: "Carbon ledger projects"
  },
  {
    title: "Credits Ledger",
    icon: FileText,
    href: "/credits",
    description: "Carbon credits tracking"
  },
  {
    title: "Organizations",
    icon: Building2,
    href: "/organizations",
    description: "Registered entities"
  },
  {
    title: "Insights",
    icon: TrendingUp,
    href: "/insights",
    description: "AI/ML Analytics"
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/reports",
    description: "Export & reports"
  }
];

interface DashboardSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const DashboardSidebar = ({ isCollapsed, setIsCollapsed }: DashboardSidebarProps) => {

  return (
    <div className={`bg-dashboard-nav text-dashboard-nav-foreground transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    } h-screen flex flex-col fixed left-0 top-0 z-10`}>
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-dashboard-accent" />
              <div>
                <h1 className="font-bold text-lg">BlueLedger</h1>
                <p className="text-xs text-white/70">Admin Dashboard</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white hover:bg-white/10"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-white/60">{item.description}</p>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-white/60">
            <p>Government of Environmental Affairs</p>
            <p>Carbon Credit Regulatory Portal</p>
          </div>
        </div>
      )}
    </div>
  );
};