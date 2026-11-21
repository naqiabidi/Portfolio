import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-6">
      <div className="text-center max-w-md">
        <span className="text-xs font-mono text-[#737373] uppercase tracking-widest bg-[#EBEBEA] px-3 py-1 rounded-full">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#171717] tracking-tight mt-6 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#737373] leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Return to the homepage to explore the portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#315EFB] text-white text-xs font-medium transition-colors shadow-sm"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
