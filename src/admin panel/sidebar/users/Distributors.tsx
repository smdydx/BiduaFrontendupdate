// Distributors.tsx
import React from "react";

const Distributors = () => {
  const distributors = [
    { id: 1, name: "Pooja Patel", email: "pooja@example.com" },
    { id: 2, name: "Amit Singh", email: "amit@example.com" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Distributors List</h1>
      <table className="min-w-full border border-green">
        <thead className="bg-green">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {distributors.map((distributor) => (
            <tr key={distributor.id}>
              <td className="border px-4 py-2">{distributor.id}</td>
              <td className="border px-4 py-2">{distributor.name}</td>
              <td className="border px-4 py-2">{distributor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Distributors;
