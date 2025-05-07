import { motion } from "framer-motion";
import { Factory, Globe, Award, Users, Rocket } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-primary bg-opacity-30 p-6 rounded-lg border-l-4 border-secondary"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-secondary text-2xl" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      icon: Factory,
      title: "Multi-Industry Innovation Platform",
      description:
        "We operate across diverse industries, bringing innovation and excellence to every sector we touch.",
    },
    {
      icon: Globe,
      title: "Pan-India and Global Operations",
      description:
        "Our wide network spans across India and beyond, ensuring we serve customers wherever they are.",
    },
    {
      icon: Award,
      title: "Quality Commitment and Transparency",
      description:
        "We maintain the highest standards of quality and transparency in all our products and services.",
    },
    {
      icon: Users,
      title: "Customer-First and Business-First Philosophy",
      description:
        "Our dual focus ensures we deliver value to both customers and business partners alike.",
    },
    {
      icon: Rocket,
      title: "Future-Ready Solutions",
      description:
        "We leverage cutting-edge technologies like Blockchain, AI, Cloud, and Decentralization to stay ahead of the curve.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose BIDUA?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
