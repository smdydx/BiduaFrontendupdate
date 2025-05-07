import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DivisionCardProps {
  id: string;
  title: string;
  image: string;
  listItems: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  index: number;
}

function DivisionCard({
  id,
  title,
  image,
  listItems,
  primaryCta,
  secondaryCta,
  index,
}: DivisionCardProps) {
  return (
    <motion.div
      id={id}
      className="bg-card bg-opacity-50 rounded-xl overflow-hidden shadow-xl card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-secondary">{title}</h3>
        <ul className="mb-6 space-y-2">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className={cn("flex flex-col sm:flex-row gap-3", !secondaryCta && "block")}>
          <Link href={primaryCta.href}>
            <Button variant="default" className="w-full">
              {primaryCta.label}
            </Button>
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button variant="outline" className="w-full">
                {secondaryCta.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function DivisionsSection() {
  const divisions = [
    {
      id: "naploo",
      title: "Naploo™ – Sleeping Pod Hotels",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200",
      listItems: [
        "India's First Smart Pod Hotel Chain",
        "Book Pods By Hour (Customer Side)",
        "Invest and Earn with Guaranteed Returns (Investor Side)",
      ],
      primaryCta: {
        label: "Book a Pod Stay",
        href: "/naploo",
      },
      secondaryCta: {
        label: "Invest in Naploo™",
        href: "/investor",
      },
    },
    {
      id: "beauty",
      title: "BIDUA Beauty Care – Skincare & Wellness",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200",
      listItems: [
        "Premium Day and Night Cream for Dark Circles and Dark Spots",
        "Natural, Safe, Dermatologically Tested Products",
        "Launching Full Beauty Product Line",
      ],
      primaryCta: {
        label: "Shop BIDUA Beauty",
        href: "/beauty-care",
      },
    },
    {
      id: "clouddrive",
      title: "BIDUA CloudDrive™ – Smart Storage Solutions",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1200",
      listItems: [
        "Hybrid Storage Device (Offline + Cloud + Sim + WiFi)",
        "Auto-Sync Data on the Move",
        "Secure, Instant File Sharing",
      ],
      primaryCta: {
        label: "Discover CloudDrive",
        href: "/cloud-drive",
      },
    },
    {
      id: "oem",
      title: "BIDUA OEM Solutions – Manufacturing Hub",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      listItems: [
        "White-Label and Private Label Solutions",
        "Electronics, FMCG, Beauty, Healthcare, Furniture, Food, Automobiles, and More",
        "Pan-India Manufacturer Network",
      ],
      primaryCta: {
        label: "Partner for OEM Solutions",
        href: "/oem-solutions",
      },
    },
    {
      id: "it",
      title: "BIDUA IT Connect – B2B Software Portal",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
      listItems: [
        "Pre-made and Custom Software Solutions",
        "Centralized Customer Interaction Model",
        "Blockchain, DApps, SaaS, AI, Cloud, and Traditional IT Solutions",
      ],
      primaryCta: {
        label: "Find Your Software",
        href: "/it-connect",
      },
    },
  ];

  return (
    <section id="divisions" className="py-20 bg-gradient-to-b from-background to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Divisions Overview</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our diverse portfolio of innovative divisions, each designed to excel in its respective industry.
          </p>
        </motion.div>
        
        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.id}
              {...division}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
