import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

// Lazy load below-the-fold components
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
