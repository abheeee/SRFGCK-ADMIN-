import React from "react";
import {
  Eye,
  Mail,
  Phone,
  Search,
  GraduationCap,
  CalendarDays,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ================= TYPES ================= */

export interface Applicant {
  id: string;
  applicationNo: string;
  submittedDate: string;

  applicationFor: string;
  specialization: string;

  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  nationality: string;
  motherTongue: string;
  languages: string;
  placeOfBirth: string;
  state: string;
  religion: string;
  caste: string;
  category: string;

  sslcSchool: string;
  sslcBoard: string;
  sslcPercentage: string;
  sslcYear: string;

  pucSchool: string;
  pucBoard: string;
  pucPercentage: string;
  pucYear: string;
  pucSubjects: string;

  degreeCollege: string;
  degreeBoard: string;
  degreePercentage: string;
  degreeYear: string;
  degreeTotalMarks: string;

  verification: "Verified" | "Pending" | "Rejected";
  status: "Pending" | "Approved" | "Rejected" | "Under Review";

  documents: {
    name: string;
    status: "Uploaded" | "Missing" | "Verified";
  }[];
}

/* ================= DUMMY DATA ================= */

export const applicantsData: Applicant[] = [
  {
    id: "1",
    applicationNo: "SRFGC-ADM-001",
    submittedDate: "24 Apr 2026",
    applicationFor: "BCA",
    specialization: "BCA (Regular)",
    fullName: "Abhishek Kumar",
    gender: "Male",
    dob: "2006-06-14",
    email: "abhishek@example.com",
    phone: "9876543210",
    nationality: "Indian",
    motherTongue: "Kannada",
    languages: "Kannada, English",
    placeOfBirth: "Kalladka",
    state: "Karnataka",
    religion: "Hindu",
    caste: "General",
    category: "General / OC",
    sslcSchool: "Sri Rama School",
    sslcBoard: "KSEEB",
    sslcPercentage: "88%",
    sslcYear: "2022",
    pucSchool: "Sri Rama PU College",
    pucBoard: "PUC Board",
    pucPercentage: "92%",
    pucYear: "2024",
    pucSubjects: "PCM",
    degreeCollege: "",
    degreeBoard: "",
    degreePercentage: "",
    degreeYear: "",
    degreeTotalMarks: "",
    verification: "Pending",
    status: "Pending",
    documents: [
      { name: "SSLC Marks Card", status: "Uploaded" },
      { name: "PUC Marks Card", status: "Uploaded" },
    ],
  },
];

/* ================= PROPS ================= */

interface Props {
  applicants: Applicant[];
  selectedApplicant: Applicant | null;
  onViewDetails: (applicant: Applicant) => void;
}

/* ================= COMPONENT ================= */

const ApplicationTable: React.FC<Props> = ({
  applicants,
  selectedApplicant,
  onViewDetails,
}) => {
  /* ================= PDF DOWNLOAD ================= */

  const downloadPDF = (applicant: Applicant) => {
    const win = window.open("", "_blank");
    if (!win) return;

    win.document.write(`
      <html>
        <head>
          <title>${applicant.applicationNo}</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { color: #ea580c; }
            table { width:100%; border-collapse: collapse; }
            td { padding:8px; border:1px solid #ddd; }
            td:first-child { font-weight:bold; background:#f9fafb; }
          </style>
        </head>
        <body>
          <h1>Admission Form</h1>

          <table>
            <tr><td>Name</td><td>${applicant.fullName}</td></tr>
            <tr><td>Course</td><td>${applicant.applicationFor}</td></tr>
            <tr><td>Specialization</td><td>${applicant.specialization}</td></tr>
            <tr><td>Email</td><td>${applicant.email}</td></tr>
            <tr><td>Phone</td><td>${applicant.phone}</td></tr>
          </table>
        </body>
      </html>
    `);

    win.document.close();
    win.print();
  };

  /* ================= UI ================= */

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-0">
        <div className="p-5 border-b">
          <h2 className="text-lg font-bold">Applications</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-gray-50">
              <tr>
                <Th>Name</Th>
                <Th>Course</Th>
                <Th>Contact</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id} className="border-t">
                  <Td>{applicant.fullName}</Td>
                  <Td>{applicant.applicationFor}</Td>
                  <Td>{applicant.phone}</Td>
                  <Td>{applicant.submittedDate}</Td>
                  <Td>{applicant.status}</Td>

                  <Td>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => onViewDetails(applicant)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadPDF(applicant)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

/* ================= HELPERS ================= */

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left text-sm font-semibold">{children}</th>
);

const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-3 text-sm">{children}</td>
);

export default ApplicationTable;