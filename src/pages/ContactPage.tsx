
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ContactForm } from "@/components/ui/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact BIDUA - Get in Touch With Us</title>
        <meta name="description" content="Contact BIDUA Industries for inquiries about our services, partnerships, or general information." />
      </Helmet>

      <div className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-2xl mx-auto">
              Have questions or want to learn more about our services? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    details: "+91 (XXX) XXX-XXXX"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: "info@bidua.in"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    details: "BIDUA Industries, India"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: "Monday - Saturday: 9:00 AM - 6:00 PM"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <item.icon className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
