import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { FileText, TrendingUp, ArrowRightLeft, CheckCircle } from "lucide-react";

const Credits = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Carbon Credits Ledger</h1>
          <p className="text-muted-foreground">
            Blockchain-based transparent carbon credit tracking
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Credits Issued"
            value="2.4M"
            description="Total verified credits"
            icon={FileText}
          />
          <DashboardCard
            title="Credits Traded"
            value="1.8M"
            description="Successfully transferred"
            icon={ArrowRightLeft}
          />
          <DashboardCard
            title="Credits Retired"
            value="892K"
            description="Permanently removed"
            icon={CheckCircle}
          />
          <DashboardCard
            title="Market Value"
            value="$47.3M"
            description="+8.2% this quarter"
            icon={TrendingUp}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Blockchain Ledger Interface</h3>
          <p className="text-muted-foreground">
            Comprehensive carbon credit ledger system will include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Real-time blockchain transaction tracking</li>
            <li>• Credit issuance and verification workflow</li>
            <li>• Trading history and market analytics</li>
            <li>• Retirement certificates and compliance reporting</li>
            <li>• Smart contract integration and automation</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Credits;