import React from "react";
import { CalendarDays, Dot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const calendarDays = [
  { day: "Mon", date: 1, event: false },
  { day: "Tue", date: 2, event: true },
  { day: "Wed", date: 3, event: false },
  { day: "Thu", date: 4, event: true },
  { day: "Fri", date: 5, event: false },
  { day: "Sat", date: 6, event: true },
  { day: "Sun", date: 7, event: false },
];

const CalendarView: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Calendar View</CardTitle>
        <p className="text-sm text-muted-foreground">
          Overview of scheduled college events
        </p>
      </CardHeader>

      <CardContent>
        <div className="rounded-2xl border bg-muted/20 p-4 sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-primary font-semibold">
            <CalendarDays className="h-5 w-5" />
            April 2026
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {calendarDays.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border bg-background p-4 text-center shadow-sm"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  {item.day}
                </p>
                <p className="mt-2 text-lg font-bold">{item.date}</p>
                {item.event && (
                  <div className="mt-2 flex items-center justify-center text-primary">
                    <Dot className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarView;