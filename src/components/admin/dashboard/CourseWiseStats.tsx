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
    <Card>
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Course-wise Applications
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-5">
        {courseData.map((course) => (
          <div
            key={course.name}
            className="space-y-2 p-2 sm:p-3 rounded-lg border"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm sm:text-base">
                {course.name}
              </span>

              <span className="text-xs sm:text-sm text-muted-foreground">
                {course.applications} / {course.capacity}
              </span>
            </div>

            {/* Progress */}
            <Progress
              value={course.percentage}
              className="h-2 sm:h-2.5"
            />

            {/* Bottom Text */}
            <p className="text-[11px] sm:text-xs text-muted-foreground">
              {course.percentage}% seats filled
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseWiseStats;