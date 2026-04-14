import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, XCircle } from "lucide-react";

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "1,234",
      icon: Users,
      change: "+12%",
      changeType: "positive",
      color: "bg-blue-500",
    },
    {
      title: "Pending Review",
      value: "456",
      icon: FileText,
      change: "+5%",
      changeType: "positive",
      color: "bg-yellow-500",
    },
    {
      title: "Approved",
      value: "567",
      icon: CheckCircle,
      change: "+18%",
      changeType: "positive",
      color: "bg-green-500",
    },
    {
      title: "Rejected",
      value: "211",
      icon: XCircle,
      change: "-3%",
      changeType: "negative",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="w-full min-w-0 overflow-hidden p-2 sm:p-0">
          <CardHeader className="flex min-w-0 flex-row items-center justify-between gap-3 pb-1 sm:pb-2">
            <CardTitle className="min-w-0 text-xs font-medium sm:text-sm">
              <span className="block truncate">{stat.title}</span>
            </CardTitle>

            <div className={`shrink-0 rounded-lg p-2 ${stat.color}`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>

          <CardContent className="pt-1 sm:pt-2">
            <div className="text-lg font-bold sm:text-2xl">{stat.value}</div>

            <p
              className={`text-[11px] sm:text-xs ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;