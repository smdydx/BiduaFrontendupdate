import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter,
  Home,
  Users,
  Grid,
  Phone,
  FileText,
  Map,
  Mail,
  MapPin,
  Info,
  Shield
} from "lucide-react";
import { 
  FaSpa, 
  FaCloudUploadAlt, 
  FaIndustry, 
  FaLaptopCode, 
  FaBed, 
  FaHandshake 
} from "react-icons/fa";
import BiduaLogo from '@/assets/bidua-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://www.linkedin.com/company/bidua", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/bidua.in", icon: Instagram, label: "Instagram" },
    { href: "https://www.facebook.com/bidua.in", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com/bidua_in", icon: Twitter, label: "Twitter" },
  ];
  
  const quickLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "#about", label: "About Us", icon: <Users className="w-4 h-4" /> },
    { href: "#divisions", label: "Divisions", icon: <Grid className="w-4 h-4" /> },
    { href: "#contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
    { href: "#", label: "Careers", icon: <FaHandshake className="w-4 h-4" /> },
  ];
  
  const divisionsLinks = [
    { href: "/naploo", label: "Naploo™ Pod Hotels", icon: <FaBed className="w-4 h-4" /> },
    { href: "/beauty-care", label: "BIDUA Beauty Care", icon: <FaSpa className="w-4 h-4" /> },
    { href: "/cloud-drive", label: "BIDUA CloudDrive™", icon: <FaCloudUploadAlt className="w-4 h-4" /> },
    { href: "/oem-solutions", label: "BIDUA OEM Solutions", icon: <FaIndustry className="w-4 h-4" /> },
    { href: "/it-connect", label: "BIDUA IT Connect", icon: <FaLaptopCode className="w-4 h-4" /> },
  ];
  
  const legalLinks = [
    { href: "#", label: "Privacy Policy", icon: <Shield className="w-4 h-4" /> },
    { href: "#", label: "Terms of Use", icon: <FileText className="w-4 h-4" /> },
    { href: "#", label: "Sitemap", icon: <Map className="w-4 h-4" /> },
    { href: "/investor", label: "Investor Relations", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <img 
                src={BiduaLogo} 
                alt="BIDUA Industries Logo" 
                className="h-12 mr-2" 
              />
            </Link>
            <p className="text-foreground opacity-80 mb-6">
              BIDUA Industries Pvt Ltd — Creating a Future Where Innovation Meets Everyday Life.
            </p>
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-secondary" />
                <p className="text-sm">C/O Ramaera Industries Pvt Ltd <br/>
                 H-77 Ground floor, Sec 62 <br/>
                 Noida, UP, India Pin 201305</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-secondary" />
                <span className="text-sm">+91 xxx-xxx-xxxx</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-secondary" />
                <span className="text-sm">biduaindustries@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="bg-primary/20 hover:bg-secondary/20 p-2 rounded-full text-foreground hover:text-secondary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Info className="w-5 h-5 mr-2 text-secondary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-foreground opacity-80 hover:text-secondary transition-colors"
                  >
                    <span className="mr-2 text-secondary">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Grid className="w-5 h-5 mr-2 text-secondary" />
              Our Divisions
            </h3>
            <ul className="space-y-3">
              {divisionsLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-foreground opacity-80 hover:text-secondary transition-colors"
                  >
                    <span className="mr-2 text-secondary">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-secondary" />
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-foreground opacity-80 hover:text-secondary transition-colors"
                  >
                    <span className="mr-2 text-secondary">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary pt-8 text-center">
          <p className="text-foreground opacity-70">
            &copy; {currentYear} BIDUA Industries Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
