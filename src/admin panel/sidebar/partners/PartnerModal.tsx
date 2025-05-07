interface Partner {
  id: number;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  users: number;
  products: number;
  orders: number;
  tickets: number;
}

interface Props {
  partner: Partner;
  onClose: () => void;
}

const PartnerModal: React.FC<Props> = ({ partner, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-black text-white rounded-lg shadow-md w-full max-w-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Partner Details</h2>
          <ul className="text-sm space-y-1">
            <li><strong>Name:</strong> {partner.name}</li>
            <li><strong>Email:</strong> {partner.email}</li>
            <li><strong>Phone:</strong> {partner.phone}</li>
            <li><strong>Status:</strong> {partner.active ? "Active" : "Inactive"}</li>
            <li><strong>Users:</strong> {partner.users}</li>
            <li><strong>Products:</strong> {partner.products}</li>
            <li><strong>Orders:</strong> {partner.orders}</li>
            <li><strong>Tickets:</strong> {partner.tickets}</li>
          </ul>
          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PartnerModal;
  
