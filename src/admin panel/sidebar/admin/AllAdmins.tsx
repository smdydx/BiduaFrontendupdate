// AllAdmins.tsx

import React from "react";

interface Admin {
  name: string;
  email: string;
}

const admins: Admin[] = [
  { name: "Ravi Shankar", email: "ravishankar@ahduni.edu.in" },
  { name: "Darshan Bhatt", email: "darshan.bhatt@ahduni.edu.in" },
  { name: "Palak Patel", email: "palak.patel@ahduni.edu.in" },
];

const AllAdmins: React.FC = () => {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 text-white">All Admins</h2>
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700">
        <table className="min-w-full divide-y divide-gray-800 bg-gray-900">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {admins.map((admin, index) => (
              <tr key={index} className="hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {admin.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {admin.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmins;
