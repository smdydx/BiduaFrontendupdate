import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide down animation
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide left animation
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide right animation
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Scale animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Staggered children animation container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animation for card hover
export const cardHover = {
  rest: { 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  },
  hover: { 
    y: -10,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// Animation for button hover
export const buttonHover = {
  rest: { 
    scale: 1, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// Animation for appear in viewport
export const appearInViewport = (delay: number = 0): Variants => ({
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      delay
    }
  }
});
