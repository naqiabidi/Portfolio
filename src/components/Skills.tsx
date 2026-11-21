import { skillCategories } from "@/data/portfolio";
import { Terminal, Layout, Server, Database, CheckSquare, Wrench } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-[#315EFB]" />;
      case 1:
        return <Layout className="w-4 h-4 text-[#315EFB]" />;
      case 2:
        return <Server className="w-4 h-4 text-[#315EFB]" />;
      case 3:
        return <Database className="w-4 h-4 text-[#315EFB]" />;
      case 4:
        return <CheckSquare className="w-4 h-4 text-[#315EFB]" />;
      case 5:
        return <Wrench className="w-4 h-4 text-[#315EFB]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#315EFB]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#EBEBEA] relative bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            04 / Skills
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
              Technologies I work with.
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-md">
              A curated toolkit honed through production engineering, enterprise testing, and academic rigor.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white border border-[#EBEBEA] hover:border-[#D4D4D4] rounded-2xl p-6 transition-all duration-200 shadow-subtle hover:shadow-card group"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#F0F0EE]">
                <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA] group-hover:border-[#D6E4FF] group-hover:bg-[#EFF4FF] transition-colors">
                  {getCategoryIcon(index)}
                </div>
                <h3 className="text-sm font-semibold text-[#171717] tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#FAFAF8] hover:bg-[#F2F2F0] text-[#171717] border border-[#EBEBEA] hover:border-[#D4D4D4] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
