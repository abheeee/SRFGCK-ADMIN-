import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusUpdateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (status: string, remarks: string) => void;
}

const StatusUpdateDialog: React.FC<StatusUpdateDialogProps> = ({
  open,
  onOpenChange,
  onConfirm,
}) => {
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleConfirm = () => {
    onConfirm(status, remarks);
    setStatus("");
    setRemarks("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[95%] 
          max-w-lg 
          rounded-xl
          p-4 sm:p-6
          max-h-[90vh] 
          overflow-y-auto
        "
      >
        {/* Header */}
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-base sm:text-lg">
            Update Application Status
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Change the status and optionally add remarks.
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="space-y-4 py-3 sm:py-4">

          {/* Status */}
          <div className="space-y-1.5">
            <Label className="text-sm">Status</Label>
            <Select onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Remarks */}
          <div className="space-y-1.5">
            <Label className="text-sm">Remarks (Optional)</Label>
            <Textarea
              className="min-h-[90px] text-sm"
              placeholder="Add remarks..."
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

        </div>

        {/* Footer */}
        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            className="w-full sm:w-auto"
            onClick={handleConfirm}
          >
            Update Status
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StatusUpdateDialog;