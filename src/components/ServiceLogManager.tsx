import React, { useState } from "react";
import ServiceLogTable from "./ServiceLogTable";
import ServiceLogForm from "./ServiceLogForm";

const ServiceLogManager: React.FC = () => {
  const [editId, setEditId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditId(id);
  };

  return (
    <>
      <ServiceLogForm editId={editId ?? undefined} />
      <ServiceLogTable onEdit={handleEdit} />
    </>
  );
};

export default ServiceLogManager;
