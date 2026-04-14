import React from "react";
import { BedDouble, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rooms = [
  { roomNo: "A-101", status: "Occupied" },
  { roomNo: "A-102", status: "Available" },
  { roomNo: "A-103", status: "Occupied" },
  { roomNo: "A-104", status: "Available" },
  { roomNo: "A-105", status: "Occupied" },
  { roomNo: "A-106", status: "Available" },
  { roomNo: "A-107", status: "Occupied" },
  { roomNo: "A-108", status: "Available" },
];

const RoomGrid: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Room Grid</CardTitle>
        <p className="text-sm text-muted-foreground">
          Visual view of hostel rooms and availability
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <BedDouble className="h-5 w-5 text-primary" />
                </div>
                {room.status === "Available" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>

              <h3 className="font-semibold">{room.roomNo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {room.status}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomGrid;