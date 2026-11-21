"use client";

import Link from "next/link";
import { personalInfo, navItems } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EBEBEA] bg-[#FAFAF8] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#EBEBEA]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#315EFB]" />
              <span className="text-sm font-bold font-mono uppercase tracking-widest text-[#171717]">
                {personalInfo.shortName}
              </span>
            </div>
            <p className="text-xs text-[#737373] mt-1 font-mono">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#737373] hover:text-[#171717] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Socials & Back-to-top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-[#E0E0DC] hover:border-[#171717] bg-white flex items-center justify-center text-[#737373] hover:text-[#171717] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-[#E0E0DC] hover:border-[#315EFB] bg-white flex items-center justify-center text-[#737373] hover:text-[#315EFB] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-full border border-[#E0E0DC] hover:border-[#171717] bg-white flex items-center justify-center text-[#737373] hover:text-[#171717] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-[#171717] hover:bg-[#315EFB] text-white flex items-center justify-center transition-colors shadow-sm ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[11px] font-mono text-[#737373] gap-2">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Designed with precision &amp; minimalist principles.
          </div>
        </div>
      </div>
    </footer>
  );
}
