import { heroScreenSequence } from "../../data/categories.js";
import LaptopHero from "./LaptopHero.jsx";
import MockupMarquee from "./MockupMarquee.jsx";

export default function Hero() {
  return (
    <>
    <section className="hero-section mx-auto w-full max-w-7xl px-4 pb-12 pt-30 sm:px-6 lg:px-8 grid">
      <LaptopHero screens={heroScreenSequence} />
    </section>
    <MockupMarquee />
    </>
  );
}
