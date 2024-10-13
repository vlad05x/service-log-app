import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, MenuItem } from "@mui/material";
import {
  addDraft,
  addServiceLog,
  updateServiceLog,
} from "../store/actions";
import { Draft } from "../store/actions";
import "../App.scss";

const ServiceLogForm: React.FC<{ editId?: string }> = ({ editId }) => {
  const drafts = useSelector((state: { drafts: Draft[] }) => state.drafts);
  const serviceLogs = useSelector(
    (state: { serviceLogs: Draft[] }) => state.serviceLogs
  );
  const dispatch = useDispatch();

  const initialState: Draft = {
    id: "",
    providerId: "",
    serviceOrder: "",
    truckId: "",
    odometer: 0,
    engineHours: 0,
    startDate: new Date().toISOString().split("T")[0],
    endDate: "",
    type: "planned",
    serviceDescription: "",
  };

  const [formData, setFormData] = useState<Draft>(initialState);

  useEffect(() => {
    const draft =
      drafts.find((d) => d.id === editId) ||
      serviceLogs.find((log) => log.id === editId);
    if (draft) {
      setFormData(draft);
    }
  }, [editId, drafts, serviceLogs]);

  useEffect(() => {
    if (!editId) {
      dispatch(addDraft(formData));
    }
  }, [formData, dispatch, editId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    if (editId) {
      dispatch(updateServiceLog(editId, formData));
    } else {
      dispatch(addServiceLog({ ...formData, id: Date.now().toString() }));
    }
  };

  return (
    <form className="service-log-form">
      <TextField
        className="text-field"
        label="Provider ID"
        name="providerId"
        value={formData.providerId}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Service Order"
        name="serviceOrder"
        value={formData.serviceOrder}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Truck ID or Trailer"
        name="truckId"
        value={formData.truckId}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Odometer"
        name="odometer"
        type="number"
        value={formData.odometer}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Engine Hours"
        name="engineHours"
        type="number"
        value={formData.engineHours}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Start Date"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="End Date"
        name="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className="text-field"
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        select
        fullWidth
      >
        <MenuItem value="planned">Planned</MenuItem>
        <MenuItem value="unplanned">Unplanned</MenuItem>
        <MenuItem value="emergency">Emergency</MenuItem>
      </TextField>
      <TextField
        className="text-field"
        label="Service Description"
        name="serviceDescription"
        value={formData.serviceDescription}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
      />
      <Button
        className="button"
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        {editId ? "Update" : "Create"} Service Log
      </Button>
    </form>
  );
};

export default ServiceLogForm;
