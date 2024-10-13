import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Draft, deleteServiceLog } from '../store/actions';
import { Button } from '@mui/material';

const ServiceLogTable: React.FC<{ onEdit: (id: string) => void }> = ({ onEdit }) => {
  const serviceLogs = useSelector((state: { serviceLogs: Draft[] }) => state.serviceLogs);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteServiceLog(id));
  };

  const columns: GridColDef[] = [
    { field: 'providerId', headerName: 'Provider ID', width: 150 },
    { field: 'serviceOrder', headerName: 'Service Order', width: 150 },
    { field: 'truckId', headerName: 'Truck ID', width: 150 },
    { field: 'odometer', headerName: 'Odometer (mi)', width: 150 },
    { field: 'engineHours', headerName: 'Engine Hours', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'endDate', headerName: 'End Date', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'serviceDescription', headerName: 'Description', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onEdit(params.row.id)}
            style={{ marginRight: '10px' }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={serviceLogs} columns={columns} checkboxSelection />
    </div>
  );
};

export default ServiceLogTable;
