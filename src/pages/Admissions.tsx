import React, { useMemo, useState } from "react";
import { Users, FileText, ShieldCheck, Clock3 } from "lucide-react";

import ApplicationTable, {
  type Applicant,
  applicantsData,
} from "@/components/admin/admissions/ApplicationTable";
import ApplicationDetails from "@/components/admin/admissions/ApplicationDetails";

import { Card, CardContent } from "@/components/ui/card";

const Admissions: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>(applicantsData);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );

  const stats = useMemo(() => {
    return {
      total: applicants.length,
      documents: applicants.reduce(
        (sum, applicant) => sum + applicant.documents.length,
        0
      ),
      verified: applicants.filter(
        (applicant) => applicant.verification === "Verified"
      ).length,
      pending: applicants.filter((applicant) => applicant.status === "Pending")
        .length,
    };
  }, [applicants]);

  const updateStatus = (id: string, status: Applicant["status"]) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id ? { ...applicant, status } : applicant
      )
    );

    setSelectedApplicant((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev
    );
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Admissions Management
        </h1>
        <p className="text-sm text-slate-500">
          Manage student applications and view complete admission form details.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Applications"
          value={stats.total}
          icon={<Users className="h-5 w-5 text-orange-600" />}
        />
        <StatsCard
          title="Documents"
          value={stats.documents}
          icon={<FileText className="h-5 w-5 text-orange-600" />}
        />
        <StatsCard
          title="Verified"
          value={stats.verified}
          icon={<ShieldCheck className="h-5 w-5 text-green-600" />}
        />
        <StatsCard
          title="Pending"
          value={stats.pending}
          icon={<Clock3 className="h-5 w-5 text-yellow-600" />}
        />
      </div>

      <ApplicationTable
        applicants={applicants}
        selectedApplicant={selectedApplicant}
        onViewDetails={setSelectedApplicant}
      />

      {!selectedApplicant && (
        <Card className="rounded-2xl border-dashed border-slate-300 shadow-sm">
          <CardContent className="p-8 text-center">
            <h2 className="text-lg font-bold text-slate-900">
              Select an Application
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Click View Details to see the full student application in popup
              form style.
            </p>
          </CardContent>
        </Card>
      )}

      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <ApplicationDetails
              applicant={selectedApplicant}
              onUpdateStatus={updateStatus}
              onClose={() => setSelectedApplicant(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{value}</h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default Admissions;