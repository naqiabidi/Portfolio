import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naqiabidi.dev"),
  title: {
    default: "S. Naqi Abbas Abidi — Software Engineer & Full-Stack Developer",
    template: "%s | Naqi Abidi",
  },
  description:
    "Portfolio of S. Naqi Abbas Abidi, Software Engineer & Full-Stack Developer based in New Delhi, India. Specializing in Next.js, TypeScript, REST APIs, Playwright test automation, and applied Generative AI.",
  keywords: [
    "Naqi Abidi",
    "S. Naqi Abbas Abidi",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Playwright",
    "Generative AI",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "S. Naqi Abbas Abidi", url: "https://github.com/naqiabidi" }],
  creator: "S. Naqi Abbas Abidi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naqiabidi.dev",
    title: "S. Naqi Abbas Abidi — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer & Full-Stack Developer passionate about building scalable web applications, intelligent systems, and seamless digital experiences.",
    siteName: "Naqi Abidi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Naqi Abbas Abidi — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer & Full-Stack Developer passionate about building scalable web applications, intelligent systems, and seamless digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#FAFAF8] text-[#171717] min-h-screen selection:bg-[#315EFB] selection:text-white`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
