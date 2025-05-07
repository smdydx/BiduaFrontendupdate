import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import NaplooPage from "@/pages/NaplooPage";
import BeautyCarePage from "@/pages/BeautyCarePage";
import CloudDrivePage from "@/pages/CloudDrivePage";
import OEMSolutionsPage from "@/pages/OEMSolutionsPage";
import ITConnectPage from "@/pages/ITConnectPage";
import InvestorPage from "@/pages/InvestorPage";
import AuthPage from "./pages/AuthPage";
import BiduaVenturePage from "@/pages/BiduaVenturePage";
import HumanVerification from "@/pages/HumanVerification";
import ContactPage from "@/pages/ContactPage";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AuthProvider } from "@/hooks/use-auth";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

import AdminDashboard from "@/admin panel/AdminDashboard";
import AdminLayout from "./components/layout/AdminLayout";
import NaplooLeads from "./admin panel/sidebar/leads/NaplooLeads";
import OEMLeads from "./admin panel/sidebar/leads/OEMLeads";
import BeautyLeads from "./admin panel/sidebar/leads/BeautyLeads";
import CloudDriveLeads from "./admin panel/sidebar/leads/CloudDriveLeads";
import ITConnectLeads from "./admin panel/sidebar/leads/ITConnectLeads";
import { AllLeads } from "./admin panel/sidebar/leads/AllLeads";
import { AllTicket } from "./admin panel/sidebar/tickets/AllTicket";
import IdTickets from "./admin panel/sidebar/tickets/[id]";
import AddProduct from "./admin panel/sidebar/products/AddProduct";
import ViewProduct from "./admin panel/sidebar/products/Viewproduct";
import AllOrders from "./admin panel/sidebar/order/allorder";
import PendingOrders from "./admin panel/sidebar/order/pendingorder";
import ShippedOrders from "./admin panel/sidebar/order/shippedorder";
import DeliveredOrders from "./admin panel/sidebar/order/delivered";
import CancelledOrders from "./admin panel/sidebar/order/cancelled";
import AllPartners from "./admin panel/sidebar/partners/allpartners";
import Customers from "./admin panel/sidebar/users/Customers";
import Investors from "./admin panel/sidebar/users/Investors";
import Distributors from './admin panel/sidebar/users/Distributors';
import AllAdmins from "./admin panel/sidebar/admin/AllAdmins";
import Profile from "./admin panel/sidebar/settings/Profile";

function Router() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");

  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/naploo" component={NaplooPage} />
      <Route path="/beauty-care" component={BeautyCarePage} />
      <Route path="/cloud-drive" component={CloudDrivePage} />
      <Route path="/oem-solutions" component={OEMSolutionsPage} />
      <Route path="/it-connect" component={ITConnectPage} />
      <Route path="/investor" component={InvestorPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/bidua-ventures" component={BiduaVenturePage} />
      <Route path="/human-verification" component={HumanVerification} />
      <Route path="/contact" component={ContactPage} />

      {/* Admin Routes - Protected */}
      <ProtectedRoute path="/admin" component={AdminDashboard} adminOnly={true} />
      <ProtectedRoute path="/admin/admindashboard" component={AdminDashboard} adminOnly={true} />

      <ProtectedRoute path="/admin/alleads" adminOnly={true} component={() => (
        <AdminLayout><AllLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/naplooleads" adminOnly={true} component={() => (
        <AdminLayout><NaplooLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/oemleads" adminOnly={true} component={() => (
        <AdminLayout><OEMLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/beautyleads" adminOnly={true} component={() => (
        <AdminLayout><BeautyLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/clouddriveleads" adminOnly={true} component={() => (
        <AdminLayout><CloudDriveLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/itconnectleads" adminOnly={true} component={() => (
        <AdminLayout><ITConnectLeads /></AdminLayout>
      )}/>

      <ProtectedRoute path="/admin/alltickets" adminOnly={true} component={() => (
        <AdminLayout><AllTicket /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/tickets/id/:id" adminOnly={true} component={() => (
        <AdminLayout><IdTickets /></AdminLayout>
      )}/>

      <ProtectedRoute path="/admin/addproducts" adminOnly={true} component={() => (
        <AdminLayout><AddProduct /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/viewproducts" adminOnly={true} component={() => (
        <AdminLayout><ViewProduct /></AdminLayout>
      )}/>

      <ProtectedRoute path="/admin/allorders" adminOnly={true} component={() => (
        <AdminLayout><AllOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/pendingorder" adminOnly={true} component={() => (
        <AdminLayout><PendingOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/shippedorder" adminOnly={true} component={() => (
        <AdminLayout><ShippedOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/deliveredorder" adminOnly={true} component={() => (
        <AdminLayout><DeliveredOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/cancelledorder" adminOnly={true} component={() => (
        <AdminLayout><CancelledOrders /></AdminLayout>
      )}/>

      <ProtectedRoute path="/admin/allpartners" adminOnly={true} component={() => (
        <AdminLayout><AllPartners /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/customers" adminOnly={true} component={() => (
        <AdminLayout><Customers /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/investors" adminOnly={true} component={() => (
        <AdminLayout><Investors /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/distributors" adminOnly={true} component={() => (
        <AdminLayout><Distributors /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/alladmins" adminOnly={true} component={() => (
        <AdminLayout><AllAdmins /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/profile" adminOnly={true} component={() => (
        <AdminLayout><Profile /></AdminLayout>
      )}/>

      {/* 404 Page */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");
  console.log("URL:", location, "isAdminRoute:", isAdminRoute);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          {!isAdminRoute && <Header />}

          <main className={isAdminRoute ? "flex" : "flex-grow"}>
            <div className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Router />
              </Suspense>
            </div>
          </main>

          {!isAdminRoute && <Footer />}
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;