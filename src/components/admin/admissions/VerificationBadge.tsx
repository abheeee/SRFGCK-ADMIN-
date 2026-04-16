import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  Clock3,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const verificationItems = [
  {
    label: "Student Information",
    status: "Verified",
    icon: BadgeCheck,
  },
  {
    label: "Academic Documents",
    status: "Verified",
    icon: ShieldCheck,
  },
  {
    label: "Address Proof",
    status: "Pending",
    icon: Clock3,
  },
  {
    label: "Photo Verification",
    status: "Review Required",
    icon: AlertTriangle,
  },
];

const VerificationBadge: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Verification Status</CardTitle>
        <p className="text-sm text-muted-foreground">
          Application verification progress and badge status
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {verificationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="rounded-xl border p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationBadge;