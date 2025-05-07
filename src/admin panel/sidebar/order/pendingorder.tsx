import React from 'react';
import { OrderTable } from './ordertable';


export default function PendingOrders() {
  return (
    <div>
      <h3>Pending Orders</h3>
      <OrderTable status="pending" /> {/* Display pending orders only */}
    </div>
  );
}
