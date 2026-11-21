import { certifications } from "@/data/portfolio";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-[#EBEBEA] bg-[#FAFAF8] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            06 / Credentials
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
            Certifications.
          </h2>
          <p className="text-[#737373] text-sm mt-2 max-w-md">
            Verified professional credentials and specialized technical programs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-[#EBEBEA] hover:border-[#D4D4D4] rounded-xl p-5 transition-all shadow-subtle hover:shadow-card group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA] group-hover:border-[#D6E4FF] group-hover:bg-[#EFF4FF] flex items-center justify-center text-[#737373] group-hover:text-[#315EFB] transition-colors mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#171717] leading-snug group-hover:text-[#315EFB] transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span className="font-medium text-[#171717]">{cert.issuer}</span>
                {cert.year && <span>{cert.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
