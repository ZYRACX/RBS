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
import { useSession } from 'next-auth/react';

const inventoryData = [
  { id: 1, name: 'Gold', quantity: 150, value: 3000 },
  { id: 2, name: 'Silver', quantity: 300, value: 4500 },
  { id: 3, name: 'Iron', quantity: 500, value: 2500 },
  { id: 4, name: 'Diamond', quantity: 20, value: 50000 },
  // Add more data as needed
];

const InventoryTable = () => {
  const theme = useTheme();
  const {data: session, status} = useSession()
  console.log(session)
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table aria-label="inventory table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: 'bold',
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: 'bold',
              }}
              align="left"
            >
              Item
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: 'bold',
              }}
              align="right"
            >
              Quantity
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: 'bold',
              }}
              align="right"
            >
              Value
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontWeight: 'bold',
              }}
              align="right"
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryData.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
              }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.value}</TableCell>
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

export default InventoryTable;
