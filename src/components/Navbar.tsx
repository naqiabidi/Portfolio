"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowDownToLine, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#EBEBEA] shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="#home"
          className="group flex items-center gap-2 text-sm md:text-base font-semibold tracking-wider text-[#171717] hover:text-[#315EFB] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#315EFB] transition-transform duration-300 group-hover:scale-125" />
          <span className="uppercase tracking-widest font-mono text-xs md:text-sm font-bold">
            {personalInfo.shortName}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#171717] font-semibold bg-[#EBEBEA]/60"
                    : "text-[#737373] hover:text-[#171717] hover:bg-black/[0.03]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download="Naqi_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-[#D4D4D4] hover:border-[#171717] text-[#171717] bg-white/70 hover:bg-[#171717] hover:text-white transition-all duration-200 shadow-sm"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-lg text-[#171717] hover:bg-[#EBEBEA] lg:hidden transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EBEBEA] bg-[#FAFAF8]/95 backdrop-blur-xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-[#EBEBEA] text-[#171717] font-semibold"
                      : "text-[#737373] hover:text-[#171717] hover:bg-[#F2F2F0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#EBEBEA] flex flex-col gap-2">
              <a
                href={personalInfo.resumePath}
                download="Naqi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 text-xs font-medium py-2.5 px-4 rounded-full bg-[#171717] text-white hover:bg-black transition-colors"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-[#737373] hover:text-[#171717] py-2"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
