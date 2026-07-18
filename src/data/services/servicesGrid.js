import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaSearch,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

export const servicesGridData = {
  title: "Services I Offer",

  description:
    "I build fast, secure, responsive, and SEO-friendly web applications using modern technologies.",

  services: [
    {
      icon: FaReact,
      title: "Frontend Development",
      description:
        "Responsive, modern interfaces using React.js, Next.js, JavaScript and Tailwind CSS.",
    },
    {
      icon: FaNodeJs,
      title: "Full Stack MERN",
      description:
        "Complete MERN applications with MongoDB, Express.js, React.js and Node.js.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Mobile-first websites optimized for desktop, tablet and mobile devices.",
    },
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description:
        "Technical SEO, metadata, sitemap, robots.txt and Core Web Vitals optimization.",
    },
    {
      icon: FaLaptopCode,
      title: "Portfolio Websites",
      description:
        "Professional portfolio websites for students, developers and businesses.",
    },
    {
      icon: FaGlobe,
      title: "Website Deployment",
      description:
        "Deploy websites on Vercel and configure custom domains for production.",
    },
  ],
};
