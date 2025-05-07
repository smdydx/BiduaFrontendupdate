"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BEAUTY_LEADS = [
  {
    id: "BEAUTY001",
    name: "Priya Singh",
    division: "Beauty",
    type: "Distributor",
    status: "In Progress",
    date: "2025-04-25",
    assignedTo: "Beauty Sales"
  },
  {
    id: "BEAUTY002",
    name: "Neha Jain",
    division: "Beauty",
    type: "Reseller",
    status: "New",
    date: "2025-04-22",
    assignedTo: "Marketing Team"
  }
];

export default function BeautyLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Beauty Leads</CardTitle>
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
            {BEAUTY_LEADS.map((lead) => (
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
