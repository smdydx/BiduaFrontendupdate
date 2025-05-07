import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@headlessui/react";
import PartnerModal from "./PartnerModal"; // Import modal

const AllPartners = () => {
  const [partners, setPartners] = useState([
    {
      id: 1,
      name: "Bharat Solutions",
      email: "contact@bharatsolutions.com",
      phone: "+91 9876543210",
      active: true,
      users: 12,
      products: 5,
      orders: 30,
      tickets: 2,
    },
    {
      id: 2,
      name: "Tech Associates",
      email: "info@techassociates.in",
      phone: "+91 9988776655",
      active: false,
      users: 8,
      products: 3,
      orders: 10,
      tickets: 1,
    },
  ]);

  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleStatus = (id: number) => {
    setPartners((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  const handleView = (partner: any) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-6">All Partners</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-md">
          <thead className="bg-green-500 text-white text-sm">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Users</th>
              <th className="p-3 text-left">Products</th>
              <th className="p-3 text-left">Orders</th>
              <th className="p-3 text-left">Tickets</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr key={partner.id} className="border-t text-sm">
                <td className="p-3">{partner.name}</td>
                <td className="p-3">{partner.email}</td>
                <td className="p-3">{partner.phone}</td>
                <td className="p-3">{partner.users}</td>
                <td className="p-3">{partner.products}</td>
                <td className="p-3">{partner.orders}</td>
                <td className="p-3">{partner.tickets}</td>
                <td className="p-3">
                  <Switch
                    checked={partner.active}
                    onChange={() => toggleStatus(partner.id)}
                    className={`${
                      partner.active ? "bg-green-600" : "bg-red-600"
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                  >
                    <span
                      className={`${
                        partner.active ? "translate-x-5" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </td>
                <td className="p-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleView(partner)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AllPartners;
