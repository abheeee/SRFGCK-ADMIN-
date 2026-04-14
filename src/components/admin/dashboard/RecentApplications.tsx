import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recentApplications = [
  { id: "APP001", name: "John Doe", course: "BCA", date: "2024-01-15", status: "pending" },
  { id: "APP002", name: "Jane Smith", course: "BBA", date: "2024-01-14", status: "verified" },
  { id: "APP003", name: "Mike Johnson", course: "BSc", date: "2024-01-14", status: "approved" },
  { id: "APP004", name: "Sarah Williams", course: "BCA", date: "2024-01-13", status: "pending" },
  { id: "APP005", name: "David Brown", course: "MBA", date: "2024-01-13", status: "rejected" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "verified":
      return "bg-blue-500";
    case "approved":
      return "bg-green-500";
    case "rejected":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const RecentApplications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full min-w-0 overflow-hidden">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Recent Applications
        </CardTitle>
      </CardHeader>

      <CardContent className="min-w-0 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden w-full min-w-0 overflow-x-auto md:block">
          <Table className="w-full min-w-0">
            <TableHeader>
              <TableRow>
                <TableHead>App No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {app.id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{app.name}</TableCell>
                  <TableCell className="whitespace-nowrap">{app.course}</TableCell>
                  <TableCell className="whitespace-nowrap">{app.date}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admissions/${app.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid gap-3 md:hidden">
          {recentApplications.map((app) => (
            <div
              key={app.id}
              className="w-full min-w-0 space-y-2 rounded-lg border p-3 shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-semibold text-sm">{app.id}</p>
                <Badge className={getStatusColor(app.status)}>
                  {app.status}
                </Badge>
              </div>

              <p className="truncate text-sm font-medium">{app.name}</p>

              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="truncate">{app.course}</span>
                <span className="shrink-0">{app.date}</span>
              </div>

              <Button
                size="sm"
                className="w-full"
                onClick={() => navigate(`/admissions/${app.id}`)}
              >
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentApplications;