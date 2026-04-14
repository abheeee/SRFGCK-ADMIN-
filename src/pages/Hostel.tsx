import React from "react";
import {
  Building2,
  BedDouble,
  Wallet,
  MessageSquareWarning,
} from "lucide-react";

import HostelList from "@/components/admin/hostel/HostelList";
import RoomGrid from "@/components/admin/hostel/RoomGrid";
import RoomAllocation from "@/components/admin/hostel/RoomAllocation";
import HostelApplication from "@/components/admin/hostel/HostelApplication";
import FeeTracker from "@/components/admin/hostel/FeeTracker";
import ComplaintManager from "@/components/admin/hostel/ComplaintManager";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hostel: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Hostel Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage hostels, room allocations, applications, fees, and complaints
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Hostels</p>
              <h2 className="mt-1 text-2xl font-bold">3</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Rooms</p>
              <h2 className="mt-1 text-2xl font-bold">95</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <BedDouble className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Fee Records</p>
              <h2 className="mt-1 text-2xl font-bold">52</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Complaints</p>
              <h2 className="mt-1 text-2xl font-bold">7</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <MessageSquareWarning className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hostels" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
          <TabsTrigger value="hostels">Hostels</TabsTrigger>
          <TabsTrigger value="rooms">Room Grid</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
          <TabsTrigger value="complaints">Complaints</TabsTrigger>
        </TabsList>

        <TabsContent value="hostels">
          <HostelList />
        </TabsContent>

        <TabsContent value="rooms">
          <RoomGrid />
        </TabsContent>

        <TabsContent value="allocation">
          <RoomAllocation />
        </TabsContent>

        <TabsContent value="applications">
          <HostelApplication />
        </TabsContent>

        <TabsContent value="fees">
          <FeeTracker />
        </TabsContent>

        <TabsContent value="complaints">
          <ComplaintManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Hostel;