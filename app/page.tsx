import dynamic from "next/dynamic";
import { Suspense } from "react";

// Critical above-the-fold components - SSR enabled for SEO & LCP
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Below-the-fold components - lazy loaded for performance
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl mx-4 my-8" />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl mx-4 my-8" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl mx-4 my-8" />,
});
const TechStack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl mx-4 my-8" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl mx-4 my-8" />,
});
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Semantic Header */}
      <header>
        <Header />
      </header>

      {/* Semantic Main Content */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="techstack">
          <TechStack />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Semantic Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
