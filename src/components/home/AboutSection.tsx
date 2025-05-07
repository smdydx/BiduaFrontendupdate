import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BIDUA Industries</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg leading-relaxed mb-8">
              BIDUA Industries is a visionary multi-division Indian company dedicated to empowering customers and businesses with excellence, innovation, and trust. Our diverse portfolio spans across Hospitality, Beauty, Electronics, FMCG, OEM, Technology, Blockchain, and more.
            </p>
            <Link href="/about">
              <Button variant="default" className="cta-button">
                Learn More About BIDUA
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
