import dynamic from "next/dynamic";

// Lazy load all components
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
