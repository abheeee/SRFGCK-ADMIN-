import React from "react";
import StatsCards from "@/components/admin/dashboard/StatsCards";
import AdmissionChart from "@/components/admin/dashboard/AdmissionChart";
import RecentApplications from "@/components/admin/dashboard/RecentApplications";
import CourseWiseStats from "@/components/admin/dashboard/CourseWiseStats";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full min-w-0 overflow-x-hidden space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="min-w-0">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Dashboard
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Welcome back! Here's your admission summary
        </p>
      </div>

      {/* Stats */}
      <div className="w-full min-w-0">
        <StatsCards />
      </div>

      {/* Charts Section */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <AdmissionChart />
        </div>

        <div className="min-w-0">
          <CourseWiseStats />
        </div>
      </div>

      {/* Recent Applications */}
      <div className="w-full min-w-0">
        <RecentApplications />
      </div>
    </div>
  );
};

export default Dashboard;