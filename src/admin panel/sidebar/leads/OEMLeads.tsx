"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OEM_LEADS = [
  {
    id: "OEM001",
    name: "Sneha Reddy",
    division: "OEM",
    type: "Partnership",
    status: "New",
    date: "2025-04-26",
    assignedTo: "OEM Team"
  },
  {
    id: "OEM002",
    name: "Rohit Mehra",
    division: "OEM",
    type: "Bulk Order",
    status: "Contacted",
    date: "2025-04-24",
    assignedTo: "Sales Team"
  }
];

export default function OEMLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OEM Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Division</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {OEM_LEADS.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.id}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.division}</TableCell>
                <TableCell>{lead.type}</TableCell>
                <TableCell>
                  <Badge variant={lead.status === "New" ? "default" : "secondary"}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>{lead.assignedTo}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Manage</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
