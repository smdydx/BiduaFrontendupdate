import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Check, 
  CloudLightning, 
  Database, 
  Lock, 
  Signal, 
  Smartphone,
  Zap,
  Shield,
  Wifi,
  UploadCloud,
  Cloud,
  HardDrive,
  Share2,
  FileCheck,
  Settings,
  Clock,
  Globe,
  Battery,
  Cpu,
  RefreshCw
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CloudDrivePage() {
  return (
    <>
      <Helmet>
        <title>BIDUA CloudDrive™ – Smart Storage, Unlimited Freedom | BIDUA Industries</title>
        <meta name="description" content="The world's first portable storage device that automatically uploads your files to the cloud, even after you unplug — no need to sit and wait anymore!" />
        <meta name="keywords" content="BIDUA CloudDrive, smart storage, cloud storage, wireless storage, file sharing, data protection" />
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
                <span className="text-secondary">BIDUA CloudDrive™</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                Smart. Secure. Wireless. Limitless.
              </h2>
              <p className="text-lg mb-8">
                Introducing BIDUA CloudDrive™ — The world's first portable storage device that automatically uploads your files to the cloud, even after you unplug — no need to sit and wait anymore!
              </p>
              <p className="text-lg mb-10 font-semibold">
                Carry your drive, not your worries.
              </p>
              <Button size="lg">Discover CloudDrive</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="BIDUA CloudDrive" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Real Problems with Traditional Pendrives</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Risk of Losing Data",
                description: "If your pendrive gets lost, stolen, or damaged — your files are gone forever.",
                icon: Database
              },
              {
                title: "Manual File Upload Hassle",
                description: "If you want to access a file from another location, you have to manually upload it to Google Drive, Dropbox, etc., wasting precious time.",
                icon: UploadCloud
              },
              {
                title: "Need Specific Environment",
                description: "You need internet + laptop + time to manually upload files — highly inconvenient while traveling or working fast.",
                icon: Laptop
              },
              {
                title: "Slow File Sharing",
                description: "Sharing large files requires uploading to third-party servers, sharing links manually, and no direct control over who accesses what.",
                icon: Share
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border-l-4 border-destructive"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-destructive bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <problem.icon className="text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p>{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invented Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why BIDUA CloudDrive™ Was Invented</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              To solve all these problems with one intelligent device.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Protect your data",
                description: "Automatic cloud syncing even when disconnected",
                icon: Shield
              },
              {
                title: "Upload instantly",
                description: "No waiting time at computer",
                icon: Zap
              },
              {
                title: "Work and move freely",
                description: "Drive uploads wirelessly",
                icon: Wifi
              },
              {
                title: "Secure sharing",
                description: "Share only what you want, with whom you want",
                icon: Lock
              },
              {
                title: "Freedom from manual uploads",
                description: "No more manual uploading and downloading",
                icon: CloudLightning
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="text-secondary h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p>{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Magic / How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Magic of BIDUA CloudDrive™</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto italic">
              Imagine this real user scenario:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute h-full w-0.5 bg-secondary left-16 sm:left-24 top-0"></div>
              
              {/* Timeline Steps */}
              {[
                {
                  title: "Transfer Files",
                  description: "You transfer all your important files into the BIDUA CloudDrive™ cloud folder while working on your laptop.",
                  icon: UploadCloud
                },
                {
                  title: "Quick Save",
                  description: "In just seconds — it's saved inside the device (like a normal pendrive).",
                  icon: Zap
                },
                {
                  title: "Unplug & Go",
                  description: "You unplug the device and put it in your pocket.",
                  icon: Smartphone
                },
                {
                  title: "Magic Happens",
                  description: "BIDUA CloudDrive™ uses its SIM card or available WiFi to upload the files to the cloud — automatically.",
                  icon: CloudLightning
                },
                {
                  title: "Live Your Life",
                  description: "Even while you're traveling, eating, or walking — your files are safely reaching the cloud server.",
                  icon: Signal
                },
                {
                  title: "No Waiting",
                  description: "You didn't have to sit in front of the computer or wait for upload progress.",
                  icon: Check
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative flex mb-12 last:mb-0 ml-16 sm:ml-24 pl-12"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-full -mt-2">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-secondary rounded-full flex items-center justify-center z-10">
                      <step.icon className="text-background h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Saving your time, effort, and keeping your data secure.
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Advanced File Sharing Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Secure File Sharing</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              You control who sees your files.
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
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Multiple User IDs and Passwords</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>You can create different accounts for different people.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Share specific folders or specific files separately.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Every user gets private secure access — no confusion.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Full Privacy Control</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Decide which files/folders to share</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Define access permissions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Monitor shared access anytime through the BIDUA CloudDrive™ App</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Secure File Sharing" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Specifications</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-card rounded-xl overflow-hidden shadow-xl"
          >
            <div className="p-6 md:p-8">
              <table className="w-full">
                <tbody>
                  {[
                    { feature: "Storage Options", details: "128 GB / 256 GB / 512 GB", icon: HardDrive },
                    { feature: "Storage Split", details: "50% Offline, 50% Cloud", icon: Cloud },
                    { feature: "SIM Card Slot", details: "Yes (Nano SIM, 4G/5G)", icon: Cpu },
                    { feature: "WiFi", details: "Yes (2.4GHz + 5GHz Bands)", icon: Wifi },
                    { feature: "Battery Backup", details: "6+ Hours", icon: Battery },
                    { feature: "Charging Port", details: "USB-C Fast Charging", icon: Zap },
                    { feature: "Security", details: "Encrypted Transfers, User-Controlled Sharing", icon: Shield },
                    { feature: "Compatibility", details: "Windows, MacOS, Android, iOS", icon: Globe }
                  ].map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-primary bg-opacity-10" : ""}>
                      <td className="py-4 px-6 border-b border-primary border-opacity-20 font-semibold flex items-center gap-2">
                        <spec.icon className="w-5 h-5 text-secondary" />
                        {spec.feature}
                      </td>
                      <td className="py-4 px-6 border-b border-primary border-opacity-20">{spec.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Advantages</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Dual Storage (Offline + Cloud)", icon: <HardDrive className="text-secondary" /> },
              { text: "Built-in SIM and WiFi", icon: <Wifi className="text-secondary" /> },
              { text: "Inbuilt Battery (no dependency on laptop)", icon: <Battery className="text-secondary" /> },
              { text: "Smart Auto-Upload", icon: <RefreshCw className="text-secondary" /> },
              { text: "Instant, Secure File Sharing", icon: <Share2 className="text-secondary" /> },
              { text: "No Need to Wait for Uploads", icon: <Clock className="text-secondary" /> },
              { text: "Access Files from Anywhere", icon: <Globe className="text-secondary" /> }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="flex items-center">
                  <Check className="text-secondary mr-3 flex-shrink-0" />
                  {advantage.icon}
              <span className="text-lg">{advantage.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Launch Variants and Pricing</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Pricing will be finalized during official pre-order phase.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "CloudDrive Lite",
                storage: "128 GB (64GB Offline + 64GB Cloud)",
                price: "₹4,999/-",
                isPopular: false
              },
              {
                name: "CloudDrive Plus",
                storage: "256 GB (128GB Offline + 128GB Cloud)",
                price: "₹7,999/-",
                isPopular: true
              },
              {
                name: "CloudDrive Ultra",
                storage: "512 GB (256GB Offline + 256GB Cloud)",
                price: "₹12,999/-",
                isPopular: false
              }
            ].map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${variant.isPopular ? 'border-2 border-secondary' : ''}`}>
                  <CardHeader className={variant.isPopular ? 'bg-secondary text-background' : ''}>
                    <CardTitle className="text-xl font-bold text-center">{variant.name}</CardTitle>
                    {variant.isPopular && (
                      <Badge className="mx-auto mt-2 bg-background text-secondary">Most Popular</Badge>
                    )}
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold mb-2">{variant.price}</div>
                      <p className="text-muted-foreground">{variant.storage}</p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="text-secondary mr-2 flex-shrink-0" />
                        <span>Automatic cloud backup</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-secondary mr-2 flex-shrink-0" />
                        <span>Secure file sharing</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-secondary mr-2 flex-shrink-0" />
                        <span>Mobile app access</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-secondary mr-2 flex-shrink-0" />
                        <span>1-year warranty</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={variant.isPopular ? "secondary" : "default"}
                      className="w-full"
                    >
                      Pre-Book Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg mb-8">
              Companion App coming soon for Android and iOS
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pre-Book Your BIDUA CloudDrive™ Now</h2>
            <p className="text-xl mb-10">Secure your early bird discount and get a free 3-month premium cloud subscription</p>
            <Button size="lg" variant="secondary">Pre-Book Now</Button>
            <p className="mt-12 text-lg font-semibold">
              BIDUA CloudDrive™ — Smart Storage Beyond Limits.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Laptop(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}

function Share(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}
