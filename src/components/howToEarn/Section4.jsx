import React from "react";

const Section4 = () => {
  return (
    <div className="Section4Container MaxWidth">
      <div className="left">
        <h2>
          JOIN the Lambo Contest and <span>WIN a LAMBORGHINI! </span>
        </h2>
        <div className="requirementbox">
          <p>What are the requirements to participate in the Contest?</p>
        </div>
        <p>
          <span>ONLY REQUIREMENT:</span> You must personally purchase at least 1
          NFT Lambo Club to enter the Contest and activate multi-level earnings.
        </p>
      </div>
      <div className="right">
        <img className="hero-img" src="./section4img.webp" alt=""  loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

export default Section4;
