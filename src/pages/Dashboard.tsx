import React from "react";
import StatsCards from "@/components/admin/dashboard/StatsCards";
import AdmissionChart from "@/components/admin/dashboard/AdmissionChart";
import RecentApplications from "@/components/admin/dashboard/RecentApplications";
import CourseWiseStats from "@/components/admin/dashboard/CourseWiseStats";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Welcome back! Here's your admission summary
        </p>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <AdmissionChart />
        <CourseWiseStats />
      </div>

      {/* Recent Applications */}
      <RecentApplications />

    </div>
  );
};

export default Dashboard;