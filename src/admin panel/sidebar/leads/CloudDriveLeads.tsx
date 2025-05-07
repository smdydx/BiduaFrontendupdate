"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CLOUD_LEADS = [
  {
    id: "CLOUD001",
    name: "Amit Patel",
    division: "CloudDrive",
    type: "Pre-Order",
    status: "Contacted",
    date: "2025-04-23",
    assignedTo: "Tech Team"
  },
  {
    id: "CLOUD002",
    name: "Karan Malik",
    division: "CloudDrive",
    type: "Pre-Order",
    status: "New",
    date: "2025-04-21",
    assignedTo: "Cloud Sales"
  }
];

export default function CloudDriveLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CloudDrive Leads</CardTitle>
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
            {CLOUD_LEADS.map((lead) => (
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
