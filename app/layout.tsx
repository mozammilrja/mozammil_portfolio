import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// app/layout.tsx
export const metadata: Metadata = {
  title: "Mozammil Raja | Frontend Developer",
  description: "Portfolio of Mozammil Raja – React, Next.js, TypeScript expert",
  metadataBase: new URL("https://mozammil-portfolio.vercel.app/"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mozammil Raja | Frontend Developer",
    description: "Building scalable web apps with React, Next.js & Web3",
    url: "https://mozammil-portfolio.vercel.app/",
    siteName: "Mozammil Raja Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Mozammil Raja Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozammil Raja | Frontend Developer",
    description: "Frontend portfolio built with Next.js and TypeScript",
    images: ["/profile.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}