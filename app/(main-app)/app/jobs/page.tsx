"use client"
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';

const jobData = [
  { id: 1, name: 'Farming', workers: 50, production: 200, value: 1500 },
  { id: 2, name: 'Mining', workers: 30, production: 120, value: 3000 },
  { id: 3, name: 'Fishing', workers: 40, production: 90, value: 1800 },
  // Add more jobs as needed
];

const JobTable = () => {
  const theme = useTheme();

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table aria-label="job management table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Job</TableCell>
            <TableCell align="right">Workers</TableCell>
            <TableCell align="right">Production</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobData.map((job) => (
            <TableRow
              key={job.id}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
              }}
            >
              <TableCell component="th" scope="row">
                {job.id}
              </TableCell>
              <TableCell align="left">{job.name}</TableCell>
              <TableCell align="right">{job.workers}</TableCell>
              <TableCell align="right">{job.production}</TableCell>
              <TableCell align="right">{job.value}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobTable;
