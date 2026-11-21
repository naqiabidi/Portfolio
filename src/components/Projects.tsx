"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink, CheckCircle2, ArrowUpRight, BarChart3, Database, ShieldCheck, Activity } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#EBEBEA] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            03 / Portfolio
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight">
              Selected work.
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-md">
              Production-ready web applications, distributed APIs, and intelligent data systems built for scale and performance.
            </p>
          </div>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border border-[#EBEBEA] rounded-2xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left/Main Column: Project Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F3] text-[#737373]">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-[#737373]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-[#315EFB] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[#737373] text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Measurable Achievements */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold mb-2">
                        Key Engineering Milestones:
                      </div>
                      {project.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#315EFB] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#171717]/80 leading-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Bar */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#FAFAF8] border border-[#EBEBEA] mb-6">
                        {project.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div className="text-base sm:text-lg font-bold font-mono text-[#171717]">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-[#737373] font-mono truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer of Project: Tech & Links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono bg-[#FAFAF8] text-[#525252] border border-[#E5E5E5] px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-[#F0F0EE]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-[#D4D4D4] hover:border-[#171717] text-[#171717] bg-white hover:bg-[#171717] hover:text-white transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-[#171717] hover:bg-[#315EFB] text-white transition-all shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Custom High-Fidelity UI Preview Representation */}
                <div className="lg:col-span-5 bg-[#F9F9F8] border-t lg:border-t-0 lg:border-l border-[#EBEBEA] p-6 sm:p-8 flex flex-col justify-center">
                  <div className="text-[11px] font-mono text-[#737373] mb-3 flex items-center justify-between">
                    <span>INTERFACE PREVIEW</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Flow CRM UI Preview */}
                  {project.id === "flow-crm" && (
                    <div className="bg-white rounded-xl border border-[#E0E0DC] p-4 shadow-sm space-y-4">
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 text-xs font-mono text-[#737373]">flow-crm.app/pipeline</span>
                        </div>
                        <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                          AI Active
                        </span>
                      </div>

                      {/* Mockup Dashboard Body */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                          <div className="text-[10px] text-[#737373] font-mono">Total Pipeline</div>
                          <div className="text-sm font-bold font-mono text-[#171717] mt-0.5">$148,250</div>
                          <div className="text-[9px] text-emerald-600 mt-1 font-mono">↑ 18% vs prev</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                          <div className="text-[10px] text-[#737373] font-mono">Deals Closed</div>
                          <div className="text-sm font-bold font-mono text-[#171717] mt-0.5">34 Records</div>
                          <div className="text-[9px] text-blue-600 mt-1 font-mono">15+ API sync</div>
                        </div>
                      </div>

                      {/* AI Summary Simulation Pill */}
                      <div className="p-3 rounded-lg bg-[#EFF4FF] border border-[#D6E4FF] text-xs">
                        <div className="flex items-center gap-1.5 text-[#315EFB] font-semibold text-[11px] mb-1">
                          <span>✨ AI Auto-Summary</span>
                          <span className="text-[9px] bg-white text-[#315EFB] px-1.5 py-0.2 rounded font-mono">30% faster</span>
                        </div>
                        <p className="text-[11px] text-[#171717]/80 leading-relaxed font-sans">
                          &quot;Client accepted proposal for Q4 migration. Follow-up meeting scheduled with enterprise lead.&quot;
                        </p>
                      </div>

                      {/* Records table preview */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] p-2 rounded bg-[#FAFAF8] border border-[#F0F0EE]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="font-medium text-[#171717]">Apex Innovations</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Closed Won</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] p-2 rounded bg-[#FAFAF8] border border-[#F0F0EE]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="font-medium text-[#171717]">Horizon Dynamics</span>
                          </div>
                          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Negotiation</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RentHere UI Preview */}
                  {project.id === "renthere" && (
                    <div className="bg-white rounded-xl border border-[#E0E0DC] p-4 shadow-sm space-y-4">
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 text-xs font-mono text-[#737373]">renthere.co/marketplace</span>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          Cloudinary CDN
                        </span>
                      </div>

                      {/* Marketplace card preview */}
                      <div className="p-3 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#171717]">Professional Camera Rig</span>
                          <span className="text-xs font-mono font-semibold text-emerald-700">$45 / day</span>
                        </div>
                        <p className="text-[11px] text-[#737373]">Sony FX3 Cinema Package with 24-70mm GM II lens</p>
                        <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-[#737373]">
                          <span className="bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">Instant Booking</span>
                          <span className="bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">Verified Vendor</span>
                        </div>
                      </div>

                      {/* Compression stats simulation */}
                      <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-emerald-900 font-medium text-[11px]">Media Compression</span>
                          <span className="font-mono font-bold text-emerald-700 text-xs">-45% Payload</span>
                        </div>
                        <div className="w-full bg-emerald-200/70 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-600 h-full w-[55%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-emerald-800/80 font-mono mt-1">
                          <span>Raw: 4.8MB</span>
                          <span>Optimized: 2.6MB</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Smart Pollution UI Preview */}
                  {project.id === "smart-pollution" && (
                    <div className="bg-white rounded-xl border border-[#E0E0DC] p-4 shadow-sm space-y-4">
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 text-xs font-mono text-[#737373]">iot-telemetry/live</span>
                        </div>
                        <span className="text-[10px] font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                          <Activity className="w-3 h-3 animate-spin" /> &lt;500ms
                        </span>
                      </div>

                      {/* Sensor Gauges */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                          <div className="text-[10px] text-[#737373] font-mono">PM2.5</div>
                          <div className="text-sm font-bold font-mono text-emerald-600 mt-0.5">34</div>
                          <div className="text-[9px] text-[#737373] font-mono">µg/m³ (Good)</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                          <div className="text-[10px] text-[#737373] font-mono">CO2</div>
                          <div className="text-sm font-bold font-mono text-blue-600 mt-0.5">412</div>
                          <div className="text-[9px] text-[#737373] font-mono">ppm (Normal)</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                          <div className="text-[10px] text-[#737373] font-mono">Humidity</div>
                          <div className="text-sm font-bold font-mono text-indigo-600 mt-0.5">58%</div>
                          <div className="text-[9px] text-[#737373] font-mono">Stable</div>
                        </div>
                      </div>

                      {/* Simulated Bar Chart */}
                      <div className="p-3 rounded-lg bg-[#FAFAF8] border border-[#EBEBEA]">
                        <div className="text-[10px] font-mono text-[#737373] mb-2 flex justify-between">
                          <span>REAL-TIME SENSOR STREAM (ESP32)</span>
                          <span className="text-emerald-600">CONNECTED</span>
                        </div>
                        <div className="flex items-end justify-between h-14 gap-1.5 pt-2">
                          {[38, 42, 35, 50, 48, 62, 55, 40, 34, 45, 38, 34].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${val}%` }}
                                className={`w-full rounded-t-sm ${
                                  val > 55 ? "bg-amber-400" : "bg-[#315EFB]"
                                } transition-all duration-300`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
