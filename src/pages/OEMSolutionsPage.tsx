import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Factory, 
  Package, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Truck,
  Boxes,
  FlaskConical,
  Users,
  Award,
  Building2,
  Banknote,
  FileCheck,
  CpuIcon,
  Network,
  Medal
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OEMSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>BIDUA OEM Solutions – Build Your Brand, We Supply It All | BIDUA Industries</title>
        <meta name="description" content="BIDUA OEM Solutions offers end-to-end OEM, White Label, and Private Label services across multiple industries. One partner, endless products, limitless opportunities." />
        <meta name="keywords" content="BIDUA OEM, White Label, Private Label, Manufacturing, Product Development, FMCG, Electronics, Healthcare" />
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
                <span className="text-secondary">BIDUA OEM Solutions</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                One Partner. Endless Products. Limitless Opportunities.
              </h2>
              <p className="text-lg mb-8">
                At BIDUA Industries Pvt Ltd, we make it possible for startups, SMEs, large companies, and global brands to launch and expand their product lines under their own brand name — across any industry.
              </p>
              <p className="text-lg mb-10">
                Thanks to our Pan-India manufacturing network, we offer end-to-end OEM, White Label, and Private Label services — ready to fulfill every business dream.
              </p>
              <Button size="lg">Partner for OEM Solutions</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="BIDUA OEM Solutions Factory" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What BIDUA OEM Covers</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Our extensive product categories span across multiple industries
            </p>
          </motion.div>

          <Tabs defaultValue="electronics" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto mb-8">
              <TabsTrigger value="electronics" className="py-3 flex items-center gap-2">
                <CpuIcon className="w-4 h-4" /> Electronics
              </TabsTrigger>
              <TabsTrigger value="fmcg" className="py-3 flex items-center gap-2">
                <Boxes className="w-4 h-4" /> FMCG
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="py-3 flex items-center gap-2">
                <FlaskConical className="w-4 h-4" /> Healthcare
              </TabsTrigger>
              <TabsTrigger value="others" className="py-3 flex items-center gap-2">
                <Network className="w-4 h-4" /> Others
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="electronics" className="mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Electronics Manufacturing" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Electronics & Gadgets</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Smart Devices</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Storage Devices</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Consumer Electronics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Power Accessories</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>IoT Solutions</span>
                      </li>
                    </ul>
                    <Button className="mt-8">Get Electronics OEM Quote</Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="fmcg" className="mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" 
                      alt="FMCG Products" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">FMCG Products</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Packaged Foods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Frozen Foods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Spices & Condiments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Water Bottles</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Beverages & Snacks</span>
                      </li>
                    </ul>
                    <Button className="mt-8">Get FMCG OEM Quote</Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="healthcare" className="mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                      alt="Healthcare Products" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Healthcare & Beauty Products</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Medicines (OTC Products, Supplements)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Health Drinks & Nutraceuticals</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Herbal & Ayurvedic Products</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Skin Creams & Serums</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Hair Care Products & Herbal Cosmetics</span>
                      </li>
                    </ul>
                    <Button className="mt-8">Get Healthcare OEM Quote</Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="others" className="mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Other Products" 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Other Industries</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Furniture & Home Products</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Automobile Accessories</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Daily Needs & Cleaning Products</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Hospitality Products including Sleeping Pods</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span className="italic">"If you can imagine it, we can make it under your brand."</span>
                      </li>
                    </ul>
                    <Button className="mt-8">Explore Other OEM Solutions</Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* OEM Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our OEM Capabilities</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "White Label & Private Label",
                description: "Manufacturing with your branding on our proven products",
                icon: Package
              },
              {
                title: "Custom Branding & Packaging",
                description: "Create unique designs and packaging tailored to your brand",
                icon: Layers
              },
              {
                title: "Prototype Development",
                description: "R&D services to bring your product ideas to life",
                icon: Settings
              },
              {
                title: "Bulk Production",
                description: "Scalable manufacturing to meet any demand",
                icon: Factory
              },
              {
                title: "Pan-India Sourcing",
                description: "Access to factories and suppliers across India",
                icon: Building2
              },
              {
                title: "Fast Delivery & QC",
                description: "Reliable quality control and timely deliveries",
                icon: Truck
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <capability.icon className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Choose BIDUA OEM?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Access Multi-Industry Manufacturing",
                description: "One partner for all your manufacturing needs across industries",
                icon: Factory
              },
              {
                title: "Flexible Minimum Order Quantities",
                description: "Suitable for startups to large scale enterprises",
                icon: Package
              },
              {
                title: "Cost-Effective Manufacturing",
                description: "Leverage our network efficiencies for competitive pricing",
                icon: CoinIcon
              },
              {
                title: "Confidentiality and IP Protection",
                description: "Strong NDAs signed to protect your business ideas",
                icon: ShieldCheck
              },
              {
                title: "Certified Factories",
                description: "ISO, GMP, CE Certified Factories (where applicable)",
                icon: CertificateIcon
              },
              {
                title: "Faster Go-to-Market Times",
                description: "Streamlined processes to launch products quickly",
                icon: Clock
              },
              {
                title: "Dedicated OEM Project Managers",
                description: "Personal point of contact for seamless coordination",
                icon: UserIcon
              },
              {
                title: "Single Point Solution",
                description: "No need to tie up with multiple factories separately",
                icon: CheckCircle2
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg flex items-start"
              >
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <reason.icon className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How BIDUA OEM Process Works</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>
                  
                  {[
                    {
                      step: "1. Inquiry",
                      description: "Share your product idea or requirement"
                    },
                    {
                      step: "2. Consultation",
                      description: "Free consultation for category selection and design ideas"
                    },
                    {
                      step: "3. Proposal",
                      description: "Receive tailored product proposal with pricing and timeline"
                    },
                    {
                      step: "4. Prototype",
                      description: "Sample production and client approval"
                    },
                    {
                      step: "5. Mass Production",
                      description: "Final production with your branding"
                    },
                    {
                      step: "6. Delivery",
                      description: "Logistics support for national and international delivery"
                    }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex mb-12 last:mb-0 relative"
                    >
                      <div className="w-16 flex-shrink-0 flex justify-center">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center z-10">
                          <span className="text-background font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-grow ml-4">
                        <h3 className="text-xl font-bold mb-1">{process.step}</h3>
                        <p>{process.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Assurance</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092921461-fd0e5756a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Quality Inspection" 
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
                  title: "3-Layer Quality Check",
                  description: "Factory, Central QC Team, Pre-Dispatch inspection at every stage",
                  icon: <FileCheck className="text-secondary mt-1 mr-3 flex-shrink-0" />
                },
                {
                  title: "Certification Support",
                  description: "FDA, FSSAI, BIS, CE, ROHS support depending on product category",
                  icon: <Award className="text-secondary mt-1 mr-3 flex-shrink-0" />
                },
                {
                  title: "Continuous Supplier Audits",
                  description: "Regular audits to maintain quality standards",
                  icon: <Medal className="text-secondary mt-1 mr-3 flex-shrink-0" />
                },
                {
                  title: "Customer Satisfaction Guarantee",
                  description: "We ensure your complete satisfaction with the final product",
                  icon: <Users className="text-secondary mt-1 mr-3 flex-shrink-0" />
                }
              ].map((quality, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <div className="flex items-start">
                    <ShieldCheck className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{quality.title}</h3>
                      <p>{quality.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Partner Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Can Partner with BIDUA OEM?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Startups launching new brands",
              "D2C (Direct to Consumer) companies",
              "Distributors expanding product lines",
              "Retail Chains",
              "Wholesalers",
              "Hospitality Chains",
              "Automobile Companies",
              "E-commerce Entrepreneurs"
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-secondary" />
                </div>
                <p className="font-semibold">{partner}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card mt-12 p-6 rounded-lg max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl font-bold mb-4">Key Advantage – Single Point Solution</h3>
            <p className="text-lg mb-4 italic">
              "One contact, multiple product sourcing, full supply chain management under your brand."
            </p>
            <p>No need to tie up with multiple factories separately. BIDUA handles it all for you.</p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Brand Together</h2>
            <p className="text-xl mb-10">
              Ready to launch your own product range?<br />
              Expand without investing in heavy infrastructure?
            </p>
            <Button size="lg" variant="secondary">Partner with BIDUA OEM</Button>
            <div className="mt-10 space-y-2">
              <p>Email: <a href="mailto:oem@bidua.in" className="text-secondary hover:underline">oem@bidua.in</a></p>
              <p>Customer Care: <a href="tel:+911234567890" className="text-secondary hover:underline">+91 123 456 7890</a></p>
            </div>
            <p className="mt-12 text-lg font-semibold">
              BIDUA OEM – Your Brand, Our Manufacturing Excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function CoinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="15" y1="12" y2="12" />
    </svg>
  );
}

function CertificateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 7h10" />
      <path d="M7 12h10" />
      <path d="M7 17h5" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
