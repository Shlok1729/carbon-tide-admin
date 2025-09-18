import { DashboardCard } from "./DashboardCard";
import {
  TreePine,
  Coins,
  TrendingUp,
  Clock,
  Building2,
  MapPin,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const mockData = {
  totalProjects: 156,
  verifiedProjects: 134,
  pendingVerification: 22,
  totalCredits: 2847293,
  tradedCredits: 2156847,
  activeOrganizations: 89,
  carbonSequestered: 4521,
  recentActivities: [
    {
      id: 1,
      action: "Project Verified",
      project: "Mangrove Restoration - Coastal Bay",
      time: "2 hours ago",
      status: "success"
    },
    {
      id: 2,
      action: "Credits Issued",
      project: "Seagrass Conservation Initiative",
      time: "4 hours ago",
      status: "success"
    },
    {
      id: 3,
      action: "Pending Review",
      project: "Wetland Protection Zone Alpha",
      time: "6 hours ago",
      status: "warning"
    }
  ]
};

export const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-4">
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">
          Monitoring carbon ledger projects and carbon credit management
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Projects"
          value={mockData.totalProjects}
          description="Active carbon ledger initiatives"
          icon={TreePine}
          onClick={() => navigate('/projects')}
          trend={{
            value: 12,
            label: "from last month",
            isPositive: true
          }}
        />
        
        <DashboardCard
          title="Carbon Credits"
          value={`${(mockData.totalCredits / 1000000).toFixed(1)}M`}
          description="Total credits generated"
          icon={Coins}
          onClick={() => navigate('/credits')}
          trend={{
            value: 8,
            label: "from last month",
            isPositive: true
          }}
        />
        
        <DashboardCard
          title="Credits Traded"
          value={`${(mockData.tradedCredits / 1000000).toFixed(1)}M`}
          description="Successfully traded credits"
          icon={TrendingUp}
          onClick={() => navigate('/credits')}
          trend={{
            value: 15,
            label: "from last month",
            isPositive: true
          }}
        />
        
        <DashboardCard
          title="Pending Reviews"
          value={mockData.pendingVerification}
          description="Projects awaiting verification"
          icon={Clock}
          onClick={() => navigate('/projects')}
          trend={{
            value: -5,
            label: "from last week",
            isPositive: false
          }}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Active Organizations"
          value={mockData.activeOrganizations}
          description="Registered entities"
          icon={Building2}
          onClick={() => navigate('/organizations')}
        />
        
        <DashboardCard
          title="Verified Projects"
          value={mockData.verifiedProjects}
          description="Completed verifications"
          icon={CheckCircle}
          onClick={() => navigate('/projects')}
        />
        
        <DashboardCard
          title="Carbon Sequestered"
          value={`${mockData.carbonSequestered}t`}
          description="Total CO₂ captured (tons)"
          icon={TreePine}
          onClick={() => navigate('/projects')}
        />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center space-x-3">
                  {activity.status === "success" ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-warning" />
                  )}
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.project}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Verified</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                  <span className="text-sm font-medium">86%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">In Review</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "14%" }}></div>
                  </div>
                  <span className="text-sm font-medium">14%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Credit Trading Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Available Credits</span>
                <span className="font-medium">{(mockData.totalCredits - mockData.tradedCredits).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Average Price</span>
                <span className="font-medium">₹2,035/credit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Value</span>
                <span className="font-medium text-primary">₹5,785M</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};