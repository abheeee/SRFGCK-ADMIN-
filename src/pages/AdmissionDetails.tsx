import React from "react";
import { useParams } from "react-router-dom";
import ApplicationDetails from "@/components/admin/admissions/ApplicationDetails";

const AdmissionDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
      <ApplicationDetails applicationId={id || ""} />
    </div>
  );
};

export default AdmissionDetailsPage;