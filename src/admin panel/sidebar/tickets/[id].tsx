import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { not, notExists } from "drizzle-orm";

const MOCK_TICKETS = [
  {
    id: "TKT001",
    subject: "CloudDrive Pre-order Query",
    customer: "Amit Shah",
    status: "Open",
    priority: "High",
    assignedTeam: "Sales",
    lastUpdate: "2024-01-20",
    message: "When will CloudDrive be delivered?",
    notes: [
      {
        body: "Asked about delivery timeline",
        addedBy: "admin",
        createdAt: "2024-01-20T10:00:00Z"
      }
    ]
  },
  {
    id: "TKT002",
    subject: "Beauty Product Delivery Issue",
    customer: "Priya Sharma",
    status: "In Progress",
    priority: "Medium",
    assignedTeam: "Support",
    lastUpdate: "2024-01-19",
    message: "Cream box was damaged in shipping",
    notes: []
  },
  
  {
    id: "TKT003",
    subject: "Naploo Pod Booking Confirmation",
    customer: "Rahul Verma",
    status: "Resolved",
    priority: "Low",
    assignedTeam: "Sales",
    lastUpdate: "2024-01-18",
    message: "Is my Naploo Pod booking confirmed?",
    notes: []
  },
  {
    id: "TKT004",
    subject: "IT Connect Service Request",
    customer: "Sneha Das",
    status: "Open",
    priority: "High",
    assignedTeam: "Technical",
    lastUpdate: "2024-01-17",
    message: "Need assistance with IT Connect setup",
    notes: []
  },
  {
    id: "TKT005",
    subject: "OEM Partnership Discussion",
    customer: "Vikram Singh",
    status: "In Progress",
    priority: "Medium",
    assignedTeam: "Business",
    lastUpdate: "2024-01-16",
    message: "Following up on OEM partnership proposal",
    notes: []
  },
];

export default function IdTickets() {
  const [location] = useLocation();
  const id = location.split("/").pop()!;
  const [ticket, setTicket] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const t = MOCK_TICKETS.find((t) => t.id === id);
    if (t) {
      setTicket(t);
      setStatus(t.status.toLowerCase());
    }
  }, [id]);

  if (!ticket) return <div className="p-6">Ticket not found</div>;

  const handleUpdate = () => {
    alert(`Mock update: status → ${status}, note → ${note}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Ticket #{ticket.id}</h1>
      <p>
        <strong>Customer:</strong> {ticket.customer}
      </p>
      <p>
        <strong>Subject:</strong> {ticket.subject}
      </p>
      <p>
        <strong>Message:</strong> {ticket.message}
      </p>
      <p>
        <strong>Status:</strong> <Badge>{ticket.status}</Badge>
      </p>
      <p>
        <strong>Priority:</strong>{" "}
        <Badge variant="destructive">{ticket.priority}</Badge>
      </p>
      <p>
        <strong>Team:</strong> {ticket.assignedTeam}
      </p>
      <p>
        <strong>Last Updated:</strong> {ticket.lastUpdate}
      </p>

      <div className="mt-6">
  <label htmlFor="status-select" className="block mb-1 font-medium text-white">
    Update Status
  </label>
  <select
    id="status-select"
    className="border p-2 rounded w-full bg-white text-black"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
  >
    <option value="open">Open</option>
    <option value="in-progress">In Progress</option>
    <option value="resolved">Resolved</option>
  </select>
</div>

<div className="mt-4">
  <label className="block mb-1 font-medium text-white">
    Add Note
  </label>
  <textarea
    className="w-full border rounded p-2 text-black"
    rows={3}
    value={note}
    onChange={(e) => setNote(e.target.value)}
    placeholder="Add your note here"
  />
  <Button className="mt-3" onClick={handleUpdate}>
    Update Ticket
  </Button>

  <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Notes</h2>
        {ticket.notes.length ? (
          <ul className="space-y-2">
            {ticket.notes.map((n: any, i: number) => (
              <li key={i} className="bg-gray-100 p-3 rounded">
                <p>{n.body}</p>
                <small className="text-gray-500">
                  — {n.addedBy}, {new Date(n.createdAt).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notes added yet.</p>
        )}
      </div>
</div>

    </div>
  );
}
