import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Check, 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield, 
  Smartphone,
  Award,
  MapPin
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InvestorPage() {
  return (
    <>
      <Helmet>
        <title>Invest in Naploo™ – India's Sleeping Pod Revolution | BIDUA Industries</title>
        <meta name="description" content="Invest in Naploo™ pod hotels with guaranteed 3X returns in 3 years. Own your pod, earn passive income every month, and breakeven in less than 1 year!" />
        <meta name="keywords" content="Naploo investment, pod hotel investment, guaranteed returns, passive income, BIDUA investment" />
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
                <span className="text-secondary">Invest in Naploo™</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                India's Sleeping Pod Revolution
              </h2>
              <div className="bg-card p-4 rounded-lg mb-8 border-l-4 border-secondary">
                <p className="text-xl font-semibold">
                  Invest Small. Earn Big. Sleep Peacefully.
                </p>
              </div>
              <p className="text-lg mb-8">
                Naploo™ — India's first branded chain of smart sleeping pod hotels — invites you to invest in the future of travel accommodation.
              </p>
              <p className="text-lg mb-6 font-bold text-secondary">
                Guaranteed Minimum 3X Returns in 3 Years.
              </p>
              <p className="text-lg mb-10">
                Own your pod, earn passive income every month, and breakeven in less than 1 year!
              </p>
              <Button size="lg">Become an Investor</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80" 
                alt="Naploo Pod Investment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Invest in Naploo™ Pods?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Low Entry Investment",
                description: "Start with just ₹4 Lacs (Single Bed Pod) or ₹5 Lacs (Double Bed Pod).",
                icon: DollarSign
              },
              {
                title: "Guaranteed 3X Returns",
                description: "We guarantee minimum 3x your capital within 3 years. (Returns can go higher.)",
                icon: TrendingUp
              },
              {
                title: "Breakeven within 8–10 Months",
                description: "Start earning monthly payouts almost immediately after pods go live.",
                icon: Clock
              },
              {
                title: "Fully Managed by BIDUA Industries",
                description: "You invest — we manage the pods, operations, bookings, customers.",
                icon: Shield
              },
              {
                title: "Real-Time Income Tracking via App",
                description: "Get live booking alerts, daily revenue updates, and payout notifications.",
                icon: Smartphone
              },
              {
                title: "Global Payment Options",
                description: "Invest via INR, USD, or Crypto.",
                icon: DollarSign
              },
              {
                title: "Secure and Insured",
                description: "All properties and assets insured with full compliance and fire safety certifications.",
                icon: Shield
              },
              {
                title: "Physical Asset-Backed Investment",
                description: "Own a real, tangible asset that provides essential services.",
                icon: Award
              },
              {
                title: "Prime Locations",
                description: "Pods installed at high-footfall areas ensuring steady occupancy.",
                icon: MapPin
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment Options</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-card bg-opacity-90">
                <CardHeader className="bg-primary text-foreground">
                  <CardTitle className="text-2xl text-center">Single Bed Pod</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">₹4,00,000</div>
                    <p className="text-muted-foreground">Initial Investment</p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span>Daily Rate:</span>
                      <span className="font-semibold">₹150/hour</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>16 Hour Daily Usage:</span>
                      <span className="font-semibold">₹2,400/day gross</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3-Year Estimated Return:</span>
                      <span className="font-semibold text-secondary">₹15,55,200 (3.88X)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Breakeven Point:</span>
                      <span className="font-semibold">9–10 months</span>
                    </div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>60% revenue share for Investor</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>40% retained by BIDUA for operations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Installed at high-demand locations</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Invest in Single Pod</Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-card bg-opacity-90 border-secondary">
                <CardHeader className="bg-secondary text-background">
                  <CardTitle className="text-2xl text-center">Double Bed Pod</CardTitle>
                  <Badge className="mx-auto mt-2 bg-background text-secondary">Recommended</Badge>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">₹5,00,000</div>
                    <p className="text-muted-foreground">Initial Investment</p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span>Daily Rate:</span>
                      <span className="font-semibold">₹200/hour</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>16 Hour Daily Usage:</span>
                      <span className="font-semibold">₹3,200/day gross</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3-Year Estimated Return:</span>
                      <span className="font-semibold text-secondary">₹20,73,600 (4.14X)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Breakeven Point:</span>
                      <span className="font-semibold">8–9 months</span>
                    </div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>60% revenue share for Investor</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>40% retained by BIDUA for operations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>Higher occupancy rates due to couple-friendly setup</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">Invest in Double Pod</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto bg-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Occupancy Standard</h3>
            <p className="text-center mb-4">
              Calculations based on average 16 hours daily usage.<br />
              <span className="italic">(More usage = more income.)</span>
            </p>
            <p className="text-center font-semibold text-secondary">
              After breakeven, the remaining 2+ years is pure profit!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Installation Locations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Will Your Pod Be Installed?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Prime, High-Demand Locations for maximum footfall and earnings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Airports",
                image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Highway Rest Stops",
                image: "https://images.unsplash.com/photo-1473445730015-841a51e0096f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              },
              {
                title: "Railway Stations",
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80"
              },
              {
                title: "Tourist Hubs",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Corporate Business Districts",
                image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
              },
              {
                title: "Hospitals",
                image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-lg overflow-hidden h-48"
              >
                <img 
                  src={location.image} 
                  alt={location.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{location.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor App Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Track Everything with Naploo™ Investor App</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-secondary">App Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>Choose Your Pod & Property</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>Get Real-Time Booking Alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>See Your Daily, Monthly Earnings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>Request Withdrawals Easily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>Monitor Hotel Performance</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Badge variant="outline" className="text-secondary">
                    Launching Soon for Android and iOS
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1617496900908-29a79c1f9684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Investor App" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Start Investing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Start Investing?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute h-full w-0.5 bg-secondary left-16 sm:left-20 top-0"></div>
              
              {/* Timeline Steps */}
              {[
                {
                  step: "Register on Naploo™ Investor App",
                  description: "Create your investor account and verify your details"
                },
                {
                  step: "Choose your Pod Type and Property",
                  description: "Select between Single or Double Pod and pick your preferred location"
                },
                {
                  step: "Invest securely via payment gateway",
                  description: "Multiple payment options available including bank transfer and crypto"
                },
                {
                  step: "Sign Lease-Back Agreement",
                  description: "Complete the legal documentation for your investment"
                },
                {
                  step: "Start Earning",
                  description: "Begin receiving revenue immediately after installation!"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative flex mb-12 last:mb-0 ml-16 sm:ml-20 pl-12"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-full -mt-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center z-10">
                      <span className="text-background font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral Programs Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Referral Programs</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <Check className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Investor Referral Bonus</h3>
              <p className="mb-4">Invite new investors and earn extra income.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Earn 2% of their investment amount</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>No limit on referrals</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Paid directly to your account</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Property Finder Bonus</h3>
              <p className="mb-4">Help us locate great hotel spaces and get cash rewards.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Earn up to ₹50,000 per successful location</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>We handle all negotiations and setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Just introduce us to the property owner</span>
                </li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Limited Pods Available!</h2>
            <p className="text-xl mb-10">
              Property slots fill quickly — secure your Naploo™ pod today to maximize early-mover advantage.
            </p>
            <Button size="lg" variant="secondary">Become an Investor</Button>
            <div className="mt-10">
              <Link href="/naploo">
                <Button variant="outline">Learn More About Naploo™ Pods</Button>
              </Link>
            </div>
            <p className="mt-12 text-lg font-semibold">
              Naploo™ – Powered by BIDUA Industries Pvt Ltd<br />
              <span className="text-sm font-normal italic">
                "Building India's First Smart Pod Hotel Chain – One Nap at a Time."
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
