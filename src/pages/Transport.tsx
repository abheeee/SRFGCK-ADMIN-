import React from "react";
import { BusFront, MapPinned, Users, Route } from "lucide-react";

import BusRouteList from "@/components/admin/transport/BusRouteList";
import BusForm from "@/components/admin/transport/BusForm";
import RouteMap from "@/components/admin/transport/RouteMap";
import DriverDetails from "@/components/admin/transport/DriverDetails";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Transport: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Transport Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage bus routes, drivers, timings, and transport details
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Buses</p>
              <h2 className="mt-1 text-2xl font-bold">8</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <BusFront className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Routes</p>
              <h2 className="mt-1 text-2xl font-bold">12</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Route className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Drivers</p>
              <h2 className="mt-1 text-2xl font-bold">8</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Active Routes</p>
              <h2 className="mt-1 text-2xl font-bold">10</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <MapPinned className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="routes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          <TabsTrigger value="routes">Bus Routes</TabsTrigger>
          <TabsTrigger value="form">Add Route</TabsTrigger>
          <TabsTrigger value="map">Route Map</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
        </TabsList>

        <TabsContent value="routes">
          <BusRouteList />
        </TabsContent>

        <TabsContent value="form">
          <BusForm />
        </TabsContent>

        <TabsContent value="map">
          <RouteMap />
        </TabsContent>

        <TabsContent value="drivers">
          <DriverDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Transport;