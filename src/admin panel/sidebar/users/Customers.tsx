// Customers.tsx
import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, name: "Anita Sharma", email: "anita@example.com" },
    { id: 2, name: "Ravi Kumar", email: "ravi@example.com" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customers List</h1>
      <table className="min-w-full border border-green">
        <thead className="bg-green">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border px-4 py-2">{customer.id}</td>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
