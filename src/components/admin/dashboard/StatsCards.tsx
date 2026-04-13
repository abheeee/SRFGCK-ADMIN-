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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="p-2 sm:p-0"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-1 sm:pb-2">
            
            {/* Title */}
            <CardTitle className="text-xs sm:text-sm font-medium">
              {stat.title}
            </CardTitle>

            {/* Icon */}
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>

          </CardHeader>

          <CardContent className="pt-1 sm:pt-2">
            {/* Value */}
            <div className="text-lg sm:text-2xl font-bold">
              {stat.value}
            </div>

            {/* Change */}
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