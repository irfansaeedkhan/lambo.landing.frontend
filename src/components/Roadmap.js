import React from "react";
import "../styles/Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap-container ">
      <div className="roadmap MaxWidth">
        <h2 className="secondary-heading-white">Our Roadmap</h2>
        <p className="section-para">
          We take our commitments very seriously. We firmly believe in the
          Project and wish to truly create the world's most exclusive club of
          Lamborghini lovers. Here are all the steps we will follow....
        </p>
        <div className="roadmap-path">
          <div className="tokenomics-data-item">
            <h3>
              <span className="blue-box primary-color">2022-T3</span>
            </h3>
            <p>
              In the third quarter of 2022, the foundation of the
              project was perfectly established. We built the business model,
              created the Lambo Token on the BSC, prepared the collection of NFT
              Lambo Club, did the Audit to ensure the security of the Token,
              prepared the marketing and communication strategy.
            </p>
            <img
              className="token-item-side-img"
              src="./roadmap-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item roadmap-right">
            <h3>
              <span className="blue-box primary-color">2022-T4</span>
            </h3>
            <p>
              In the fourth quarter of 2022, the team will focus on
              releasing the NFT Marketplace, starting the presale of NFTs,
              listing the Lambo Token on Pancakeswap creating the Liquidity
              Pool, releasing the Staking platform, and inaugurating the
              Referral Program.
            </p>
            <img
              className="token-item-side-img"
              src="./roadmap-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item roadmap-left">
            <h3>
              <span className="blue-box primary-color">2023-Q1</span>
            </h3>
            <p>
              In the first quarter of 2023, the team will focus on
              marketing and communication, building the base of Influencers and
              VIPs who will join the Community creating hype and drawing the
              attention of the general public to our project.
            </p>
            <img
              className="token-item-side-img"
              src="./roadmap-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item roadmap-right">
            <h3>
              <span className="blue-box primary-color">2023-Q2</span>
            </h3>
            <p>
              In the second quarter of 2023, we will make public the
              register of our affiliations and all partner dealers who will join
              our circuit by offering their rental services on the Pay for Lambo
              app.
            </p>
            <img
              className="token-item-side-img"
              src="./roadmap-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item roadmap-left">
            <h3>
              <span className="blue-box primary-color">2023-Q3</span>
            </h3>
            <p>
              In the third quarter of 2023, the Team will release the
              Pay for Lambo app, through which users will be able to take
              advantage of free driving days for each NFT owned, rent additional
              driving days at 40 percent discount, purchase Rally Tickets, and
              reserve limited edition hot gadgets.
            </p>
            <img
              className="token-item-side-img"
              src="./roadmap-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="tokenomics-data-item roadmap-right">
          <h3>
            <span className="blue-box primary-color">2024 - 2026</span>
          </h3>
          <p>
            Before the end of 2023 the new Roadmap will be released
            with the goals we will achieve by 2026! We anticipate that 2024 will
            be the hottest phase of the project because the NFT Lambo Club
            family rallies will also begin!
          </p>
          <img
            className="token-item-side-img"
            src="./roadmap-side.webp"
            alt=""
           loading="lazy" decoding="async" />
        </div>
      </div>
      <img className="roadmap-pattern1" src="./roadmap-pattern1.webp" alt=""  loading="lazy" decoding="async" />
      <img className="roadmap-pattern2" src="./roadmap-pattern2.webp" alt=""  loading="lazy" decoding="async" />
    </div>
  );
};

export default Roadmap;
