import {
  FaComments,
  FaClipboardList,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

export const developmentProcessData = {
  badge: "Development Process",

  title: "How I Work",

  description:
    "Every project follows a structured development process to ensure quality, scalability, and long-term maintainability.",

  steps: [
    {
      icon: FaComments,
      title: "Discussion",
      description:
        "Understanding your requirements, goals, and project scope before development begins.",
    },
    {
      icon: FaClipboardList,
      title: "Planning",
      description:
        "Creating the project structure, selecting technologies, and defining the development roadmap.",
    },
    {
      icon: FaCode,
      title: "Development",
      description:
        "Building responsive, scalable, and SEO-friendly web applications using modern technologies.",
    },
    {
      icon: FaBug,
      title: "Testing",
      description:
        "Testing functionality, responsiveness, accessibility, and performance across devices.",
    },
    {
      icon: FaRocket,
      title: "Deployment",
      description:
        "Deploying the application to production with optimized performance and SEO.",
    },
    {
      icon: FaHeadset,
      title: "Support",
      description:
        "Providing ongoing maintenance, improvements, and technical support after deployment.",
    },
  ],
};
