import React, { useRef } from "react";
import "../styles/Hero.css";
import HeroMain from "./HeroMain";
import Investors from "./Investors";
import { HeaderPatern1 } from "./SVGS";

const Hero = () => {
  const headerRef = useRef(null);
  return (
    <section className="hero-container" aria-label="Hero">
      <HeroMain />
      <div className="pattern-1" aria-hidden="true">
        <HeaderPatern1 refrence={headerRef} />
      </div>
      <img
        className="pattern-2"
        src="./triPattern2.webp"
        alt=""
        aria-hidden="true"
        width={800}
        height={833}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <Investors />
    </section>
  );
};

export default Hero;
