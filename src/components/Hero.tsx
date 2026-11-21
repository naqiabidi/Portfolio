import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowDownToLine, ArrowDown, MapPin, Briefcase, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 flex flex-col justify-center min-h-[90vh]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Top Status & Intro Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest text-[#737373] bg-[#EBEBEA]/70 border border-[#E0E0DC]">
              Hello, I&apos;m Naqi Abidi
            </span>

            {personalInfo.availableForHire && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {personalInfo.statusText}
              </span>
            )}
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-[#171717] tracking-tightest leading-[1.08] mb-6">
            Building Digital Products with{" "}
            <span className="text-[#315EFB] font-medium">Code</span>,{" "}
            <span className="text-[#171717]">Creativity</span> &amp;{" "}
            <span className="italic font-normal">Purpose.</span>
          </h1>

          {/* Supporting Bio Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#737373] leading-relaxed font-normal mb-8 max-w-2xl">
            {personalInfo.heroDescription}
          </p>

          {/* Professional Meta Info (Role & Location) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#737373] font-mono mb-10 pb-4 border-b border-[#EBEBEA]">
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#171717]" />
              <span className="text-[#171717] font-medium">{personalInfo.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#171717]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Call to Actions & Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#315EFB] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-sm group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>

            <a
              href={personalInfo.resumePath}
              download="Naqi_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F3] text-[#171717] text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-[#D4D4D4] hover:border-[#171717] transition-all duration-200 shadow-sm"
            >
              <ArrowDownToLine className="w-4 h-4 text-[#737373]" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2 ml-auto sm:ml-2 pt-2 sm:pt-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-[#E0E0DC] hover:border-[#171717] bg-white flex items-center justify-center text-[#737373] hover:text-[#171717] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-[#E0E0DC] hover:border-[#315EFB] bg-white flex items-center justify-center text-[#737373] hover:text-[#315EFB] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
