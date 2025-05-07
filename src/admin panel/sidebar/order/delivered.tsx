import React from 'react';
import { OrderTable } from './ordertable';


export default function DeliveredOrders() {
  return (
    <div>
      <h3>Delivered Orders</h3>
      <OrderTable status="delivered" /> {/* Display delivered orders only */}
    </div>
  );
}
