import { experiences } from "@/data/portfolio";
import { Calendar, MapPin, Briefcase, CheckCircle, TrendingUp } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#EBEBEA] relative bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            02 / Career
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
              Where I&apos;ve worked.
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-md">
              Demonstrated track record of delivering measurable performance gains, robust APIs, and intelligent software systems.
            </p>
          </div>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-white border border-[#EBEBEA] hover:border-[#D4D4D4] rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-subtle hover:shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Role & Meta */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F3] text-[#737373]">
                      {exp.type}
                    </span>
                    {exp.current && (
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-[#171717] tracking-tight group-hover:text-[#315EFB] transition-colors">
                    {exp.role}
                  </h3>

                  <div className="text-sm font-medium text-[#171717] mt-1 mb-3">
                    {exp.company}
                  </div>

                  <div className="space-y-1.5 text-xs text-[#737373] font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Impact Highlight Badge */}
                  {exp.impactMetric && (
                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EFF4FF] border border-[#D6E4FF]">
                      <TrendingUp className="w-3.5 h-3.5 text-[#315EFB]" />
                      <span className="text-xs font-medium text-[#315EFB]">
                        {exp.impactMetric.label}:{" "}
                        <strong className="font-bold">{exp.impactMetric.value}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column: Achievements & Tech */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <div className="space-y-3.5 mb-6">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#315EFB] mt-2 shrink-0" />
                        <p className="text-sm text-[#171717]/85 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-[#F0F0EE] flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider mr-1">
                      Stack:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#525252] bg-[#FAFAF8] border border-[#E5E5E5] px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
