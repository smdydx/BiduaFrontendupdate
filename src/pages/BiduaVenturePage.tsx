import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Shield,
  Search,
  CheckCircle,
  IndianRupee,
  Settings2,
  Users,
  AlertTriangle,
} from "lucide-react";
import { 
  FaUserShield, FaBuilding, FaIndustry, FaHotel, 
  FaHospital, FaLeaf, FaGraduationCap, FaShoppingCart, 
  FaCar, FaUsers 
} from "react-icons/fa";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function BiduaVenturesPage() {
  const categories = [
    { 
      title: "Domestic Staff Verification",
      icon: <FaUserShield />,
      items: [
        "Maid Background Verification",
        "Cook & Chef Verification",
        "Driver Background Checks",
        "Domestic Helper Validation",
        "House Staff ID Authentication"
      ]
    },
    {
      title: "Corporate Employee Verification",
      icon: <FaBuilding />,
      items: [
        "Employee Background Checks",
        "Contract Worker Verification",
        "Office Staff Validation",
        "Professional Reference Checks",
        "Employment History Verification"
      ]
    },
    {
      title: "Retail & Business Verification",
      icon: <FaShoppingCart />,
      items: [
        "Vendor Authentication",
        "Supplier Background Checks",
        "Business Partner Verification",
        "Distributor Validation",
        "Merchant ID Verification"
      ]
    },
    {
      title: "Hospitality Staff Verification",
      icon: <FaHotel />,
      items: [
        "Hotel Staff Background Checks",
        "Restaurant Employee Verification",
        "Service Staff Validation",
        "Hospitality Worker Screening",
        "Tourism Staff Authentication"
      ]
    },
    {
      title: "Healthcare Staff Verification",
      icon: <FaHospital />,
      items: [
        "Medical Staff Validation",
        "Caregiver Background Checks",
        "Nursing Staff Verification",
        "Healthcare Worker Screening",
        "Medical Assistant Authentication"
      ]
    },
    {
      title: "Agricultural Worker Verification",
      icon: <FaLeaf />,
      items: [
        "Farm Labor Verification",
        "Agricultural Staff Screening",
        "Plantation Worker Validation",
        "Farming Staff Background Checks",
        "Seasonal Worker Authentication"
      ]
    },
    {
      title: "Education Sector Verification",
      icon: <FaGraduationCap />,
      items: [
        "Teacher Background Verification",
        "School Staff Validation",
        "Education Worker Screening",
        "Tutor Authentication",
        "Support Staff Background Checks"
      ]
    },
    {
      title: "Industrial Worker Verification",
      icon: <FaIndustry />,
      items: [
        "Factory Worker Validation",
        "Industrial Staff Screening",
        "Manufacturing Employee Checks",
        "Workshop Staff Verification",
        "Technical Worker Authentication"
      ]
    },
    {
      title: "Transport Sector Verification",
      icon: <FaCar />,
      items: [
        "Transport Staff Validation",
        "Driver Background Verification",
        "Delivery Personnel Screening",
        "Fleet Staff Authentication",
        "Logistics Worker Checks"
      ]
    },
    {
      title: "Tenant Verification Services",
      icon: <FaUsers />,
      items: [
        "Residential Tenant Screening",
        "Commercial Tenant Verification",
        "PG Accommodation Checks",
        "Rental History Validation",
        "Tenant Background Authentication"
      ]
    }
  ];

  return (
    <main className="bg-sky-100 text-sky-900 font-sans">
      <Helmet>
        <title>BIDUA Verification Services - Comprehensive Background Checks</title>
        <meta name="description" content="BIDUA Verification Services - Ensuring Trust Through Comprehensive Background Checks Across All Sectors" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
        >
          <source src="/assets/bidua.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">BIDUA Verification Services</h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6">
            Comprehensive Background Verification Services Across All Sectors - Building Trust Through Thorough Validation
          </p>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 text-lg rounded-xl">
            Start Verification
          </Button>
        </div>
      </section>

      {/* Why BIDUA Section */}
      <section className="py-16 text-center bg-sky-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose BIDUA?</h2>
          <p className="text-xl md:text-2xl font-semibold mb-4">"Your Trust Is Our Priority"</p>
          <p className="max-w-4xl mx-auto text-lg">
            BIDUA offers comprehensive verification services with physical visits, document validation, and background checks across all sectors.
          </p>
        </div>
      </section>

      {/* Human Verification Service */}
      <section className="py-8 md:py-16 bg-sky-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">Human Verification Service</h2>
            <p className="text-lg md:text-xl px-2">Stop fraud before it happens. BIDUA verifies your maids, drivers, tenants, or employees physically across India.</p>
            <Button className="mt-6 md:mt-8 w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white px-4 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl">
              Book Now – ₹999 per Person
            </Button>
          </div>

          {/* Why Critical */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-sky-100/80 border-sky-300">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fraud Prevention</h3>
                <p>Thousands of fraud and theft cases by unknown domestic workers and tenants reported each year.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-100/80 border-sky-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Identity Protection</h3>
                <p>Fake IDs and unverifiable references are common in big cities and small towns alike.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-100/80 border-sky-300">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
                <p>Hiring blindly puts your family, property, and business at risk.</p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                "Submit person's details",
                "Make secure payment",
                "Field executive visits",
                "Video & photo proof",
                "Get verification report"
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Use */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Who Should Use This Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Families hiring maids, nannies, cooks",
                "Employers recruiting drivers, helpers",
                "Landlords renting properties",
                "Offices hiring contract or field staff"
              ].map((user, index) => (
                <div key={index} className="text-center p-4">
                  <CheckCircle className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <p>{user}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Start Verifying with BIDUA Today</h2>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg rounded-xl">
              Book Verification Now
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Verification Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, idx) => (
              <Card key={idx} className="bg-sky-100/80 border-sky-300">
                <CardContent className="p-6">
                  <div className="text-sky-400 text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-sky-400 mb-4">{category.title}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm md:text-base opacity-90">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg rounded-full fixed bottom-8 right-8 z-50">
            <Shield className="w-5 h-5 mr-2" /> Book Verification Now
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[95%] md:max-w-2xl h-[90vh] md:h-auto overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">BIDUA Human Verification – Know Who You're Hiring</DialogTitle>
            <DialogDescription className="text-lg mt-2">
              Avoid frauds, thefts, and fake IDs. Let BIDUA physically verify your maids, drivers, tenants, or employees — PAN India.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 md:space-y-6 py-2 md:py-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-500" /> What We Offer
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Physical verification by a BIDUA agent</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Visit to the given address</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Live photo + video capture</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> ID proof validation (if provided)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Report uploaded within 48 hours</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-sky-500" /> Price
              </h3>
              <p className="mt-2 text-2xl font-bold">₹999 per person / verification</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-sky-500" /> How It Works
              </h3>
              <ol className="mt-2 space-y-2 list-decimal list-inside">
                <li>Fill verification form online</li>
                <li>Make secure payment (Razorpay/UPI)</li>
                <li>Our field agent visits the address</li>
                <li>Report is generated with photo & video</li>
                <li>You get a link to view it on your private dashboard</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-500" /> Who Needs It
              </h3>
              <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Families hiring help</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Businesses & offices</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Landlords</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky-500" /> Property buyers/sellers</li>
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Link href="/human-verification">
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 text-lg">
                Book Verification Now – ₹999
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="py-20 text-center bg-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Verification Today</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Get comprehensive background checks and verification services for any sector.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/human-verification">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl">
                Book Verification
              </Button>
            </Link>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is this service available in my area?",
                a: "Yes! We cover all major cities, towns, and even remote locations across India."
              },
              {
                q: "How long does it take?",
                a: "Reports are typically ready within 24–48 hours."
              },
              {
                q: "Will I get photo or video?",
                a: "Yes. We share photos and a short video of the person at the address."
              },
              {
                q: "Can I verify multiple people?",
                a: "Yes, you can submit separate bookings for each individual."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-sky-100/80 border border-sky-300 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}