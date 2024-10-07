import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { deleteLog } from "../../actions";
import { ServiceLogDraft } from "../../types";

const ServiceLogList = () => {
  const dispatch: AppDispatch = useDispatch();
  const logs = useSelector((state: any) => state.serviceLog.logs);

  
};



export default ServiceLogList