import React from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApplicationDetails: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Application Details</CardTitle>
        <p className="text-sm text-muted-foreground">
          Detailed information of selected student application
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <p className="mb-3 text-sm font-semibold text-primary">
              Personal Information
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Rahul Kumar
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                rahul@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                9876543210
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bangalore, Karnataka
              </p>
            </div>
          </div>

          <div className="rounded-xl border p-4">
            <p className="mb-3 text-sm font-semibold text-primary">
              Academic Information
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Applied Course: B.Sc
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Applied On: 16 Apr 2026
              </p>
              <p>Previous Qualification: PUC / 12th Standard</p>
              <p>Percentage: 86%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationDetails;