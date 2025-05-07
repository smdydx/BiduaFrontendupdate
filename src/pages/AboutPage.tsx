
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  const values = [
    { name: "Innovation", desc: "Constantly pushing boundaries and embracing new technologies" },
    { name: "Excellence", desc: "Maintaining the highest standards in everything we do" },
    { name: "Integrity", desc: "Operating with transparency and ethical business practices" },
    { name: "Customer Focus", desc: "Putting our customers' needs at the heart of our decisions" },
    { name: "Sustainability", desc: "Ensuring our operations benefit future generations" },
    { name: "Collaboration", desc: "Working together to achieve common goals" },
  ];

  const milestones = [
    { year: "2020", event: "Founded BIDUA Industries" },
    { year: "2021", event: "Launched IT Connect Division" },
    { year: "2022", event: "Expanded to Beauty Care" },
    { year: "2023", event: "Introduced Cloud Drive Solutions" },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About BIDUA Industries</h1>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              className="bg-card p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Story</h2>
              <p className="text-muted-foreground">
                BIDUA Industries is a multi-division company committed to innovation and excellence across various sectors.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground">
                To become a global leader in innovative solutions across multiple industries, creating value for our customers, employees, and society.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{value.name}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-24 font-bold text-secondary">{milestone.year}</div>
                  <div className="flex-1 bg-card p-4 rounded-lg shadow-sm ml-4">
                    {milestone.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
