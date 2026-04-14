import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const courseData = [
  { name: "BCA", applications: 245, capacity: 300, percentage: 82 },
  { name: "B.A", applications: 189, capacity: 250, percentage: 76 },
  { name: "BCom", applications: 167, capacity: 200, percentage: 84 },
];

const CourseWiseStats: React.FC = () => {
  return (
    <Card className="w-full min-w-0 overflow-hidden">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Course-wise Applications
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-5 min-w-0">
        {courseData.map((course) => (
          <div
            key={course.name}
            className="space-y-2 rounded-lg border p-2 sm:p-3 w-full min-w-0 overflow-hidden"
          >
            <div className="flex min-w-0 items-center justify-between gap-3">
              <span className="truncate font-medium text-sm sm:text-base">
                {course.name}
              </span>

              <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
                {course.applications} / {course.capacity}
              </span>
            </div>

            <Progress
              value={course.percentage}
              className="h-2 w-full sm:h-2.5"
            />

            <p className="text-[11px] text-muted-foreground sm:text-xs">
              {course.percentage}% seats filled
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseWiseStats;