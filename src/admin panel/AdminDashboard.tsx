"use client";

import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  Users, MessageSquare, TrendingUp, Package2, Cloud, Building2,
  Sparkles, Cpu, FileText, BarChart3, Settings, Mail, Bell,
  CheckCircle, Clock, XCircle, Filter, Download, Search,
  ChevronDown, Calendar, DollarSign, Activity, ArrowUp,
  ArrowDown, Star, AlertCircle, Circle
} from "lucide-react";
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip
} from "recharts";

export default function AdminDashboard() {
  const [dateRange, setDateRange] = useState("week");

  const notifications = [
    { id: 1, title: "New Lead", message: "Naploo Investment Query from Mumbai", time: "5m ago", type: "lead" },
    { id: 2, title: "Urgent", message: "OEM Partner Request Pending", time: "30m ago", type: "urgent" },
    { id: 3, title: "System", message: "Backup Completed Successfully", time: "1h ago", type: "system" },
    { id: 4, title: "Update", message: "New Beauty Product Added", time: "2h ago", type: "system" },
    { id: 5, title: "Alert", message: "CloudDrive Server Maintenance", time: "3h ago", type: "urgent" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 45000, leads: 24 },
    { month: "Feb", revenue: 52000, leads: 28 },
    { month: "Mar", revenue: 61000, leads: 35 },
    { month: "Apr", revenue: 58000, leads: 30 },
    { month: "May", revenue: 71000, leads: 42 },
    { month: "Jun", revenue: 68000, leads: 38 },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  This Week <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDateRange("day")}>Today</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateRange("week")}>This Week</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateRange("month")}>This Month</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Revenue</p>
                  <h3 className="text-3xl font-bold mt-2">₹3.2L</h3>
                  <p className="flex items-center gap-1 text-blue-100 mt-2">
                    <ArrowUp className="w-4 h-4" /> +12.5%
                  </p>
                </div>
                <DollarSign className="w-8 h-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Active Users</p>
                  <h3 className="text-3xl font-bold mt-2">2,841</h3>
                  <p className="flex items-center gap-1 text-green-600 mt-2">
                    <ArrowUp className="w-4 h-4" /> +8.1%
                  </p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Pending Tasks</p>
                  <h3 className="text-3xl font-bold mt-2">12</h3>
                  <p className="flex items-center gap-1 text-amber-600 mt-2">
                    <Clock className="w-4 h-4" /> 5 urgent
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Customer Rating</p>
                  <h3 className="text-3xl font-bold mt-2">4.8</h3>
                  <p className="flex items-center gap-1 text-green-600 mt-2">
                    <Star className="w-4 h-4" /> Excellent
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>Latest updates and alerts</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-start gap-4 p-3 rounded-lg bg-gray-800"
        >
          <div
            className={`p-2 rounded-full ${
              notification.type === "urgent"
                ? "bg-red-900 text-red-200"
                : notification.type === "lead"
                ? "bg-green-900 text-green-200"
                : "bg-blue-900 text-blue-200"
            }`}
          >
            {notification.type === "urgent" ? (
              <AlertCircle className="w-4 h-4" />
            ) : notification.type === "lead" ? (
              <Users className="w-4 h-4" />
            ) : (
              <Bell className="w-4 h-4" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-white">{notification.title}</h4>
            <p className="text-sm text-gray-400">{notification.message}</p>
            <span className="text-xs text-gray-500 mt-1">{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Manage Users</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
              <Package2 className="w-5 h-5" />
              <span>Add Product</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
