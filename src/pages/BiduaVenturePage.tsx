import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function BiduaVenturesPage() {
  return (
    <main className="bg-background">
      <Helmet>
        <title>BIDUA Ventures - Future Investment Opportunities | BIDUA Industries</title>
        <meta name="description" content="Explore future investment opportunities with BIDUA Ventures. Join us in shaping tomorrow's innovations." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1c7fab]">BIDUA Ventures</span> – Future Investment Opportunities
              </h1>
              <p className="text-lg mb-8">
                Join us in shaping tomorrow's innovations through strategic investments and partnerships.
              </p>
              <Button className="bg-[#1c7fab] hover:bg-[#165d7d] text-white">
                Explore Opportunities
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/assets/bidua.mp4" 
                alt="BIDUA Ventures"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Investment Areas</h2>
            <div className="w-24 h-1 bg-[#1c7fab] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Technology Startups",
              "Real Estate Development",
              "Renewable Energy",
              "Healthcare Innovation",
              "Smart Manufacturing",
              "Digital Infrastructure"
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-lg border border-[#1c7fab]/20 hover:border-[#1c7fab] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#1c7fab]">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1c7fab]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in the Future?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join BIDUA Ventures and be part of innovative projects that shape tomorrow.
            </p>
            <Button className="bg-[#1c7fab] hover:bg-[#165d7d] text-white">
              Contact Investment Team
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}