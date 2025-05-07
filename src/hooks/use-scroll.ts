import { useState, useEffect } from "react";

interface ScrollValues {
  scrollX: number;
  scrollY: number;
  scrollDirection: "up" | "down" | null;
}

export function useScroll(): ScrollValues {
  const [scroll, setScroll] = useState<ScrollValues>({
    scrollX: typeof window !== "undefined" ? window.scrollX : 0,
    scrollY: typeof window !== "undefined" ? window.scrollY : 0,
    scrollDirection: null
  });

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction = currentScrollY > lastScrollTop ? "down" : "up";
      
      setScroll({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection: direction
      });
      
      setLastScrollTop(currentScrollY > 0 ? currentScrollY : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return scroll;
}
