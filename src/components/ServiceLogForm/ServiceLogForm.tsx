// src/components/ServiceLogForm.tsx
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { saveDraft, createLog } from "../../actions";
import { ServiceLogDraft } from "../../types";
import { SelectChangeEvent } from "@mui/material";
import "./ServiceLogForm.scss";

const ServiceLogForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const [formData, setFormData] = useState<ServiceLogDraft>({
    providerId: "",
    serviceOrder: "",
    truckId: "",
    odometer: 0,
    engineHours: 0,
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    type: "planned",
    serviceDescription: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSaving(true);
      dispatch(saveDraft(formData));
      setSaving(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [formData, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (
    e: SelectChangeEvent<"planned" | "unplanned" | "emergency">
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setFormData({
      ...formData,
      startDate: newStartDate,
      endDate: new Date(new Date(newStartDate).getTime() + 86400000)
        .toISOString()
        .slice(0, 10),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog = {
      id: Date.now(),
      draft: formData,
      createdAt: new Date().toISOString(),
    };
    dispatch(createLog(newLog));
  };

  return (
    <form className="service-log-form" onSubmit={handleSubmit}>
      <h2>Create Service Log</h2>
      <TextField
        name="providerId"
        label="Provider ID"
        value={formData.providerId}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="serviceOrder"
        label="Service Order"
        value={formData.serviceOrder}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="truckId"
        label="Truck ID"
        value={formData.truckId}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="odometer"
        label="Odometer (mi)"
        type="number"
        value={formData.odometer}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="engineHours"
        label="Engine Hours"
        type="number"
        value={formData.engineHours}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="startDate"
        label="Start Date"
        type="date"
        value={formData.startDate}
        onChange={handleDateChange}
        fullWidth
        required
      />
      <TextField
        name="endDate"
        label="End Date"
        type="date"
        value={formData.endDate}
        fullWidth
        required
        disabled
      />
      <FormControl fullWidth required>
        <InputLabel>Service Type</InputLabel>
        <Select name="type" value={formData.type} onChange={handleSelectChange}>
          <MenuItem value="planned">Planned</MenuItem>
          <MenuItem value="unplanned">Unplanned</MenuItem>
          <MenuItem value="emergency">Emergency</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="serviceDescription"
        label="Service Description"
        value={formData.serviceDescription}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={saving}
      >
        {saving ? <CircularProgress size={24} /> : "Create Service Log"}
      </Button>
    </form>
  );
};

export default ServiceLogForm;
