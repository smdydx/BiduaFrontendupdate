"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NAPLOO_LEADS = [
  {
    id: "NAP001",
    name: "Aman Verma",
    division: "Naploo",
    type: "Investor",
    status: "New",
    date: "2025-04-30",
    assignedTo: "Sales Team"
  },
  {
    id: "NAP002",
    name: "Divya Sharma",
    division: "Naploo",
    type: "Investor",
    status: "Contacted",
    date: "2025-04-28",
    assignedTo: "Investment Team"
  },
  {
    id: "NAP003",
    name: "Ravi Joshi",
    division: "Naploo",
    type: "Investor",
    status: "Closed",
    date: "2025-04-27",
    assignedTo: "Sales Team"
  },
];

export default function NaplooLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Naploo Leads</CardTitle>
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
            {NAPLOO_LEADS.map((lead) => (
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
