import React, { useState } from "react";
import type { Applicant } from "./ApplicationTable";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, XCircle, Clock3 } from "lucide-react";

interface Props {
  applicant: Applicant;
  onUpdateStatus: (id: string, status: Applicant["status"]) => void;
}

const StatusUpdateDialog: React.FC<Props> = ({
  applicant,
  onUpdateStatus,
}) => {
  const [status, setStatus] = useState<Applicant["status"]>(applicant.status);
  const [remarks, setRemarks] = useState("");

  const handleUpdate = () => {
    onUpdateStatus(applicant.id, status);
    setRemarks("");
  };

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Update Admission Status
          </h2>
          <p className="text-sm text-slate-500">
            Approve, reject, or keep the application under review.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Select Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Applicant["status"])}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Remarks
            </label>

            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              rows={4}
              placeholder="Enter remarks for this application..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <QuickButton
              label="Approve"
              icon={<CheckCircle className="h-4 w-4" />}
              onClick={() => setStatus("Approved")}
              className="border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
            />

            <QuickButton
              label="Review"
              icon={<Clock3 className="h-4 w-4" />}
              onClick={() => setStatus("Under Review")}
              className="border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
            />

            <QuickButton
              label="Reject"
              icon={<XCircle className="h-4 w-4" />}
              onClick={() => setStatus("Rejected")}
              className="border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
            />

            <QuickButton
              label="Pending"
              icon={<Clock3 className="h-4 w-4" />}
              onClick={() => setStatus("Pending")}
              className="border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
            />
          </div>

          <Button
            onClick={handleUpdate}
            className="w-full gap-2 bg-orange-600 hover:bg-orange-700"
          >
            <Send className="h-4 w-4" />
            Update Status
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const QuickButton = ({
  label,
  icon,
  onClick,
  className,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  className: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${className}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default StatusUpdateDialog;