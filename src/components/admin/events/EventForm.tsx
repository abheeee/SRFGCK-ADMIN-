import React from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventForm: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Add Event</CardTitle>
        <p className="text-sm text-muted-foreground">
          Create or update college event details
        </p>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Event Title</Label>
            <Input placeholder="Enter event title" />
          </div>

          <div className="space-y-2">
            <Label>Event Date</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Event Time</Label>
            <Input type="time" />
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Input placeholder="Enter event location" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Enter event description"
              className="min-h-[110px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save Event
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EventForm;