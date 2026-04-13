import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download, Filter, ChevronLeft, ChevronRight } from "lucide-react";

/* ✅ TYPES */
interface Application {
  id: string;
  applicationNumber: string;
  name: string;
  email: string;
  course: string;
  appliedDate: string;
  status: "pending" | "verified" | "approved" | "rejected";
}

/* ✅ ADD THIS (IMPORTANT FIX) */
interface ApplicationTableProps {
  status?: string;
  searchTerm?: string;
}

/* ✅ MOCK DATA */
const mockApplications: Application[] = [
  {
    id: "1",
    applicationNumber: "APP2024001",
    name: "John Doe",
    email: "john@example.com",
    course: "BCA",
    appliedDate: "2024-01-15",
    status: "pending",
  },
  {
    id: "2",
    applicationNumber: "APP2024002",
    name: "Jane Smith",
    email: "jane@example.com",
    course: "BBA",
    appliedDate: "2024-01-14",
    status: "verified",
  },
  {
    id: "3",
    applicationNumber: "APP2024003",
    name: "Mike Johnson",
    email: "mike@example.com",
    course: "BSc",
    appliedDate: "2024-01-13",
    status: "approved",
  },
];

/* ✅ STATUS COLOR */
const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "bg-yellow-500";
    case "verified": return "bg-blue-500";
    case "approved": return "bg-green-500";
    case "rejected": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

/* ✅ COMPONENT */
const ApplicationTable: React.FC<ApplicationTableProps> = ({
  status = "all",
  searchTerm = "",
}) => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  /* ✅ FILTER LOGIC */
  let filteredApplications = mockApplications;

  if (status !== "all") {
    filteredApplications = filteredApplications.filter(
      (app) => app.status === status
    );
  }

  if (searchTerm) {
    filteredApplications = filteredApplications.filter(
      (app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  /* ✅ PAGINATION */
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedApplications = filteredApplications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="space-y-4">

      {/* Top Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block border rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black">App No.</TableHead>
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Email</TableHead>
              <TableHead className="text-black">Course</TableHead>
              <TableHead className="text-black">Date</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedApplications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="text-black">{app.applicationNumber}</TableCell>
                <TableCell className="text-black">{app.name}</TableCell>
                <TableCell className="text-black">{app.email}</TableCell>
                <TableCell className="text-black">{app.course}</TableCell>
                <TableCell className="text-black">{app.appliedDate}</TableCell>
                <TableCell className="text-black">
                  <Badge className={getStatusColor(app.status)} >
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => navigate(`/admissions/${app.id}`)}
                  >
                    <Eye className="h-4 w-4 text-black" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ✅ Mobile Cards */}
      <div className="grid gap-3 md:hidden">
        {paginatedApplications.map((app) => (
          <div key={app.id} className="border rounded-lg p-3 space-y-2 shadow-sm">

            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm">{app.applicationNumber}</p>
              <Badge className={getStatusColor(app.status)}>
                {app.status}
              </Badge>
            </div>

            <p className="text-sm font-medium">{app.name}</p>
            <p className="text-xs text-muted-foreground break-all">{app.email}</p>

            <div className="flex justify-between text-xs">
              <span>{app.course}</span>
              <span>{app.appliedDate}</span>
            </div>

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

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-xs sm:text-sm text-muted-foreground">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredApplications.length)} of{" "}
          {filteredApplications.length}
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

    </div>
  );
};

export default ApplicationTable;