import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Home, Phone, DollarSign, Info,
  ChevronDown, UserCheck, Briefcase, ChevronRight
} from "lucide-react";
import {
  FaSpa, FaCloudUploadAlt, FaIndustry,
  FaLaptopCode, FaBed,
  FaRProject,
  FaEye,
  FaClock,
  FaUserCheck
} from "react-icons/fa";
import BiduaLogo from "@/assets/bidua-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const [showDivision, setShowDivision] = useState(false);
  const [showMobileDivision, setShowMobileDivision] = useState(false);
  const [showMobileRunning, setShowMobileRunning] = useState(false);
  const [showMobileUpcoming, setShowMobileUpcoming] = useState(false);
  const [showMobileBidua, setShowMobileBidua] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState<string | null>(null);




  const isScrolled = scrollY > 50;
  const divisionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowDivision(false);
    setShowMobileDivision(false);
    setShowMobileRunning(false);
    setShowMobileUpcoming(false);
    setShowMobileBidua(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divisionRef.current && !divisionRef.current.contains(event.target)) {
        setShowDivision(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen ? "bg-background shadow-md" : "bg-background/80 backdrop-blur-md"
    )}>
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src={BiduaLogo} alt="BIDUA Logo" className="h-14 mr-2" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-center items-center space-x-8 relative w-full">
          <Link href="/" className={cn("flex items-center hover:text-secondary", location === "/" && "text-secondary font-semibold")}>
            <Home className="w-4 h-4 mr-1" /> Home
          </Link>
          <Link href="/about" className={cn("flex items-center hover:text-secondary", location === "/about" && "text-secondary font-semibold")}>
            <Info className="w-4 h-4 mr-1" /> About
          </Link>

          <div className="relative" ref={divisionRef}>
  <button
    className="flex items-center hover:text-secondary transition-colors"
    onClick={() => {
      setShowDivision((prev) => !prev);
      setShowSubMenu(null); // Reset submenu when toggling
    }}
  >
    <FaIndustry className="w-4 h-4 mr-1" />
    Division
    <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform", showDivision && "rotate-180")} />
  </button>

  {showDivision && (
    <div className="absolute left-0 mt-2 bg-background shadow-lg p-2 w-64 border rounded-md z-50">
      {/* Running */}
      <div className="relative">
        <button
          onClick={() =>
            setShowSubMenu(showSubMenu === 'running' ? null : 'running')
          }
          className="flex justify-between w-full items-center px-3 py-2 hover:text-secondary"
        >
          <span className="flex items-center">
            <FaRProject className="w-4 h-4 mr-2" /> ONGOING
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
        {showSubMenu === 'running' && (
          <div className="absolute left-full top-0 bg-background shadow-lg border rounded-md w-56 p-2 z-50">
            <Link href="/naploo" className="flex items-center px-2 py-1 hover:text-secondary">
              <FaBed className="w-4 h-4 mr-2" /> Naploo
            </Link>
            <Link href="/beauty-care" className="flex items-center px-2 py-1 hover:text-secondary">
              <FaSpa className="w-4 h-4 mr-2" /> Beauty Care
            </Link>
          </div>
        )}
      </div>

      {/* Upcoming Soon */}
      <div className="relative">
        <button
          onClick={() =>
            setShowSubMenu(showSubMenu === 'upcoming' ? null : 'upcoming')
          }
          className="flex justify-between w-full items-center px-3 py-2 hover:text-secondary"
        >
          <span className="flex items-center">
            <FaClock className="w-4 h-4 mr-2" /> UPCOMING SOON
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
        {showSubMenu === 'upcoming' && (
          <div className="absolute left-full top-0 bg-background shadow-lg border rounded-md w-56 p-2 z-50">
            <Link href="/it-connect" className="flex items-center px-2 py-1 hover:text-secondary">
              <FaLaptopCode className="w-4 h-4 mr-2" /> IT Connect
            </Link>
            <Link href="/oem-solutions" className="flex items-center px-2 py-1 hover:text-secondary">
              <FaIndustry className="w-4 h-4 mr-2" /> OEM Solution
            </Link>
            <Link href="/cloud-drive" className="flex items-center px-2 py-1 hover:text-secondary">
              <FaCloudUploadAlt className="w-4 h-4 mr-2" /> Cloud Drive
            </Link>
          </div>
        )}
      </div>

      {/* Future Plans */}
      <div className="relative">
        <button
          onClick={() =>
            setShowSubMenu(showSubMenu === 'future' ? null : 'future')
          }
          className="flex justify-between w-full items-center px-3 py-2 hover:text-secondary"
        >
          <span className="flex items-center">
            <FaEye className="w-4 h-4 mr-2" /> FUTURE PLANNING
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
        {showSubMenu === 'future' && (
          <div className="absolute left-full top-0 bg-background shadow-lg border rounded-md w-56 p-2 z-50">
            <Link href="/bidua-ventures" className="flex items-center px-2 py-1 hover:text-secondary">
              <Briefcase className="w-4 h-4 mr-2" /> BIDUA Ventures
            </Link>
          </div>
        )}
      </div>
    </div>
  )}
