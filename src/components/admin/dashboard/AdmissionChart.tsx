import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", applications: 65, approved: 45 },
  { month: "Feb", applications: 78, approved: 52 },
  { month: "Mar", applications: 90, approved: 68 },
  { month: "Apr", applications: 81, approved: 59 },
  { month: "May", applications: 95, approved: 72 },
  { month: "Jun", applications: 110, approved: 85 },
];

const AdmissionChart: React.FC = () => {
  return (
    <Card className="w-full min-w-0 overflow-hidden">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Admission Trends
        </CardTitle>
      </CardHeader>

      <CardContent className="min-w-0 overflow-hidden">
        <div className="h-[220px] w-full min-w-0 sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                interval={0}
              />

              <YAxis
                tick={{ fontSize: 10 }}
                width={28}
              />

              <Tooltip />

              <Legend
                wrapperStyle={{
                  fontSize: "10px",
                  paddingTop: "5px",
                }}
              />

              <Line
                type="monotone"
                dataKey="applications"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                name="Applications"
              />

              <Line
                type="monotone"
                dataKey="approved"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
                name="Approved"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdmissionChart;