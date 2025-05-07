import React from 'react';
import { OrderTable } from './ordertable';


export default function CancelledOrders() {
  return (
    <div>
      <h3>Cancelled Orders</h3>
      <OrderTable status="cancelled" /> {/* Display cancelled orders only */}
    </div>
  );
}
