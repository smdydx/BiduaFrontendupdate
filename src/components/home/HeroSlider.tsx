import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import video1 from "@/assets/1.mp4"; 
import video2 from "@/assets/Hotel.mp4"
import video3 from "@/assets/Beauty care.mp4";
import video4 from "@/assets/IT Connect2.mp4";

type SlideData = {
  id: number;
  image?: string;
  video?: string;
  alt: string;
};

const slides: SlideData[] = [
  {
    id: 0,
    video: video1,
    alt: "Video 1",
  },
  {
    id: 1,
    video: video2,
    alt: " Hotel",
  },
  {
    id: 2,
    video: video3,
    alt: "Beauty Care",
  },
  {
    id: 3,
    video: video4,
    alt: "IT Connect",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
        key={slide.id}
        className={cn("hero-slide", currentSlide === index && "active")}
        aria-hidden={currentSlide !== index}
      >
        {slide.video ? (
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        )}
      
      <div className="gradient-overlay flex items-center justify-center w-full h-full relative z-10 bg-gradient-to-t from-black/60 to-transparent">

            <div className="container mx-auto px-4 pt-20">
              <div className="max-w-3xl mx-auto text-center">
              <motion.h1
  className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "rgb(28, 127, 171)" }}
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  BIDUA Industries Pvt Ltd
</motion.h1>
                <motion.p
                  className="text-xl md:text-2xl font-semibold mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Empowering Innovation Across Industries
                </motion.p>
                <motion.p
                  className="text-lg mb-12 opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Hospitality, Beauty, Technology, Manufacturing, and Digital Solutions — All from One Visionary Platform.
                </motion.p>
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="#divisions">
                  <Button
  variant="default"
  size="lg"
  className="cta-button"
  onClick={() => {
    const divisionsSection = document.getElementById("divisions");
    if (divisionsSection) {
      divisionsSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Explore Divisions
</Button>
                  </Link>
                  <Link href="/investor">
                    <Button variant="outline" size="lg" className="cta-button">
                      Invest in Naploo™
                    </Button>
                  </Link>
                 
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((slide) => (
            <button
              key={slide.id}
              className={cn(
                "w-3 h-1 bg-white bg-opacity-50 rounded-full transition-all",
                currentSlide === slide.id && "bg-opacity-100 w-6"
              )}
              onClick={() => goToSlide(slide.id)}
              aria-label={`Go to slide ${slide.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
