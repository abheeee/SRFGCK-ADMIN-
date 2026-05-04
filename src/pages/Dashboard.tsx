import React from "react";
import { Users, FileText, CheckCircle, Clock } from "lucide-react";

import AdmissionChart from "@/components/admin/dashboard/AdmissionChart";
import RecentApplications from "@/components/admin/dashboard/RecentApplications";
import CourseWiseStats from "@/components/admin/dashboard/CourseWiseStats";

import { Card, CardContent } from "@/components/ui/card";

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 1240,
      icon: <FileText className="h-5 w-5 text-orange-600" />,
    },
    {
      title: "New Admissions",
      value: 320,
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Approved",
      value: 890,
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Pending",
      value: 120,
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
    },
  ];

  return (
    <div className="w-full min-w-0 overflow-x-hidden space-y-4 sm:space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Dashboard
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Welcome back! Here's your admission summary
        </p>
      </div>

      {/* ✅ STATS GRID (2 + 2 layout) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3">
        <div className="min-w-0 col-span-1 xl:col-span-2">
          <AdmissionChart />
        </div>

        <div className="min-w-0 col-span-1">
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

/* ✅ LOCAL CARD COMPONENT */
const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="flex items-center justify-between p-4 sm:p-5">
        <div>
          <p className="text-xs sm:text-sm text-slate-500">{title}</p>
          <h2 className="mt-1 text-lg sm:text-2xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-slate-50">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};