import React from "react";
import { Building2, Users, BedDouble, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hostels = [
  {
    id: 1,
    name: "Boys Hostel Block A",
    warden: "Mr. Ramesh",
    rooms: 40,
    occupied: 34,
    status: "Active",
  },
  {
    id: 2,
    name: "Girls Hostel Block B",
    warden: "Mrs. Kavya",
    rooms: 35,
    occupied: 29,
    status: "Active",
  },
  {
    id: 3,
    name: "PG Hostel Block C",
    warden: "Mr. Suresh",
    rooms: 20,
    occupied: 15,
    status: "Maintenance",
  },
];

const HostelList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Hostel List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Overview of hostel blocks and room occupancy
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {hostels.map((hostel) => (
            <div
              key={hostel.id}
              className="rounded-2xl border bg-background p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant={
                    hostel.status === "Active" ? "default" : "secondary"
                  }
                >
                  {hostel.status}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold">{hostel.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Warden: {hostel.warden}
              </p>

              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  <span>Total Rooms: {hostel.rooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Occupied: {hostel.occupied}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4" />
                  <span>Available: {hostel.rooms - hostel.occupied}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HostelList;