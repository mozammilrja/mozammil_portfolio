import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mozammil Raja — Full-Stack Developer | React, Next.js, Node.js",
  description:
    "4+ years building high-performance web apps with React, Next.js, Node.js & MongoDB. View my projects and hire me for your next role.",
  metadataBase: new URL("https://mozammil-portfolio.vercel.app/"),
  alternates: {
    canonical: "https://mozammil-portfolio.vercel.app/",
  },
  keywords: ["Full-Stack Developer", "Frontend Developer", "React Developer", "Next.js Developer", "Node.js Developer", "MongoDB", "TypeScript", "Delhi NCR", "Remote Developer"],
  authors: [{ name: "Mozammil Raja", url: "https://mozammil-portfolio.vercel.app" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.avif",
  },
  openGraph: {
    title: "Mozammil Raja — Full-Stack Developer | React, Next.js, Node.js",
    description:
      "4+ years building web apps with React, Next.js, Node.js & MongoDB. View projects and hire me.",
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
    title: "Mozammil Raja — Full-Stack Developer | React, Next.js, Node.js",
    description:
      "4+ years building web apps with React, Next.js, Node.js & MongoDB. View projects and hire me.",
    images: ["/profile.avif"],
    creator: "@MozammilRaja",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/mozammil-raja/",
      "https://github.com/mozammilrja",
    ],
    image: "https://mozammil-portfolio.vercel.app/profile.avif",
    knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "JavaScript"],
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
          {/* Skip link for keyboard accessibility */}
          <a href="#hero" className="skip-link">
            Skip to main content
          </a>
          <main role="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
