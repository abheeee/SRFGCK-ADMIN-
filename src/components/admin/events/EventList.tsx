import React from "react";
import { Pencil, Trash2, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "2026-04-20",
    time: "10:00 AM",
    location: "Main Auditorium",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "2026-04-25",
    time: "11:30 AM",
    location: "Science Block",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Sports Meet",
    date: "2026-03-15",
    time: "9:00 AM",
    location: "College Ground",
    status: "Completed",
  },
];

const EventList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Event List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage all college events and activities
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-2">
                <h3 className="font-semibold">{event.title}</h3>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    event.status === "Upcoming" ? "default" : "secondary"
                  }
                >
                  {event.status}
                </Badge>

                <Button size="icon" variant="outline">
                  <Pencil className="h-4 w-4" />
                </Button>

                <Button size="icon" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventList;