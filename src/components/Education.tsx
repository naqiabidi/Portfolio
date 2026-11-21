import { educationData } from "@/data/portfolio";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#EBEBEA] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            05 / Academics
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
              Education.
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-md">
              Strong computational foundation in core computer science principles and software engineering disciplines.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white border border-[#EBEBEA] rounded-2xl p-6 sm:p-8 md:p-10 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-[#EFF4FF] border border-[#D6E4FF] text-[#315EFB] mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] tracking-tight">
                {educationData.institution}
              </h3>
              <p className="text-sm font-medium text-[#315EFB] mt-1">
                {educationData.degree} — {educationData.field}
              </p>

              <div className="space-y-1.5 text-xs text-[#737373] font-mono mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#315EFB]" />
                <span>Relevant Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationData.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EBEBEA] text-xs font-mono text-[#171717] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315EFB]" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
