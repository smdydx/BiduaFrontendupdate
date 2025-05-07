import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Circle,
  LayoutDashboard,
  FileText,
  MessageSquare,
  ShoppingCart,
  Package,
  Building2,
  Users,
  UserCog,
  Settings,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "wouter";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Reset dropdown on refresh */}
      <Sidebar key={location} />
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [location] = useLocation();

  // Only run once on mount: restore saved dropdown
  useEffect(() => {
    const saved = sessionStorage.getItem("sidebar-dropdown");
    if (saved) {
      setDropdownOpen(saved);
    }
  }, []);

  const toggleDropdown = (label: string) => {
    const next = dropdownOpen === label ? null : label;
    setDropdownOpen(next);
    if (next) {
      sessionStorage.setItem("sidebar-dropdown", next);
    } else {
      sessionStorage.removeItem("sidebar-dropdown");
    }
  };

  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      href: "/admin/Admindashboard",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Leads",
      children: [
        { label: "All Leads", href: "/admin/alleads" },
        { label: "Naploo", href: "/admin/naplooleads" },
        { label: "OEM", href: "/admin/oemleads" },
        { label: "Beauty", href: "/admin/beautyleads" },
        { label: "CloudDrive", href: "/admin/clouddriveleads" },
        { label: "IT Connect", href: "/admin/itconnectleads" },
      ],
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Tickets",
      children: [{ label: "All Tickets", href: "/admin/alltickets" }],
    },
   
    {
      icon: <Package className="w-5 h-5" />,
      label: "Products",
      children: [
        { label: "Add Product", href: "/admin/addproducts" },
        { label: "View Products", href: "/admin/viewproducts" },
      ],
    },

    {
      icon: <ShoppingCart className="w-5 h-5" />,
      label: "Orders",
      children: [
        { label: "All Orders", href: "/admin/allorders" },
        { label: "Pending Orders", href: "/admin/pendingorder" },
        { label: "Shipped Orders", href: "/admin/shippedorder" },
        { label: "Delivered Orders", href: "/admin/deliveredorder" },
        { label: "Cancelled Orders", href: "/admin/cancelledorder" },
      ],
    },
    
    {
      icon: <Building2 className="w-5 h-5" />,
      label: "Partners",
      children: [{ label: "All Partners", href: "/admin/allpartners" }],
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Users",
      children: [
        { label: "Customers", href: "/admin/customers" },
        { label: "Investors", href: "/admin/investors" },
        { label: "Distributors", href: "/admin/distributors" },
      ],
    },
    {
      icon: <UserCog className="w-5 h-5" />,
      label: "Admins",
      children: [{ label: "All Admins", href: "/admin/alladmins" }],
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      children: [{ label: "Profile", href: "/admin/profile" }],
    },
  ];

  return (
    <div
      className={`flex flex-col bg-white shadow-lg border-r border-gray-200 transition-all duration-300 overflow-y-auto ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-lg font-semibold">Bidua Admin</h2>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-gray-700 rounded">
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar menu */}
      <div className="flex-1">
        <nav className="px-2 space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center w-full p-3 rounded hover:bg-blue-50 text-gray-700 transition-colors"
                  >
                    {item.icon}
                    {!collapsed && <span className="ml-2 text-sm">{item.label}</span>}
                    {!collapsed && (
                      <span className="ml-auto mr-2">
                        {dropdownOpen === item.label ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </button>

                  {!collapsed && (
                    <div
                      className={`ml-6 overflow-hidden transition-all duration-300 ${
                        dropdownOpen === item.label ? "max-h-64" : "max-h-0"
                      }`}
                    >
                      {item.children.map((sub) => (
                        <Link key={sub.href} href={sub.href}>
                          <div
                            onClick={() => {
                              // manually keep dropdown open
                              sessionStorage.setItem("sidebar-dropdown", item.label);
                            }}
                            className={`flex items-center p-2 text-sm rounded hover:bg-blue-50 text-gray-600 ${
                              location === sub.href ? "bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            <Circle className="w-2 h-2 mr-2" />
                            {sub.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href}>
                  <div
                    onClick={() => sessionStorage.removeItem("sidebar-dropdown")}
                    className={`flex items-center w-full p-3 rounded hover:bg-gray-700 transition-colors ${
                      location === item.href ? "bg-gray-700" : ""
                    }`}
                  >
                    {item.icon}
                    {!collapsed && <span className="ml-2 text-sm">{item.label}</span>}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4">
        <Link href="/logout">
          <div className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors">
            <LogOut className="w-5 h-5 mr-2" />
            {!collapsed && <span className="text-sm">Sign out</span>}
          </div>
        </Link>
      </div>
    </div>
  );
}

export { AdminLayout };
