import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Camera, 
  FileText,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Home,
  Briefcase,
  IndianRupee,
  MapPin
} from "lucide-react";

export default function HumanVerificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
      <Helmet>
        <title>BIDUA Human Verification - Know Who You're Hiring</title>
        <meta name="description" content="Avoid frauds, thefts, and fake IDs. Let BIDUA physically verify your maids, drivers, tenants, or employees — PAN India." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-2 items-center mb-6">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-sm font-medium text-green-500">Trusted Verification Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Know Who You're Hiring
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Avoid frauds, thefts, and fake IDs. Let BIDUA physically verify your maids, drivers, tenants, or employees — PAN India.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
              <IndianRupee className="w-5 h-5 mr-2" /> Book Verification - ₹999
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MapPin, title: "Physical Visit", desc: "On-site verification" },
            { icon: Camera, title: "Visual Proof", desc: "Photos & videos" },
            { icon: FileText, title: "ID Validation", desc: "Document checks" },
            { icon: Clock, title: "48hr Report", desc: "Fast turnaround" }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Needs Verification?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Home, text: "Families hiring domestic help" },
              { icon: Building, text: "Businesses & offices" },
              { icon: Users, text: "Landlords & property owners" },
              { icon: Briefcase, text: "Employers & HR teams" }
            ].map((user, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <user.icon className="w-8 h-8 text-green-600" />
                </div>
                <p className="font-medium">{user.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Book Verification Now</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Input placeholder="Email Address" type="email" className="md:col-span-2" />
                  <Input placeholder="Person to Verify (Name)" className="md:col-span-2" />
                  <Input placeholder="Verification Address" className="md:col-span-2" />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                  Proceed to Payment - ₹999
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Don't Risk Your Safety</h2>
          <p className="text-lg mb-8">Get complete peace of mind with BIDUA's professional verification service.</p>
          <Button size="lg" variant="secondary" className="text-green-700 bg-white hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
            Book Verification Now
          </Button>
        </div>
      </section>
    </div>
  );
}