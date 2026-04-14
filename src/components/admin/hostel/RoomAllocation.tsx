import React from "react";
import { UserRound, BedDouble, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const allocations = [
  {
    id: 1,
    student: "Rahul Kumar",
    room: "A-101",
    hostel: "Boys Hostel Block A",
    date: "2026-04-02",
  },
  {
    id: 2,
    student: "Sneha R",
    room: "B-204",
    hostel: "Girls Hostel Block B",
    date: "2026-04-04",
  },
];

const RoomAllocation: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Room Allocation</CardTitle>
        <p className="text-sm text-muted-foreground">
          Students allocated to hostel rooms
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {allocations.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <h3 className="font-semibold">{item.student}</h3>

              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  {item.room}
                </span>
                <span>{item.hostel}</span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomAllocation;