import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { CheckCircle2, Code2, Cpu, Database, Layers, Sparkles } from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    "Full-Stack Development": <Layers className="w-4 h-4 text-[#315EFB]" />,
    "Software Testing & Automation": <CheckCircle2 className="w-4 h-4 text-[#315EFB]" />,
    "Applied AI & Generative AI": <Sparkles className="w-4 h-4 text-[#315EFB]" />,
    "Backend Engineering": <Database className="w-4 h-4 text-[#315EFB]" />,
    "Problem Solving": <Cpu className="w-4 h-4 text-[#315EFB]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#EBEBEA] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            01 / Background
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-12">
          A little about me.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6 text-[#171717]/80 text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m a <span className="font-semibold text-[#171717]">Software Engineer</span> with hands-on experience in full-stack development, software testing, automation, and applied AI/ML. I enjoy transforming ideas into functional, scalable applications by combining thoughtful engineering with clean user experiences.
            </p>
            <p className="text-[#737373] text-base leading-relaxed">
              My experience includes developing production-oriented web applications, building REST APIs, implementing authentication systems, automating testing workflows, and integrating AI-powered features.
            </p>
            <p className="text-[#737373] text-base leading-relaxed">
              Whether optimizing database queries, orchestrating end-to-end test suites with Playwright, or fine-tuning machine learning models, I approach every challenge with attention to detail and an obsession for clean, maintainable architecture.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#EBEBEA]">
              <div>
                <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#171717]">98%</div>
                <div className="text-xs text-[#737373] mt-1">Perf. Optimization</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#171717]">100+</div>
                <div className="text-xs text-[#737373] mt-1">APIs Validated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold font-mono text-[#315EFB]">91%</div>
                <div className="text-xs text-[#737373] mt-1">AI Pipeline Acc.</div>
              </div>
            </div>
          </div>

          {/* Core Focus Areas Column */}
          <div className="lg:col-span-5 bg-white border border-[#EBEBEA] rounded-2xl p-6 sm:p-8 shadow-subtle">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737373] mb-6 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#171717]" />
              Core Competencies
            </h3>

            <div className="space-y-4">
              {personalInfo.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="group p-3 rounded-xl border border-transparent hover:border-[#EBEBEA] hover:bg-[#FAFAF8] transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    {iconMap[area.title] || <Sparkles className="w-4 h-4 text-[#315EFB]" />}
                    <h4 className="text-sm font-semibold text-[#171717]">{area.title}</h4>
                  </div>
                  <p className="text-xs text-[#737373] leading-normal pl-6.5">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
