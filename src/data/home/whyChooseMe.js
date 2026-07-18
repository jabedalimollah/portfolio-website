import { Code2, Smartphone, Zap, SearchCheck, ArrowRight } from "lucide-react";

export const whyChooseMeData = {
  badge: "Why Choose Me",

  title: "Building High-Quality Digital Experiences",

  description:
    "I focus on creating modern, responsive, accessible and high-performance web applications that provide a great user experience and are easy to maintain.",

  features: [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I write clean, maintainable, reusable, and scalable code following modern React.js, Next.js, and JavaScript best practices.",
    },

    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Every website is built with a mobile-first approach and optimized for desktops, tablets, and smartphones.",
    },

    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "I focus on fast loading, optimized images, lazy loading, code splitting, and excellent Core Web Vitals.",
    },

    {
      icon: SearchCheck,
      title: "SEO Friendly Development",
      description:
        "Semantic HTML, structured metadata, accessibility, and technical SEO help websites rank better in search engines.",
    },
  ],

  cta: {
    title: "Ready to Build Something Amazing?",

    description:
      "I'm always excited to work on modern web applications, business websites and full-stack projects that make a real impact.",

    buttonText: "Let's Talk",

    buttonLink: "/contact",

    buttonIcon: ArrowRight,
  },
};
