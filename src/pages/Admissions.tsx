import React from "react";
import { Users, FileText, ShieldCheck, Clock3 } from "lucide-react";

import ApplicationTable from "@/components/admin/admissions/ApplicationTable";
import ApplicationDetails from "@/components/admin/admissions/ApplicationDetails";
import DocumentViewer from "@/components/admin/admissions/DocumentViewer";
import VerificationBadge from "@/components/admin/admissions/VerificationBadge";
import StatusUpdateDialog from "@/components/admin/admissions/StatusUpdateDialog";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admissions: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Admissions Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage student applications, documents, verification, and status updates
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <h2 className="mt-1 text-2xl font-bold">156</h2>
            </div>
            <Users className="h-5 w-5 text-primary" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Documents</p>
              <h2 className="mt-1 text-2xl font-bold">420</h2>
            </div>
            <FileText className="h-5 w-5 text-primary" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Verified</p>
              <h2 className="mt-1 text-2xl font-bold">98</h2>
            </div>
            <ShieldCheck className="h-5 w-5 text-primary" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <h2 className="mt-1 text-2xl font-bold">58</h2>
            </div>
            <Clock3 className="h-5 w-5 text-primary" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="status">Update Status</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <ApplicationTable />
        </TabsContent>

        <TabsContent value="details">
          <ApplicationDetails />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentViewer />
        </TabsContent>

        <TabsContent value="verification">
          <VerificationBadge />
        </TabsContent>

        <TabsContent value="status">
          <StatusUpdateDialog />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admissions;