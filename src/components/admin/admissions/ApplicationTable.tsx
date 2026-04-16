import React from "react";
import { Eye, FileText, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const applications = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "9876543210",
    course: "B.Sc",
    status: "Pending",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    email: "anjali@gmail.com",
    phone: "9123456789",
    course: "B.Com",
    status: "Approved",
  },
  {
    id: 3,
    name: "Kiran P",
    email: "kiran@gmail.com",
    phone: "9012345678",
    course: "BA",
    status: "Rejected",
  },
];

const ApplicationTable: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Application Table</CardTitle>
        <p className="text-sm text-muted-foreground">
          View and manage student admission applications
        </p>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-sm">
            <thead>
              <tr className="border-b bg-muted/40 text-left">
                <th className="px-4 py-3 font-semibold">Student</th>
                <th className="px-4 py-3 font-semibold">Contact</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item) => (
                <tr key={item.id} className="border-b hover:bg-muted/20">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Application ID: ADM-{item.id}0{item.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        {item.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        {item.phone}
                      </p>
                    </div>
                  </td>

                  <td className="px-4 py-4">{item.course}</td>

                  <td className="px-4 py-4">
                    <Badge
                      variant={
                        item.status === "Approved"
                          ? "default"
                          : item.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>

                  <td className="px-4 py-4">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationTable;