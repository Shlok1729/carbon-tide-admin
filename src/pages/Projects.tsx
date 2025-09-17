import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { TreePine, MapPin, Users, AlertCircle } from "lucide-react";

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blue Carbon Projects</h1>
          <p className="text-muted-foreground">
            Monitor and manage registered restoration projects
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Active Projects"
            value="142"
            description="+12% from last month"
            icon={TreePine}
          />
          <DashboardCard
            title="Total Area"
            value="15,847 ha"
            description="Hectares under restoration"
            icon={MapPin}
          />
          <DashboardCard
            title="Registered Orgs"
            value="67"
            description="NGOs and companies"
            icon={Users}
          />
          <DashboardCard
            title="Pending Review"
            value="8"
            description="Projects awaiting approval"
            icon={AlertCircle}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Project Management Dashboard</h3>
          <p className="text-muted-foreground">
            Detailed project management interface will be implemented here, including:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Interactive project map with restoration sites</li>
            <li>• Project status tracking and verification workflow</li>
            <li>• Organization profiles and project portfolios</li>
            <li>• Carbon sequestration calculations and projections</li>
            <li>• Document management and compliance tracking</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;