import React from 'react';
import { OrderTable } from './ordertable';


export default function AllOrders() {
  return (
    <div>
      <h3>All Orders</h3>
      <OrderTable /> {/* Display all orders */}
    </div>
  );
}
