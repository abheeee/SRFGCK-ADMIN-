import React from "react";
import { FileText, UserRound, CalendarClock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const applications = [
  {
    id: 1,
    student: "Anjali Sharma",
    course: "B.Sc",
    appliedDate: "2026-04-01",
    status: "Pending",
  },
  {
    id: 2,
    student: "Kiran P",
    course: "B.Com",
    appliedDate: "2026-04-03",
    status: "Approved",
  },
];

const HostelApplication: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Hostel Applications</CardTitle>
        <p className="text-sm text-muted-foreground">
          Student applications for hostel admission
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{app.student}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <UserRound className="h-4 w-4" />
                      {app.course}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4" />
                      {app.appliedDate}
                    </span>
                  </div>
                </div>

                <Badge
                  variant={app.status === "Approved" ? "default" : "secondary"}
                >
                  {app.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HostelApplication;