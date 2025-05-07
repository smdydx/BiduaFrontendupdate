import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function InvestorHighlight() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background bg-opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-card bg-opacity-80 p-8 md:p-12 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investor Highlight</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <CheckCircle className="text-secondary text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Invest in Naploo™ Pods — Real Estate + Hospitality Growth</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <CheckCircle className="text-secondary text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Minimum 3x Returns in 3 Years</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CheckCircle className="text-secondary text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Breakeven within 8–10 Months</span>
                </motion.li>
              </ul>
            </div>
            <motion.div 
              className="bg-primary bg-opacity-20 rounded-lg p-6 border border-secondary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Investment Snapshot</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Single Bed Pod Investment:</span>
                  <span className="font-semibold">₹4,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Double Bed Pod Investment:</span>
                  <span className="font-semibold">₹5,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span>3-Year Return (Single):</span>
                  <span className="font-semibold">₹15,55,200 (3.88X)</span>
                </div>
                <div className="flex justify-between">
                  <span>3-Year Return (Double):</span>
                  <span className="font-semibold">₹20,73,600 (4.14X)</span>
                </div>
                <div className="flex justify-between">
                  <span>Break-even Period:</span>
                  <span className="font-semibold">8-10 Months</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <Link href="/investor">
              <Button size="lg" variant="secondary" className="cta-button">
                Become a BIDUA Investor
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
