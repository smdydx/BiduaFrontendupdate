import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact BIDUA</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Have questions or inquiries? We'd love to hear from you. Reach out to us using the form below or through our contact information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-card bg-opacity-50 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Map */}
            <div className="h-60 bg-muted rounded-lg mb-8 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56040.737400913495!2d77.32648402975683!3d28.613391072554688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce551c3000001%3A0x9e255a18f6cf17e7!2siON%20Digital%20Zone%2C%2030%2F7A%2C%20BHA%20Millenium%20Rd%2C%20C%20Block%2C%20Phase%202%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!3m2!1d28.6134944!2d77.36768789999999!5e0!3m2!1sen!2sin!4v1745647751871!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="grayscale contrast-125"
                title="BIDUA Industries Office Location"
              />
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Office Address</h4>
                  <p className="text-foreground opacity-80">
                    Ramaera Industries Pvt Ltd.<br />
                    H-77 Ground floor, Sec 62 <br />
                    Noida, UP, India Pin 201305
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-foreground opacity-80">
                    General Inquiries: <a href="mailto:info@bidua.in" className="hover:text-secondary transition-colors">biduaindustries@gmail.com</a>
                  </p>
                  <p className="text-foreground opacity-80">
                    {/* Investment Inquiries: <a href="mailto:invest@bidua.in" className="hover:text-secondary transition-colors">invest@bidua.in</a> */}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone</h4>
                  <p className="text-foreground opacity-80">
                    Customer Support: <a href="tel:+911234567890" className="hover:text-secondary transition-colors">+91 xxx xxx xxxx</a>
                  </p>
                  <p className="text-foreground opacity-80">
                    Investor Relations: <a href="tel:+911234567891" className="hover:text-secondary transition-colors">+91 xxx xxx xxxx</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                  <Linkedin className="text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                  <Instagram className="text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                  <Facebook className="text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-secondary transition-all">
                  <Twitter className="text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
