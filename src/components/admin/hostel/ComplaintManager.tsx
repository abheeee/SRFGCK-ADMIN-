import React from "react";
import { MessageSquareWarning, UserRound, Clock3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const complaints = [
  {
    id: 1,
    student: "Arun S",
    complaint: "Water supply issue in room A-103",
    date: "2026-04-10",
    status: "Open",
  },
  {
    id: 2,
    student: "Pooja M",
    complaint: "Fan not working in room B-204",
    date: "2026-04-11",
    status: "Resolved",
  },
];

const ComplaintManager: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Complaint Manager</CardTitle>
        <p className="text-sm text-muted-foreground">
          Hostel maintenance and student complaints
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {complaints.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{item.complaint}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <UserRound className="h-4 w-4" />
                      {item.student}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {item.date}
                    </span>
                  </div>
                </div>

                <Badge
                  variant={item.status === "Resolved" ? "default" : "secondary"}
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplaintManager;