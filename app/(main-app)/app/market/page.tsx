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
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import { useTheme } from '@mui/material/styles';

const marketData = [
  { id: 1, item: 'Corn', quantity: 200, price: 5 },
  { id: 2, item: 'Gold Ore', quantity: 50, price: 300 },
  { id: 3, item: 'Fish', quantity: 100, price: 20 },
  // Add more market items as needed
];

const MarketTable = () => {
  const theme = useTheme();

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table aria-label="market table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marketData.map((marketItem) => (
            <TableRow
              key={marketItem.id}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
              }}
            >
              <TableCell component="th" scope="row">
                {marketItem.id}
              </TableCell>
              <TableCell align="left">{marketItem.item}</TableCell>
              <TableCell align="right">{marketItem.quantity}</TableCell>
              <TableCell align="right">${marketItem.price}</TableCell>
              <TableCell align="right">
                <Tooltip title="Buy">
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sell">
                  <IconButton>
                    <SellIcon />
                  </IconButton>
                </Tooltip>
                <Button variant="contained" size="small" color="primary" sx={{ ml: 1 }}>
                  Buy
                </Button>
                <Button variant="outlined" size="small" color="secondary" sx={{ ml: 1 }}>
                  Sell
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MarketTable;
