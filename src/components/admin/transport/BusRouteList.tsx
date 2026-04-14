import React from "react";
import { MapPinned, Bus, Clock3, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const routes = [
  {
    id: 1,
    routeName: "Town Center - College",
    busNo: "KA-01-2345",
    driver: "Ramesh",
    timing: "8:00 AM",
    status: "Active",
  },
  {
    id: 2,
    routeName: "City Bus Stand - College",
    busNo: "KA-05-6789",
    driver: "Suresh",
    timing: "8:20 AM",
    status: "Active",
  },
  {
    id: 3,
    routeName: "Market Road - College",
    busNo: "KA-09-1122",
    driver: "Mahesh",
    timing: "8:10 AM",
    status: "Inactive",
  },
];

const BusRouteList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Bus Route List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage college bus routes and schedules
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {routes.map((route) => (
            <div
              key={route.id}
              className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary/10 p-2">
                  <MapPinned className="h-5 w-5 text-primary" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold">{route.routeName}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bus className="h-4 w-4" />
                      {route.busNo}
                    </span>
                    <span>{route.driver}</span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="h-4 w-4" />
                      {route.timing}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge
                  variant={route.status === "Active" ? "default" : "secondary"}
                >
                  {route.status}
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

export default BusRouteList;