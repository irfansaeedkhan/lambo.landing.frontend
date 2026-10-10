import React from "react";
import "../styles/HeroMain.css";

const HeroMain = () => {
  return (
    <div className="hero-main-container MaxWidth">
      <div className="left">
        <p className="primary-color hero-eyebrow">Bring your Imagination...</p>
        <h1>
          With hands on the steering wheel. Now you can really drive that Lambo!
        </h1>
        <p>
          NFT Lambo Club is the only DAO that allows through NFTs to have very
          intense experiences driving Lamborghinis...even if you couldn't afford
          it before!
        </p>
      </div>
      <div className="right">
        <img
          className="hero-img"
          src="./hero-img.webp"
          srcSet="./hero-img-sm.webp 480w, ./hero-img.webp 666w"
          sizes="(max-width: 1100px) 80vw, 55vw"
          alt="Lamborghini NFT club hero"
          width={666}
          height={583}
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <img
        className="blur-1"
        src="./blur.webp"
        alt=""
        width={800}
        height={687}
        decoding="async"
        fetchPriority="low"
        loading="lazy"
        aria-hidden="true"
      />
      <img
        className="blur-2"
        src="./blur2.webp"
        alt=""
        width={669}
        height={884}
        decoding="async"
        fetchPriority="low"
        loading="lazy"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroMain;
