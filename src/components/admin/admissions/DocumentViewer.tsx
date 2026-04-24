import React from "react";
import type { Applicant } from "./ApplicationTable";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  applicant: Applicant;
}

const DocumentViewer: React.FC<Props> = ({ applicant }) => {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-0">
        <div className="border-b border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-bold text-slate-900">
            Uploaded Documents
          </h2>
          <p className="text-sm text-slate-500">
            Check certificates and admission proof documents.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
          {applicant.documents.map((doc) => (
            <div
              key={doc.name}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">{doc.name}</h3>
                    <DocumentStatus status={doc.status} />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  disabled={doc.status === "Missing"}
                >
                  <Eye className="h-4 w-4" />
                  View
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  disabled={doc.status === "Missing"}
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const DocumentStatus = ({ status }: { status: string }) => {
  const cls =
    status === "Verified"
      ? "bg-green-50 text-green-700 border-green-200"
      : status === "Missing"
      ? "bg-red-50 text-red-700 border-red-200"
      : "bg-yellow-50 text-yellow-700 border-yellow-200";

  return (
    <span
      className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${cls}`}
    >
      {status}
    </span>
  );
};

export default DocumentViewer;