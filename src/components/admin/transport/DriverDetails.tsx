import React from "react";
import { UserRound, Phone, BadgeCheck, Bus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const drivers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    phone: "9876543210",
    license: "DL-458721",
    assignedBus: "KA-01-2345",
  },
  {
    id: 2,
    name: "Suresh Naik",
    phone: "9123456780",
    license: "DL-874125",
    assignedBus: "KA-05-6789",
  },
];

const DriverDetails: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Driver Details</CardTitle>
        <p className="text-sm text-muted-foreground">
          View assigned drivers and transport details
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <UserRound className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold">{driver.name}</h3>

              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{driver.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4" />
                  <span>License: {driver.license}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bus className="h-4 w-4" />
                  <span>Assigned Bus: {driver.assignedBus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetails;