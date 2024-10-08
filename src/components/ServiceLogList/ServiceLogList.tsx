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
  const logs = useSelector((state: any) => state.serviceLog.logs || []);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<ServiceLogDraft | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteLog(id));
  };

  const handleEdit = (log: ServiceLogDraft) => {
    setSelectedLog(log);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedLog(null);
  };

  const handleSave = () => {
    handleClose();
  };

  const filteredLogs = logs.filter((log: ServiceLogDraft) => {
    return (
      log.providerId?.toString().includes(search) ||
      log.serviceOrder?.toString().includes(search) ||
      log.type?.toString().includes(search)
    );
  });

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearch}
        fullWidth
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Provider ID</TableCell>
              <TableCell>Service Order</TableCell>
              <TableCell>Truck ID</TableCell>
              <TableCell>Odometer (mi)</TableCell>
              <TableCell>Engine Hours</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((log: ServiceLogDraft, index: number) => (
                <TableRow key={index}>
                  <TableCell>{log.providerId}</TableCell>
                  <TableCell>{log.serviceOrder}</TableCell>
                  <TableCell>{log.truckId}</TableCell>
                  <TableCell>{log.odometer}</TableCell>
                  <TableCell>{log.engineHours}</TableCell>
                  <TableCell>{log.startDate}</TableCell>
                  <TableCell>{log.endDate}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(log)}>Edit</Button>
                    <Button onClick={() => handleDelete(log.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredLogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Edit Service Log</DialogTitle>
        <DialogContent>
          {/* Здесь будет форма редактирования */}
          {/* Заполни поля значениями из selectedLog */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ServiceLogList;
