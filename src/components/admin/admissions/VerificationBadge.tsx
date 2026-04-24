import React from "react";
import type { Applicant } from "./ApplicationTable";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock3, XCircle, ShieldCheck } from "lucide-react";

interface Props {
  applicant: Applicant;
}

const VerificationBadge: React.FC<Props> = ({ applicant }) => {
  const uploaded = applicant.documents.filter(
    (doc) => doc.status !== "Missing"
  ).length;

  const total = applicant.documents.length;

  const missing = applicant.documents.filter(
    (doc) => doc.status === "Missing"
  ).length;

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
            <ShieldCheck className="h-5 w-5 text-orange-600" />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">Verification Summary</h2>
            <p className="text-sm text-slate-500">{applicant.applicationNo}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">
              Current Verification
            </p>
            <VerificationStatus status={applicant.verification} />
          </div>

          <div className="mt-4 space-y-3">
            <InfoRow
              icon={<CheckCircle className="h-4 w-4 text-green-600" />}
              label="Uploaded Documents"
              value={`${uploaded}/${total}`}
            />
            <InfoRow
              icon={<Clock3 className="h-4 w-4 text-yellow-600" />}
              label="Pending Review"
              value={`${total - uploaded + missing}`}
            />
            <InfoRow
              icon={<XCircle className="h-4 w-4 text-red-600" />}
              label="Missing Documents"
              value={`${missing}`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
    <div className="flex items-center gap-2 text-sm text-slate-600">
      {icon}
      {label}
    </div>
    <p className="font-bold text-slate-900">{value}</p>
  </div>
);

const VerificationStatus = ({ status }: { status: string }) => {
  const cls =
    status === "Verified"
      ? "bg-green-50 text-green-700 border-green-200"
      : status === "Rejected"
      ? "bg-red-50 text-red-700 border-red-200"
      : "bg-yellow-50 text-yellow-700 border-yellow-200";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${cls}`}
    >
      {status}
    </span>
  );
};

export default VerificationBadge;