import laptopHero from "../../assets/illustrations/hero-laptop-ny.png";
import ScreenSequence from "./ScreenSequence.jsx";

export default function LaptopHero({ screens }) {
  return (
    <>
      <figure className="laptop-hero" aria-label="Illustrated laptop with Tina Wulff introduction">
          <img
            className="laptop-hero__image"
            src={laptopHero}
            alt="Hand-drawn laptop illustration with Tina Wulff on the screen"
          />
  
      </figure>
            <div className="laptop-hero__screen-text">
          <ScreenSequence screens={screens} />
        </div>

    </>
  );
}
