import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mozammil Raja | Frontend Developer | React.js | Next.js | TypeScript",
  description:
    "Portfolio of Mozammil Raja – Frontend Developer specializing in React.js, Next.js, TypeScript, Web3, and building scalable web applications.",
  metadataBase: new URL("https://mozammil-portfolio.vercel.app/"),
  alternates: {
    canonical: "https://mozammil-portfolio.vercel.app/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.avif",
  },
  openGraph: {
    title:
      "Mozammil Raja | Frontend Developer | React.js | Next.js | TypeScript",
    description:
      "Building scalable and accessible web apps with React.js, Next.js, and TypeScript.",
    url: "https://mozammil-portfolio.vercel.app/",
    siteName: "Mozammil Raja Portfolio",
    images: [
      {
        url: "/profile.avif",
        width: 1200,
        height: 630,
        alt: "Mozammil Raja - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mozammil Raja | Frontend Developer | React.js | Next.js | TypeScript",
    description:
      "Frontend portfolio built with Next.js, TypeScript, and React.js showcasing modern web development projects.",
    images: ["/profile.avif"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mozammil Raja",
    url: "https://mozammil-portfolio.vercel.app/",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://www.linkedin.com/in/mozammil-raja/",
      "https://github.com/mozammilrja",
    ],
    image: "https://mozammil-portfolio.vercel.app/profile.avif",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}>
          <main role="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
