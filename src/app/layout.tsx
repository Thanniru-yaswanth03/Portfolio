import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Thanniru Yaswanth | Full Stack Software Developer",
    template: "%s | Thanniru Yaswanth",
  },
  description:
    "Official portfolio website of Thanniru Yaswanth. Full Stack Software Developer specializing in React, Next.js, Node.js, Express, MongoDB, and Python/Django web applications.",
  keywords: [
    "Thanniru Yaswanth",
    "Full Stack Software Developer",
    "Software Engineer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "Web Developer Hyderabad",
  ],
  authors: [{ name: "Thanniru Yaswanth" }],
  creator: "Thanniru Yaswanth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Thanniru-yaswanth03/Portfolio",
    title: "Thanniru Yaswanth | Full Stack Software Developer",
    description:
      "Full Stack Software Developer specializing in React, Next.js, Node.js, Express, MongoDB, and Python/Django.",
    siteName: "Thanniru Yaswanth Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanniru Yaswanth | Full Stack Software Developer",
    description:
      "Full Stack Software Developer building web applications, REST APIs, and scalable software solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#080C14] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
