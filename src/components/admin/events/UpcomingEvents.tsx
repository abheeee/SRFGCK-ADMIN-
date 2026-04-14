import React from "react";
import { CalendarClock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "20 Apr 2026",
    place: "Main Auditorium",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "25 Apr 2026",
    place: "Science Block",
  },
  {
    id: 3,
    title: "Cultural Fest",
    date: "30 Apr 2026",
    place: "Open Stage",
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Upcoming Events</CardTitle>
        <p className="text-sm text-muted-foreground">
          Quick look at the nearest scheduled activities
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border bg-background p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.place}
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  View
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;