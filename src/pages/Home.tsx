import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { InvestorHighlight } from "@/components/home/InvestorHighlight";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>BIDUA Industries Pvt Ltd - Empowering Innovation Across Industries</title>
        <meta name="description" content="BIDUA Industries - Hospitality, Beauty, Technology, Manufacturing, and Digital Solutions — All from One Visionary Platform." />
        <meta name="keywords" content="BIDUA, Naploo, Pod Hotels, Beauty Care, CloudDrive, OEM Solutions, IT Connect, Innovation" />
      </Helmet>
      
      <HeroSlider />
      <AboutSection />
      <DivisionsSection />
      <InvestorHighlight />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
