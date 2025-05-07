import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Combine all the leads
const NAPLOO_LEADS = [
  { id: "NAP001", name: "Aman Verma", division: "Naploo", type: "Investor", status: "New", date: "2025-04-30", assignedTo: "Sales Team" },
  { id: "NAP002", name: "Divya Sharma", division: "Naploo", type: "Investor", status: "Contacted", date: "2025-04-28", assignedTo: "Investment Team" },
  { id: "NAP003", name: "Ravi Joshi", division: "Naploo", type: "Investor", status: "Closed", date: "2025-04-27", assignedTo: "Sales Team" }
];
const OEM_LEADS = [
  { id: "OEM001", name: "Sneha Reddy", division: "OEM", type: "Partnership", status: "New", date: "2025-04-26", assignedTo: "OEM Team" },
  { id: "OEM002", name: "Rohit Mehra", division: "OEM", type: "Bulk Order", status: "Contacted", date: "2025-04-24", assignedTo: "Sales Team" }
];
const IT_LEADS = [
  { id: "IT001", name: "Mohammed Khan", division: "IT Connect", type: "Software Service", status: "In Progress", date: "2025-04-20", assignedTo: "Tech Support" },
  { id: "IT002", name: "Arjun Mehta", division: "IT Connect", type: "Blockchain App", status: "New", date: "2025-04-18", assignedTo: "Development Team" }
];
const CLOUD_LEADS = [
  { id: "CLOUD001", name: "Amit Patel", division: "CloudDrive", type: "Pre-Order", status: "Contacted", date: "2025-04-23", assignedTo: "Tech Team" },
  { id: "CLOUD002", name: "Karan Malik", division: "CloudDrive", type: "Pre-Order", status: "New", date: "2025-04-21", assignedTo: "Cloud Sales" }
];
const BEAUTY_LEADS = [
  { id: "BEAUTY001", name: "Priya Singh", division: "Beauty", type: "Distributor", status: "In Progress", date: "2025-04-25", assignedTo: "Beauty Sales" },
  { id: "BEAUTY002", name: "Neha Jain", division: "Beauty", type: "Reseller", status: "New", date: "2025-04-22", assignedTo: "Marketing Team" }
];

const ALL_LEADS = [
  ...NAPLOO_LEADS,
  ...OEM_LEADS,
  ...IT_LEADS,
  ...CLOUD_LEADS,
  ...BEAUTY_LEADS
];

export function AllLeads() {
  const [tab, setTab] = useState("all");
  const [leads, setLeads] = useState(ALL_LEADS);

  // Filter the leads based on the selected tab
  const filteredLeads =
    tab === "all"
      ? leads
      : leads.filter((lead) => lead.division.toLowerCase().replace(" ", "") === tab);

  // Function to handle adding new leads
  interface Lead {
    id: string;
    name: string;
    division: string;
    type: string;
    status: string;
    date: string;
    assignedTo: string;
  }

  const addNewLead = (newLead: Lead) => {
    setLeads((prevLeads: Lead[]) => {
      const updatedLeads: Lead[] = [...prevLeads, newLead];
      return updatedLeads;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="all">All Leads</TabsTrigger>
            <TabsTrigger value="naploo">Naploo</TabsTrigger>
            <TabsTrigger value="beauty">Beauty Care</TabsTrigger>
            <TabsTrigger value="clouddrive">CloudDrive</TabsTrigger>
            <TabsTrigger value="oem">OEM</TabsTrigger>
            <TabsTrigger value="itconnect">IT Connect</TabsTrigger>
          </TabsList>

          <TabsContent value={tab} className="mt-4">
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
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>{lead.id}</TableCell>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.division}</TableCell>
                    <TableCell>{lead.type}</TableCell>
                    <TableCell>
                      <Badge variant={lead.status === "New" ? "default" : "secondary"}>{lead.status}</Badge>
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
