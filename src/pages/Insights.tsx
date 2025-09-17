import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardCard } from "@/components/DashboardCard";
import { TrendingUp, Brain, AlertTriangle, BarChart3 } from "lucide-react";

const Insights = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI/ML Insights</h1>
          <p className="text-muted-foreground">
            Predictive analytics and anomaly detection
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Prediction Accuracy"
            value="94.2%"
            description="Carbon sequestration models"
            icon={Brain}
          />
          <DashboardCard
            title="Anomalies Detected"
            value="3"
            description="Projects flagged for review"
            icon={AlertTriangle}
          />
          <DashboardCard
            title="Growth Forecast"
            value="+18%"
            description="Next quarter projection"
            icon={TrendingUp}
          />
          <DashboardCard
            title="Data Points"
            value="2.1M"
            description="Training dataset size"
            icon={BarChart3}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Machine Learning Analytics</h3>
          <p className="text-muted-foreground">
            Advanced AI/ML capabilities will include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Carbon sequestration prediction models</li>
            <li>• Satellite imagery analysis for project monitoring</li>
            <li>• Anomaly detection in project data and reporting</li>
            <li>• Market trend analysis and price forecasting</li>
            <li>• Automated compliance risk assessment</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Insights;