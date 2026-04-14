import React from "react";
import { CalendarDays, ListTodo, Clock3, PartyPopper } from "lucide-react";

import CalendarView from "@/components/admin/events/CalendarView";
import EventList from "@/components/admin/events/EventList";
import EventForm from "@/components/admin/events/EventForm";
import UpcomingEvents from "@/components/admin/events/UpcomingEvents";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Events Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage college events, schedules, and upcoming programs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Events</p>
              <h2 className="mt-1 text-2xl font-bold">18</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <PartyPopper className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <h2 className="mt-1 text-2xl font-bold">6</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Clock3 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Calendar Entries</p>
              <h2 className="mt-1 text-2xl font-bold">12</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Event Records</p>
              <h2 className="mt-1 text-2xl font-bold">24</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <ListTodo className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="list">Event List</TabsTrigger>
          <TabsTrigger value="form">Add Event</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>

        <TabsContent value="list">
          <EventList />
        </TabsContent>

        <TabsContent value="form">
          <EventForm />
        </TabsContent>

        <TabsContent value="upcoming">
          <UpcomingEvents />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;