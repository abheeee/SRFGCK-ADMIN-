import React from "react";
import { IndianRupee, ReceiptText, CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const feeData = [
  {
    id: 1,
    student: "Rahul Kumar",
    amount: "₹25,000",
    dueDate: "2026-04-20",
    status: "Paid",
  },
  {
    id: 2,
    student: "Sneha R",
    amount: "₹25,000",
    dueDate: "2026-04-20",
    status: "Pending",
  },
];

const FeeTracker: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Fee Tracker</CardTitle>
        <p className="text-sm text-muted-foreground">
          Track hostel fee payment records
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {feeData.map((fee) => (
            <div
              key={fee.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">{fee.student}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4" />
                      {fee.amount}
                    </span>
                    <span className="flex items-center gap-2">
                      <ReceiptText className="h-4 w-4" />
                      Due: {fee.dueDate}
                    </span>
                  </div>
                </div>

                <Badge
                  variant={fee.status === "Paid" ? "default" : "secondary"}
                >
                  {fee.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeTracker;