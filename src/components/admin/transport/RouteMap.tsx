import React from "react";
import { Map, MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stops = [
  "Town Center",
  "Main Circle",
  "Old Bus Stand",
  "Railway Gate",
  "College Campus",
];

const RouteMap: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Route Map</CardTitle>
        <p className="text-sm text-muted-foreground">
          Visual route overview for bus stops
        </p>
      </CardHeader>

      <CardContent>
        <div className="rounded-2xl border border-dashed bg-muted/30 p-5">
          <div className="mb-4 flex items-center gap-2 font-semibold text-primary">
            <Map className="h-5 w-5" />
            Sample Route Path
          </div>

          <div className="space-y-4">
            {stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  {index === stops.length - 1 ? (
                    <Navigation className="h-4 w-4 text-primary" />
                  ) : (
                    <MapPin className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{stop}</p>
                  <p className="text-xs text-muted-foreground">
                    Stop {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RouteMap;