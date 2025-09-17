import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { Building2, Users, Award, Globe } from "lucide-react";

const Organizations = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground">
            Registered entities and project stakeholders
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="NGOs"
            value="34"
            description="Non-profit organizations"
            icon={Users}
          />
          <DashboardCard
            title="Companies"
            value="33"
            description="Private sector entities"
            icon={Building2}
          />
          <DashboardCard
            title="Certified Orgs"
            value="58"
            description="Verified organizations"
            icon={Award}
          />
          <DashboardCard
            title="Countries"
            value="12"
            description="International presence"
            icon={Globe}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Organization Management</h3>
          <p className="text-muted-foreground">
            Comprehensive organization registry will feature:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Organization profiles and verification status</li>
            <li>• Project portfolios and performance metrics</li>
            <li>• Compliance tracking and certification management</li>
            <li>• Partnership networks and collaboration tools</li>
            <li>• Financial transparency and audit trails</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Organizations;