import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Download, CheckCircle, XCircle, Printer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApplicationDetailsProps {
  applicationId: string;
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ applicationId }) => {
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [remarks, setRemarks] = useState("");

  const application = {
    id: applicationId,
    applicationNumber: "APP2024001",
    status: "pending",
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+91 9876543210",
      dob: "1995-05-15",
      gender: "Male",
      address: "123 Main Street, City",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
    },
    academicInfo: {
      previousInstitution: "ABC College",
      board: "State Board",
      percentage: 85.5,
      yearOfPassing: 2023,
      subjects: ["Mathematics", "Physics", "Computer Science"],
    },
    courseApplied: "BCA",
  };

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

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-6">

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Application Details
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            ID: {application.applicationNumber}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>

          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>

          <Button
            onClick={() => setShowStatusDialog(true)}
            className="w-full xs:col-span-2 sm:w-auto"
          >
            Update Status
          </Button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* LEFT */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">
              Student Information
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="personal" className="space-y-4">

              {/* Tabs */}
              <div className="overflow-x-auto">
                <TabsList className="flex w-max min-w-full gap-2">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
              </div>

              {/* PERSONAL */}
              <TabsContent value="personal">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                  <div>
                    <Label>First Name</Label>
                    <p className="text-sm break-words">
                      {application.personalInfo.firstName}
                    </p>
                  </div>

                  <div>
                    <Label>Last Name</Label>
                    <p className="text-sm break-words">
                      {application.personalInfo.lastName}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <Label>Email</Label>
                    <p className="text-sm break-all">
                      {application.personalInfo.email}
                    </p>
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <p className="text-sm">{application.personalInfo.phone}</p>
                  </div>

                  <div>
                    <Label>DOB</Label>
                    <p className="text-sm">{application.personalInfo.dob}</p>
                  </div>

                  <div>
                    <Label>Gender</Label>
                    <p className="text-sm">{application.personalInfo.gender}</p>
                  </div>

                  <div className="sm:col-span-2">
                    <Label>Address</Label>
                    <p className="text-sm break-words">
                      {application.personalInfo.address}
                    </p>
                  </div>

                  <div>
                    <Label>City</Label>
                    <p className="text-sm">{application.personalInfo.city}</p>
                  </div>

                  <div>
                    <Label>State</Label>
                    <p className="text-sm">{application.personalInfo.state}</p>
                  </div>

                  <div>
                    <Label>Pincode</Label>
                    <p className="text-sm">{application.personalInfo.pincode}</p>
                  </div>

                </div>
              </TabsContent>

              {/* ACADEMIC */}
              <TabsContent value="academic">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                  <div>
                    <Label>Institution</Label>
                    <p className="text-sm">
                      {application.academicInfo.previousInstitution}
                    </p>
                  </div>

                  <div>
                    <Label>Board</Label>
                    <p className="text-sm">
                      {application.academicInfo.board}
                    </p>
                  </div>

                  <div>
                    <Label>Percentage</Label>
                    <p className="text-sm">
                      {application.academicInfo.percentage}%
                    </p>
                  </div>

                  <div>
                    <Label>Year</Label>
                    <p className="text-sm">
                      {application.academicInfo.yearOfPassing}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <Label>Subjects</Label>
                    <p className="text-sm break-words">
                      {application.academicInfo.subjects.join(", ")}
                    </p>
                  </div>

                  <div>
                    <Label>Course</Label>
                    <p className="font-medium">
                      {application.courseApplied}
                    </p>
                  </div>

                </div>
              </TabsContent>

              {/* DOCUMENTS */}
              <TabsContent value="documents">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {["Marksheet", "ID Proof", "Transfer Certificate", "Photo"].map((doc) => (
                    <Card key={doc}>
                      <CardContent className="pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <p className="text-sm font-medium">{doc}</p>
                        <Button variant="link" className="p-0 h-auto">
                          View
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

            </Tabs>
          </CardContent>
        </Card>

        {/* RIGHT */}
        <div className="space-y-4 sm:space-y-6">

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                Status
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center space-y-3">
              <Badge className={`${getStatusColor(application.status)} px-3 py-1 text-xs sm:text-sm`}>
                {application.status.toUpperCase()}
              </Badge>

              <Separator />

              <p className="text-xs sm:text-sm text-muted-foreground">
                Applied: 15 Jan
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                Actions
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <Button className="w-full text-sm" variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Verify
              </Button>

              <Button className="w-full text-sm" variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>

              <Button className="w-full text-sm" variant="outline">
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
        <DialogContent className="w-[95%] sm:max-w-md rounded-lg">
          <DialogHeader>
            <DialogTitle>Update Status</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Status</Label>
              <Select onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Remarks</Label>
              <Textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setShowStatusDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowStatusDialog(false)}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default ApplicationDetails;