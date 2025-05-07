// Investors.tsx
import React from "react";

const Investors = () => {
  const investors = [
    { id: 1, name: "Deepak Verma", email: "deepak@example.com" },
    { id: 2, name: "Sunita Mehta", email: "sunita@example.com" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Investors List</h1>
      <table className="min-w-full border border-green">
        <thead className="bg-green">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr key={investor.id}>
              <td className="border px-4 py-2">{investor.id}</td>
              <td className="border px-4 py-2">{investor.name}</td>
              <td className="border px-4 py-2">{investor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Investors;
