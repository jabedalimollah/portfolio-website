import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const siteUrl = "https://yourdomain.com";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Jabed Ali Mollah | MERN Stack Developer",
    template: "%s | Jabed Ali Mollah",
  },

  description:
    "Jabed Ali Mollah is a MERN Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, and modern web technologies. Explore projects, skills, resume, and contact information.",

  keywords: [
    "Jabed Ali Mollah",
    "Jabed",
    "Jabed Ali",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React JS",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "HTML",
    "CSS",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
    "West Bengal",
    "India",
  ],

  authors: [
    {
      name: "Jabed Ali Mollah",
      url: baseUrl,
    },
  ],

  creator: "Jabed Ali Mollah",
  publisher: "Jabed Ali Mollah",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "Jabed Ali Mollah | MERN Stack Developer",
    description:
      "Portfolio of Jabed Ali Mollah showcasing modern web development projects built with React.js, Next.js, Node.js, Express.js, MongoDB, and JavaScript.",
    url: baseUrl,
    siteName: "Jabed Ali Mollah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jabed Ali Mollah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jabed Ali Mollah | MERN Stack Developer",
    description:
      "Explore my portfolio featuring MERN Stack, React.js, Next.js, Node.js, MongoDB, and full-stack development projects.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  applicationName: "Jabed Ali Mollah Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  verification: {
    // Add after verifying your site
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "",
    // yahoo: "",
    // other: {},
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
