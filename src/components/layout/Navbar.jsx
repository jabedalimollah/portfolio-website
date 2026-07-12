"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import navLinks from "@/data/navLinks";
import { GoArrowRight } from "react-icons/go";
export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary Navigation"
      >
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo-512x512.png"
            alt="Jabed Ali Mollah Portfolio Logo"
            width={45}
            height={45}
            priority
            // className="h-auto w-32 md:w-40 lg:w-44"
          />

          {/* <span className="hidden text-xl font-bold text-[#8855FF] sm:block"> */}
          <div className={`flex flex-col gap-0`}>
            <span className={`font-bold p-0 h-5 `}>Jabed Ali</span>
            <span className={`text-sm p-0`}>Web Developer</span>
          </div>
        </Link>

        {/* Desktop */}

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`font-medium transition hover:text-[#8855FF]
                ${pathname === item.href ? "text-[#8855FF]" : "text-gray-700"}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}

        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-x-2 rounded-lg bg-primarys button px-6 py-2 text-white transition hover:opacity-90 "
        >
          Hire Me <GoArrowRight />
        </Link>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#8855FF] lg:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white px-6 py-5">
          <ul className="space-y-5">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block text-lg font-medium ${
                    pathname === item.href ? "text-[#8855FF]" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 block rounded-xl bg-[#8855FF] py-3 text-center font-medium text-white"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
