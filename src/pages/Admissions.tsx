import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ApplicationTable from "@/components/admin/admissions/ApplicationTable";

const Admissions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4 sm:space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">

        {/* Title */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Admissions
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage and review student applications
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72 md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-9 sm:h-10 text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">

        {/* Scrollable Tabs for mobile */}
        <div className="overflow-x-auto">
          <TabsList className="flex w-max min-w-full gap-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="verified">Verified</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
        </div>

        {/* Content */}
        <TabsContent value="all">
          <ApplicationTable status="all" searchTerm={searchTerm} />
        </TabsContent>

        <TabsContent value="pending">
          <ApplicationTable status="pending" searchTerm={searchTerm} />
        </TabsContent>

        <TabsContent value="verified">
          <ApplicationTable status="verified" searchTerm={searchTerm} />
        </TabsContent>

        <TabsContent value="approved">
          <ApplicationTable status="approved" searchTerm={searchTerm} />
        </TabsContent>

        <TabsContent value="rejected">
          <ApplicationTable status="rejected" searchTerm={searchTerm} />
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default Admissions;