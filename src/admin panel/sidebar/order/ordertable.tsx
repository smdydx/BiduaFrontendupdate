import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../../components/ui/table';

interface OrderTableProps {
  status?: string;
}

export const OrderTable: React.FC<OrderTableProps> = ({ status }) => {
  // Mock Data for Orders
  const MOCK_ORDERS = [
    { id: 1, customerName: "John Doe", status: "pending", totalAmount: 1500 },
    { id: 2, customerName: "Jane Smith", status: "shipped", totalAmount: 2000 },
    { id: 3, customerName: "Alice Brown", status: "delivered", totalAmount: 2500 },
    { id: 4, customerName: "Bob Marley", status: "cancelled", totalAmount: 1800 },
    { id: 5, customerName: "Chris Hemsworth", status: "pending", totalAmount: 2200 },
    { id: 6, customerName: "Natalie Portman", status: "shipped", totalAmount: 2700 },
  ];

  // Filter orders based on the status passed
  const filteredOrders = MOCK_ORDERS.filter(order => (status ? order.status === status : true));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredOrders.map(order => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>₹{order.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
