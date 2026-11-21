"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please write directly to naqiabidi19@gmail.com");
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#EBEBEA] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            07 / Connect
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Info */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight mb-4">
              Let&apos;s build something meaningful.
            </h2>
            <p className="text-[#737373] text-base leading-relaxed mb-8">
              Have an interesting project, opportunity, or idea? I&apos;d love to hear about it. Send a message using the form or reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 p-3.5 rounded-xl border border-[#EBEBEA] hover:border-[#171717] bg-white transition-all shadow-subtle"
              >
                <div className="p-2 rounded-lg bg-[#FAFAF8] group-hover:bg-[#EFF4FF] text-[#171717] group-hover:text-[#315EFB] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#737373]">Email</div>
                  <div className="text-sm font-medium text-[#171717] group-hover:text-[#315EFB] transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] ml-auto group-hover:text-[#171717] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl border border-[#EBEBEA] hover:border-[#171717] bg-white transition-all shadow-subtle"
              >
                <div className="p-2 rounded-lg bg-[#FAFAF8] group-hover:bg-[#EFF4FF] text-[#171717] group-hover:text-[#315EFB] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#737373]">LinkedIn</div>
                  <div className="text-sm font-medium text-[#171717] group-hover:text-[#315EFB] transition-colors">
                    linkedin.com/in/naqi-abidi19
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] ml-auto group-hover:text-[#171717] transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl border border-[#EBEBEA] hover:border-[#171717] bg-white transition-all shadow-subtle"
              >
                <div className="p-2 rounded-lg bg-[#FAFAF8] group-hover:bg-[#EFF4FF] text-[#171717] group-hover:text-[#315EFB] transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#737373]">GitHub</div>
                  <div className="text-sm font-medium text-[#171717] group-hover:text-[#315EFB] transition-colors">
                    github.com/naqiabidi
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] ml-auto group-hover:text-[#171717] transition-colors" />
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#EBEBEA] bg-white shadow-subtle">
                <div className="p-2 rounded-lg bg-[#FAFAF8] text-[#171717]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#737373]">Location</div>
                  <div className="text-sm font-medium text-[#171717]">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#EBEBEA] rounded-2xl p-6 sm:p-8 md:p-10 shadow-subtle">
            <h3 className="text-lg font-semibold text-[#171717] mb-6">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-semibold text-emerald-900">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your message and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-3 text-xs font-mono font-medium text-emerald-800 underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#737373] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-[#E0E0DC] bg-[#FAFAF8] focus:bg-white focus:border-[#315EFB] focus:ring-1 focus:ring-[#315EFB] outline-none transition-all placeholder:text-[#A3A3A3]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#737373] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-[#E0E0DC] bg-[#FAFAF8] focus:bg-white focus:border-[#315EFB] focus:ring-1 focus:ring-[#315EFB] outline-none transition-all placeholder:text-[#A3A3A3]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#737373] mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-[#E0E0DC] bg-[#FAFAF8] focus:bg-white focus:border-[#315EFB] focus:ring-1 focus:ring-[#315EFB] outline-none transition-all placeholder:text-[#A3A3A3]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#737373] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, timeline, or open role..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-[#E0E0DC] bg-[#FAFAF8] focus:bg-white focus:border-[#315EFB] focus:ring-1 focus:ring-[#315EFB] outline-none transition-all placeholder:text-[#A3A3A3] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#171717] hover:bg-[#315EFB] text-white text-xs sm:text-sm font-medium transition-all shadow-sm disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
