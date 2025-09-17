import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { FileText, Download, Calendar, Archive } from "lucide-react";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Exports</h1>
          <p className="text-muted-foreground">
            Generate compliance reports and export data
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Monthly Reports"
            value="24"
            description="Generated this year"
            icon={FileText}
          />
          <DashboardCard
            title="Data Exports"
            value="156"
            description="CSV/PDF downloads"
            icon={Download}
          />
          <DashboardCard
            title="Scheduled Reports"
            value="8"
            description="Automated generation"
            icon={Calendar}
          />
          <DashboardCard
            title="Archived Reports"
            value="342"
            description="Historical records"
            icon={Archive}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Report Generation System</h3>
          <p className="text-muted-foreground">
            Comprehensive reporting capabilities will include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Government compliance reports (PDF/Excel)</li>
            <li>• Project performance analytics and summaries</li>
            <li>• Carbon credit audit trails and verification documents</li>
            <li>• Financial statements and transaction reports</li>
            <li>• Custom report builder with filtering options</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;