import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
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
    case "pending": return "bg-yellow-500";
    case "verified": return "bg-blue-500";
    case "approved": return "bg-green-500";
    case "rejected": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const RecentApplications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Recent Applications
        </CardTitle>
      </CardHeader>

      <CardContent>

        {/* ✅ Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>App No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.id}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.course}</TableCell>
                  <TableCell>{app.date}</TableCell>
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

        {/* ✅ Mobile Card View */}
        <div className="grid gap-3 md:hidden">
          {recentApplications.map((app) => (
            <div
              key={app.id}
              className="border rounded-lg p-3 space-y-2 shadow-sm"
            >
              {/* Top */}
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm">{app.id}</p>
                <Badge className={getStatusColor(app.status)}>
                  {app.status}
                </Badge>
              </div>

              {/* Name */}
              <p className="text-sm font-medium">{app.name}</p>

              {/* Info */}
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{app.course}</span>
                <span>{app.date}</span>
              </div>

              {/* Action */}
              <Button
                size="sm"
                className="w-full"
                onClick={() => navigate(`/admissions/${app.id}`)}
              >
                <Eye className="h-4 w-4 mr-2" />
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