</div>


            {/* CTA Buttons */}
            <Link href="/investor" className="block">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <DollarSign className="w-4 h-4" /> Invest in Naploo™
            </Button>
          </Link>
          <Link href="/contact" className="block">
            <Button className="w-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-background border-t border-muted px-4 py-6 space-y-4">
          <Link href="/" className="flex items-center hover:text-secondary">
            <Home className="w-4 h-4 mr-2" /> Home
          </Link>
          <Link href="/about" className="flex items-center hover:text-secondary">
            <Info className="w-4 h-4 mr-2" /> About
          </Link>

          {/* Division Accordion */}
          <button onClick={() => setShowMobileDivision(!showMobileDivision)} className="flex items-center justify-between w-full text-left py-2 font-semibold">
            <span className="flex items-center"><FaIndustry className="w-4 h-4 mr-2" /> Division</span>
            <span className="text-xl">{showMobileDivision ? "-" : "+"}</span>
          </button>

          {showMobileDivision && (
            <div className="pl-4 space-y-2">
              {/* Running */}
              <button onClick={() => setShowMobileRunning(!showMobileRunning)} className="flex items-center justify-between w-full text-left font-medium">
                <span className="flex items-center"><FaRProject className="w-4 h-4 mr-2" />ONGOING</span>
                <span className="text-xl">{showMobileRunning ? "-" : "+"}</span>
              </button>
              {showMobileRunning && (
                <div className="pl-4 space-y-1">
                  <Link href="/naploo" className="flex items-center hover:text-secondary"><FaBed className="w-4 h-4 mr-2" /> Naploo</Link>
                  <Link href="/beauty-care" className="flex items-center hover:text-secondary"><FaSpa className="w-4 h-4 mr-2" /> Beauty Care</Link>
                </div>
              )}

              {/* Upcoming Soon */}
              <button onClick={() => setShowMobileUpcoming(!showMobileUpcoming)} className="flex items-center justify-between w-full text-left font-medium mt-2">
                <span className="flex items-center"><FaClock className="w-4 h-4 mr-2"/>UPCOMING SOON</span>
                <span className="text-xl">{showMobileUpcoming ? "-" : "+"}</span>
              </button>
              {showMobileUpcoming && (
                <div className="pl-4 space-y-1">
                  <Link href="/it-connect" className="flex items-center hover:text-secondary"><FaLaptopCode className="w-4 h-4 mr-2" /> IT Connect</Link>
                  <Link href="/oem-solutions" className="flex items-center hover:text-secondary"><FaIndustry className="w-4 h-4 mr-2" /> OEM Solution</Link>
                  <Link href="/cloud-drive" className="flex items-center hover:text-secondary"><FaCloudUploadAlt className="w-4 h-4 mr-2" /> Cloud Drive</Link>


                </div>
              )}
               {/* BIDUA Ventures inside Upcoming */}
               <button onClick={() => setShowMobileBidua(!showMobileBidua)} className="flex items-center justify-between w-full text-left font-medium mt-2">
                    <span className="flex items-center"><FaEye className="w-4 h-4 mr-2" />FUTURE PLANNING</span>
                    <span className="text-xl">{showMobileBidua ? "-" : "+"}</span>
                  </button>
                  {showMobileBidua && (
                    <div className="pl-4 space-y-1">
                      <Link href="/bidua-ventures" className="flex items-center hover:text-secondary"><Briefcase className="w-4 h-4 mr-2" /> Go to BIDUA Ventures</Link>
                    </div>
                  )}
            </div>
          )}

          {/* CTA Buttons */}
          <Link href="/investor" className="block">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
              <DollarSign className="w-4 h-4" /> Invest in Naploo™
            </Button>
          </Link>
          <Link href="#contact" className="block">
            <Button className="w-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}