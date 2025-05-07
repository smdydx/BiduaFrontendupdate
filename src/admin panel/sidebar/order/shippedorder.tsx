import React from 'react';
import { OrderTable } from './ordertable';


export default function ShippedOrders() {
  return (
    <div>
      <h3>Shipped Orders</h3>
      <OrderTable status="shipped" /> {/* Display shipped orders only */}
    </div>
  );
}
