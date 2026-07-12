const projects = [
  {
    id: 1,
    slug: "notebook",
    featured: true,
    title: "Notebook",
    category: "Full Stack",
    image: "/projects/notebook.webp",
    shortDescription:
      "A secure MERN Stack note-taking application with authentication, PDF export, checklist management, advanced search, and text import/export.",
    description:
      "Notebook is a modern note management platform built using the MERN Stack. It enables users to securely create, organize, search, edit, and export notes with an intuitive user experience.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
    ],

    features: [
      "JWT Authentication",
      "Create & Edit Notes",
      "Delete Notes",
      "Advanced Search",
      "Export PDF",
      "Import TXT",
      "Checklist Notes",
      "Responsive Design",
    ],

    github: "https://github.com/jabedalimollah",
    live: "https://your-live-link.com",
  },

  {
    id: 2,
    slug: "aliet",
    featured: true,
    title: "Aliet Social",
    category: "Full Stack",
    image: "/projects/aliet.webp",
    shortDescription:
      "A MERN Stack social media application with authentication, posts, likes, comments, image uploads, and real-time messaging.",

    description:
      "Aliet is a social networking platform that allows users to connect, share posts, upload media, and communicate using Socket.IO.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "Redux Toolkit",
    ],

    features: [
      "Authentication",
      "Create Posts",
      "Image Upload",
      "Like & Comment",
      "Real-time Chat",
      "Profile Management",
    ],

    github: "https://github.com/jabedalimollah",
    live: "https://your-live-link.com",
  },

  {
    id: 3,
    slug: "chatit",
    featured: true,
    title: "Chatit",
    category: "Full Stack",
    image: "/projects/chatit.webp",

    shortDescription:
      "Real-time MERN chat application with Socket.IO and AI chatbot integration.",

    description:
      "Chatit provides real-time messaging, secure authentication, media sharing, and AI-powered conversations.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],

    features: [
      "Real-time Chat",
      "AI Chatbot",
      "Authentication",
      "Image Sharing",
      "Online Users",
    ],

    github: "https://github.com/jabedalimollah",
    live: "https://your-live-link.com",
  },

  {
    id: 4,
    slug: "estore",
    featured: false,
    title: "E-Store",

    category: "Frontend",

    image: "/projects/estore.webp",

    shortDescription:
      "Modern React eCommerce website with Redux state management and responsive UI.",

    description:
      "An online shopping website featuring product listings, shopping cart, category filters, and responsive layouts.",

    technologies: ["React.js", "Redux Toolkit", "Bootstrap", "Axios"],

    features: [
      "Shopping Cart",
      "Category Filter",
      "Responsive UI",
      "API Integration",
    ],

    github: "https://github.com/jabedalimollah",

    live: "https://your-live-link.com",
  },

  {
    id: 5,
    slug: "portfolio",

    featured: false,

    title: "Developer Portfolio",

    category: "Next.js",

    image: "/projects/portfolio.webp",

    shortDescription:
      "Personal portfolio website built with Next.js and Tailwind CSS.",

    description:
      "A modern portfolio showcasing projects, skills, blogs, services, and contact information with strong SEO.",

    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],

    features: ["SEO Friendly", "Responsive", "Dark Mode", "Fast Performance"],

    github: "https://github.com/jabedalimollah",

    live: "https://your-domain.com",
  },

  {
    id: 6,
    slug: "movies-hub",

    featured: false,

    title: "Movies Hub",

    category: "API",

    image: "/projects/movies.webp",

    shortDescription: "Movie search application using the OMDb API.",

    description:
      "Users can search movies, explore details, ratings, posters, and release information.",

    technologies: ["React.js", "OMDb API", "CSS"],

    features: [
      "Movie Search",
      "Movie Details",
      "API Integration",
      "Responsive Design",
    ],

    github: "https://github.com/jabedalimollah",

    live: "https://your-live-link.com",
  },
];

export default projects;
