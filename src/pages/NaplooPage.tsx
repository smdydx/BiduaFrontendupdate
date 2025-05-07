import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Check,
  Clock,
  Shield,
  Heart,
  Award,
  Sparkles,
  MonitorSmartphone,
  Wifi,
  BatteryCharging,
  ThermometerSnowflake,
  LockKeyhole,
  BedDouble,
  ShieldCheck,
  Star,
} from "lucide-react";
import mainImage from "/assets/NaplooImg/main.jpg";
import img1 from "/assets/NaplooImg/maina.jpg";
import img2 from "/assets/NaplooImg/mainb.jpg";
import img3 from "/assets/NaplooImg/mainc.jpg";
//import img4 from '../assets/NaplooImg/4.jpg';
import img5 from "/assets/NaplooImg/5.jpg";
import img6 from "/assets/NaplooImg/6.jpg";
import img7 from "/assets/NaplooImg/7.jpg";
import img8 from "/assets/NaplooImg/8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NaplooPage() {
  return (
    <>
      <Helmet>
        <title>Naploo™ – Your Private Space, Anytime | BIDUA Industries</title>
        <meta
          name="description"
          content="Experience Naploo™, the modern way to rest — affordable, private, and luxurious capsule hotels brought to you by BIDUA Industries Pvt Ltd."
        />
        <meta
          name="keywords"
          content="Naploo, pod hotels, capsule hotels, sleeping pods, hourly stay, rest pods, BIDUA"
        />
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
                <span className="text-secondary">Naploo™</span> – Your Private
                Space, Anytime
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light">
                Recharge. Relax. Refresh.
              </h2>
              <p className="text-lg mb-8">
                Experience Naploo™, the modern way to rest — affordable,
                private, and luxurious capsule hotels brought to you by BIDUA
                Industries Pvt Ltd.
              </p>
              <p className="text-lg mb-10">
                Wherever life takes you — airport, highway, hospital, tourist
                spot, railway station — your Naploo™ Pod awaits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Book a Pod Stay</Button>
                <Link href="/investor">
                  <Button variant="outline" size="lg">
                    Invest in Naploo™
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-1.5 rounded-2xl bg-gradient-to-r from-[hsl(142,53%,22%)] via-green-300 "
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={mainImage}
                  alt="Naploo Pod Hotel"
                  className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reception Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Futuristic Reception Area
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Step into the future with our cutting-edge reception space
              featuring hexagonal lighting and smart amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-card rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                Sci-Fi Inspired Design
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Geometric hexagonal ceiling pattern with LED lighting
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Smart digital check-in kiosks with blue accent lighting
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Modern angular furniture with metallic finish</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Interactive digital wall displays</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/NaplooImg/maina.jpg"
                alt="Naploo Futuristic Reception"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Modern Check-in Experience
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Automated check-in kiosks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Digital payment systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/NaplooImg/mainb.jpg"
                alt="Naploo Futuristic Reception"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pod Designs Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Pod Designs
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Experience luxury and comfort in our state-of-the-art sleeping
              pods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "/assets/NaplooImg/mainc.jpg",
                title: "Luxury Pod Design",
                description:
                  "Premium comfort with modern amenities for the perfect rest",
              },
              {
                image:
                  "/assets/NaplooImg/4.jpg",
                title: "Smart Pod Experience",
                description: "Integrated technology for a seamless stay",
              },
              {
                image: "/assets/NaplooImg/5.jpg",
                title: "Executive Pod",
                description:
                  "Designed for business travelers with work facilities",
              },
              {
                image:
                  "/assets/NaplooImg/6.jpg",
                title: "Premium Rest Pod",
                description: "Enhanced comfort with climate control",
              },
              {
                image:
                  "/assets/NaplooImg/7.jpg",
                title: "Deluxe Sleep Pod",
                description: "Spacious interior with luxury furnishings",
              },
              {
                image:
                  "/assets/NaplooImg/8.jpg",
                title: "Elite Pod Suite",
                description: "Our most premium pod experience",
              },
            ].map((pod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={pod.image}
                    alt={pod.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pod.title}
                    </h3>
                    <p className="text-white/80">{pod.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pod Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inside Your Naploo™ Pod
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Every Naploo™ Pod is a secure, private space packed with luxury,
              technology, and comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Ambient Mood Lighting",
                description: "Customize your pod's lighting to suit your mood",
              },
              {
                icon: Star,
                title: "Private Mirror",
                description: "Freshen up in the privacy of your own pod",
              },
              {
                icon: MonitorSmartphone,
                title: "Smart TV with Headphones",
                description: "Enjoy entertainment without disturbing others",
              },
              {
                icon: Wifi,
                title: "WiFi Connectivity",
                description: "Stay connected with high-speed internet",
              },
              {
                icon: BatteryCharging,
                title: "Charging Ports",
                description: "Keep all your devices powered up",
              },
              {
                icon: ThermometerSnowflake,
                title: "Climate Control",
                description: "Adjust temperature to your comfort (AC/Heater)",
              },
              {
                icon: LockKeyhole,
                title: "Personal In-Pod Locker",
                description: "Secure storage for your valuables",
              },
              {
                icon: BedDouble,
                title: "High-Quality Mattress",
                description: "Premium comfort for the perfect rest",
              },
              {
                icon: ShieldCheck,
                title: "Fireproof & Soundproof",
                description: "Safe and quiet environment",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border-l-4 border-secondary"
              >
                <div className="w-12 h-12  bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 p-6 bg-primary bg-opacity-20 rounded-lg border border-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start">
              <Shield className="text-secondary text-xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Sanitization Guarantee
                </h3>
                <p>
                  Pods are deep-cleaned after every use for complete hygiene and
                  safety.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hotel Facilities Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Naploo™ Hotel Facilities
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-1.5 rounded-2xl bg-gradient-to-r from-[hsl(142,53%,22%)] via-green-300 "
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-full w-full rounded-2xl"
              >
                <SwiperSlide>
                  <img
                    src={img1}
                    alt="Naploo Hotel Facility 1"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img2}
                    alt="Naploo Hotel Facility 2"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img3}
                    alt="Naploo Hotel Facility 3"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
      <img 
        src=""
        alt="Naploo Hotel Facility 1"
        className="w-full h-full object-cover"
      />
    </SwiperSlide> */}
                <SwiperSlide>
                  <img
                    src={img5}
                    alt="Naploo Hotel Facility 2"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img6}
                    alt="Naploo Hotel Facility 3"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img7}
                    alt="Naploo Hotel Facility 1"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={img8}
                    alt="Naploo Hotel Facility 2"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Reception & Lounge</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 Check-in and Support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Friendly Multilingual Staff</span>
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
                <h3 className="text-xl font-bold mb-4">Common Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Larger Secure Lockers (for big bags/luggage)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Clean and hygienic washrooms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Hot water showers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Wheelchair Accessible Toilets (selected properties)
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">
                  Naploo Café & Business Lounge
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Snacks, beverages, and coffee available 24x7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Working desks and charging stations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Free High-Speed Wi-Fi</span>
                  </li>
                </ul>
              </motion.div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flexible Booking
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Book for 1 Hour or More. Discounted Rates for Longer Stays.
              Instant Booking through Naploo™ App or Website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl overflow-hidden shadow-xl"
            >
              <div className="bg-primary p-6 text-center">
                <h3 className="text-2xl font-bold">Single Bed Pod</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">₹150</span>
                  <span className="text-lg">/hour</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Comfortable Single Mattress</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>All Standard Pod Amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Perfect for Solo Travelers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>10% Discount on Additional Hours</span>
                  </li>
                </ul>
                <Button className="w-full">Book Single Pod</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl overflow-hidden shadow-xl border-2 border-secondary"
            >
              <div className="bg-secondary p-6 text-center">
                <h3 className="text-2xl font-bold">Double Bed Pod</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">₹200</span>
                  <span className="text-lg">/hour</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Spacious Double Mattress</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>All Standard Pod Amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Ideal for Couples or Extra Comfort</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>10% Discount on Additional Hours</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Book Double Pod
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="mb-8 text-lg">
              Pay via Cash, Card, UPI, Wallet, or Crypto
            </p>
            <Button variant="outline" size="lg">
              <Clock className="mr-2 h-5 w-5" />
              View Booking Options
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Naploo™ Locations
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Launching across major locations. Wherever you are tired, a
              Naploo™ Pod is nearby.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Major Airports",
                image:
                  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              },
              {
                title: "Highways and Rest Stops",
                image:
                  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
              },
              {
                title: "Railway Stations",
                image:
                  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
              },
              {
                title: "Tourist Hubs",
                image:
                  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              },
              {
                title: "Corporate Business Districts",
                image:
                  "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
              },
              {
                title: "Hospitals",
                image:
                  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80",
              },
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
                  <h3 className="text-xl font-bold text-white">
                    {location.title}
                  </h3>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Naploo™?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Total Privacy & Comfort",
                description: "Your own secure space, complete with privacy",
              },
              {
                icon: Star,
                title: "Affordable Luxury Pricing",
                description: "5-star experience at budget-friendly rates",
              },
              {
                icon: Clock,
                title: "Flexible Stay Timing",
                description: "Book for exactly the hours you need",
              },
              {
                icon: Shield,
                title: "Smart, Tech-Enabled Stay",
                description: "Modern amenities for the digital traveler",
              },
              {
                icon: Award,
                title: "Global Payment Options",
                description: "Pay your way - cash, card, UPI, or crypto",
              },
              {
                icon: Check,
                title: "Instant Check-in/Check-out",
                description: "No waiting in lines, just scan and enter",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Affordable Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Affordable
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Accommodation does not have to cost an exorbitant amount. Now
              everyone can afford a clean and comfortable place to stay,
              complete with top-notch services and facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-card p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Premium comfort at budget-friendly rates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Pay only for the hours you need</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>No hidden charges or extra fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Smart amenities included in base price</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/NaplooImg/5.jpeg"
                alt="Affordable Naploo Pod"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Pod Now!
            </h2>
            <p className="text-xl mb-10">
              Recharge smarter, not harder. Enjoy your personalized Naploo™
              experience today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Book a Pod
              </Button>
              <Link href="/investor">
                <Button size="lg" variant="outline">
                  Invest in Naploo™
                </Button>
              </Link>
            </div>
            <p className="mt-12 text-lg font-semibold">
              Naploo™ – "Your Private Space, Anytime."
              <br />
              <span className="text-sm font-normal">
                Powered by BIDUA Industries Pvt Ltd
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
