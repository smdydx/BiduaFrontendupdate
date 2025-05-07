import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Link, 
  Braces, 
  Shield, 
  Cpu, 
  ArrowRight,
  Server,
  MonitorSmartphone,
  Workflow,
  MessageSquare,
  Settings2,
  Users,
  FileCode2,
  Network
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ITConnectPage() {
  return (
    <>
      <Helmet>
        <title>BIDUA IT Connect – B2B Software Portal | BIDUA Industries</title>
        <meta name="description" content="Pre-made and custom software solutions from BIDUA IT Connect. Blockchain, DApps, SaaS, AI, Cloud, and Traditional IT Solutions." />
        <meta name="keywords" content="BIDUA IT Connect, B2B Software, Software Solutions, Blockchain, AI, Cloud, SaaS, DApps" />
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
                <span className="text-secondary">BIDUA IT Connect</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                Cutting-edge Software Solutions for Modern Businesses
              </h2>
              <p className="text-lg mb-8">
                BIDUA IT Connect is your centralized B2B software portal offering both pre-made and custom software solutions to power your business.
              </p>
              <p className="text-lg mb-10">
                From blockchain to AI, cloud to traditional IT infrastructure - we connect your business with the right technology.
              </p>
              <Button size="lg">Find Your Software</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="BIDUA IT Connect" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Software Solutions</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive range of cutting-edge software solutions for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Solutions",
                description: "Decentralized applications, smart contracts, and blockchain integration for transparent and secure business operations",
                icon: Link,
                details: ["Smart Contracts", "Supply Chain Tracking", "Secure Transactions", "Decentralized Apps"]
              },
              {
                title: "Cloud Computing",
                description: "Scalable cloud infrastructure, serverless computing, and cloud migration services to optimize your IT resources",
                icon: Cloud,
                details: ["Infrastructure as a Service", "Platform as a Service", "Software as a Service", "Hybrid Cloud Solutions"]
              },
              {
                title: "Artificial Intelligence",
                description: "Machine learning algorithms, neural networks, and AI-powered automation to enhance your business processes",
                icon: Cpu,
                details: ["Predictive Analytics", "Machine Learning", "Natural Language Processing", "Computer Vision"]
              },
              {
                title: "Web & Mobile Development",
                description: "Responsive web applications, native and cross-platform mobile apps designed for performance and user experience",
                icon: Code,
                details: ["Progressive Web Apps", "React Native Apps", "Custom Web Portals", "E-commerce Solutions"]
              },
              {
                title: "Data Management",
                description: "Database design, implementation, migration, and optimization for efficient data storage and retrieval",
                icon: Database,
                details: ["SQL & NoSQL Databases", "Data Warehousing", "ETL Processes", "Big Data Solutions"]
              },
              {
                title: "Enterprise Solutions",
                description: "Custom enterprise software, ERP, CRM, and business intelligence tools tailored to your specific requirements",
                icon: Globe,
                details: ["ERP Systems", "CRM Applications", "Business Intelligence", "Workflow Automation"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <solution.icon className="text-secondary" />
                    </div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="text-secondary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interaction Model Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Centralized Customer Interaction Model</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Our unified approach to customer service ensures a seamless experience from consultation to implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1688&q=80" 
                alt="Customer Interaction" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Single Point of Contact",
                  description: "A dedicated account manager handles all your software needs, ensuring consistent communication and service",
                  icon: <Users className="text-secondary w-6 h-6" />
                },
                {
                  title: "Needs Analysis",
                  description: "Our experts work closely with you to understand your business requirements and recommend the right solutions",
                  icon: <MonitorSmartphone className="text-secondary w-6 h-6" />
                },
                {
                  title: "Customized Implementation",
                  description: "Solutions tailored to your specific needs with seamless integration into your existing systems",
                  icon: <Settings2 className="text-secondary w-6 h-6" />
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous technical support, updates, and maintenance to keep your software running optimally",
                  icon: <Network className="text-secondary w-6 h-6" />
                }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p>{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary transform -translate-x-1/2 hidden md:block"></div>
              
              {[
                {
                  title: "Discovery & Planning",
                  description: "Understanding your requirements, goals, and challenges to create a comprehensive project plan",
                  icon: <MessageSquare className="text-secondary w-6 h-6" />
                },
                {
                  title: "Design & Architecture",
                  description: "Creating detailed technical architecture and UI/UX designs that align with your business objectives",
                  icon: <FileCode2 className="text-secondary w-6 h-6" />
                },
                {
                  title: "Development",
                  description: "Agile development process with regular updates and continuous integration",
                  icon: <Code className="text-secondary w-6 h-6" />
                },
                {
                  title: "Testing & QA",
                  description: "Rigorous testing procedures to ensure quality, security, and performance",
                  icon: <Settings2 className="text-secondary w-6 h-6" />
                },
                {
                  title: "Deployment",
                  description: "Smooth deployment with minimal disruption to your business operations",
                  icon: <Server className="text-secondary w-6 h-6" />
                },
                {
                  title: "Maintenance & Support",
                  description: "Ongoing support, updates, and improvements to keep your software performing optimally",
                  icon: <Workflow className="text-secondary w-6 h-6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex md:items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
                  }`}
                >
                  <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  
                  <div className="flex justify-center items-center md:w-0">
                    <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Stack</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and secure software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML5/CSS3"]
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Python", "Java", "C#/.NET", "PHP", "Go"]
              },
              {
                category: "Database",
                technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Firebase"]
              },
              {
                category: "DevOps",
                technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD"]
              },
              {
                category: "Mobile",
                technologies: ["React Native", "Flutter", "Swift", "Kotlin", "PWA", "Ionic"]
              },
              {
                category: "Blockchain",
                technologies: ["Ethereum", "Solidity", "Web3.js", "Hyperledger", "Polkadot", "DeFi"]
              },
              {
                category: "AI & ML",
                technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP", "Predictive Analytics"]
              },
              {
                category: "Security",
                technologies: ["OAuth", "JWT", "Encryption", "Penetration Testing", "GDPR Compliance", "SOC2"]
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-secondary">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center">
                      <Braces className="text-secondary mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security & Compliance</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We prioritize the security and compliance of all our software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Data Protection",
                  description: "End-to-end encryption for sensitive data with secure storage and transmission protocols"
                },
                {
                  title: "Regulatory Compliance",
                  description: "Solutions designed to meet GDPR, HIPAA, SOC2, and other industry-specific compliance standards"
                },
                {
                  title: "Regular Security Audits",
                  description: "Ongoing vulnerability assessments and penetration testing to identify and fix security issues"
                },
                {
                  title: "Access Control",
                  description: "Role-based access control and multi-factor authentication to protect sensitive information"
                }
              ].map((security, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg flex items-start"
                >
                  <Shield className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{security.title}</h3>
                    <p>{security.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Security and Compliance" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10">
              Let's discuss how our software solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">Schedule a Consultation</Button>
              <Button size="lg" variant="outline">Explore Solutions</Button>
            </div>
            <p className="mt-12 text-lg font-semibold">
              BIDUA IT Connect – Powering Business Innovation Through Technology
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PenToolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function CheckSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function Upload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function LifeBuoyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" x2="9.17" y1="4.93" y2="9.17" />
      <line x1="14.83" x2="19.07" y1="14.83" y2="19.07" />
      <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
      <line x1="14.83" x2="18.36" y1="9.17" y2="5.64" />
      <line x1="4.93" x2="9.17" y1="19.07" y2="14.83" />
    </svg>
  );
}
