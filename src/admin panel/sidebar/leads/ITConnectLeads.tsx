"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const IT_LEADS = [
  {
    id: "IT001",
    name: "Mohammed Khan",
    division: "IT Connect",
    type: "Software Service",
    status: "In Progress",
    date: "2025-04-20",
    assignedTo: "Tech Support"
  },
  {
    id: "IT002",
    name: "Arjun Mehta",
    division: "IT Connect",
    type: "Blockchain App",
    status: "New",
    date: "2025-04-18",
    assignedTo: "Development Team"
  }
];

export default function ITConnectLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>IT Connect Leads</CardTitle>
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
            {IT_LEADS.map((lead) => (
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
