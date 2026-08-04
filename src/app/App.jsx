import Hero from "../components/hero/Hero.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import Footer from "../components/layout/Footer.jsx";
import ProjectsSection from "../components/projects/ProjectsSection.jsx";
import SkillsSection from "../components/skills/SkillsSection.jsx";
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";

const cvPath = "/files/TinaWulff-CV2026.pdf";

export default function App() {
  return (
    <div className="site-shell min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <a className="site-logo" href="#top" aria-label="Tina Wulff portfolio">
          <img className="site-logo__image site-logo__image--light" src={logoDark} alt="Tina Wulff Web" />
          <img className="site-logo__image site-logo__image--dark" src={logoWhite} alt="" aria-hidden="true" />
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Stack</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href={cvPath}>CV</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
