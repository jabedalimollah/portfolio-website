import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io";

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/jabedalimollah",
    icon: FaInstagram,
    hover: "hover:border-pink-500 hover:text-pink-500",
  },

  {
    name: "Facebook",
    url: "https://www.facebook.com/jabedalimollah7",
    icon: FaFacebookF,
    hover: "hover:border-blue-600 hover:text-blue-600",
  },

  {
    name: "YouTube",
    url: "https://www.youtube.com/@jabedalimollah",
    icon: IoLogoYoutube,
    hover: "hover:border-red-500 hover:text-red-500",
  },

  {
    name: "X",
    url: "https://x.com/JabedAliMollah7",
    icon: FaXTwitter,
    hover: "hover:border-slate-700 hover:text-slate-700",
  },
];
