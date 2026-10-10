import React from "react";
import "../styles/Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <div className="tokenomics MaxWidth">
        <h2 className="secondary-heading-white">Tokenomics</h2>
        <p className="section-para">
          NFT Lambo Club is the only DAO that allows through NFTs to have very
          intense experiences driving Lamborghinis... even if you couldn't
          afford it before!
        </p>

        <img className="pattern-1" src="./token-pattern1.webp" alt=""  loading="lazy" decoding="async" />
      </div>
      <div className="tokenomics-stats MaxWidth">
        {/* <div className="stats-bar">
                    <div className="red stat"></div>
                    <div className="pink stat"></div>
                    <div className="purple stat"></div>
                    <div className="blue stat"></div>
                    <div className="lightblue stat"></div>
                </div> */}
        <img className="token-img" src="token-img.webp" alt=""  loading="lazy" decoding="async" />
        <div className="stats-data">
          <div className="statbox redBorder">
            <h3>40%</h3>
            <p>Platform Development</p>
            <div className="linebar"></div>
          </div>
          <div className="statbox pinkBorder">
            <h3>20%</h3>
            <p>Legal expenses</p>
            <div className="linebar"></div>
          </div>
          <div className="statbox purpleBorder">
            <h3>20%</h3>
            <p>Operating costs</p>
            <div className="linebar"></div>
          </div>
          <div className="statbox blueBorder">
            <h3>20%</h3>
            <p>Marketing and advertising</p>
            <div className="linebar"></div>
          </div>
        </div>
      </div>
      <div className="tokenomics-data-container">
        <div className="tokenomics-data MaxWidth">
          <div className="tokenomics-data-item">
            <h4>
              <span className="blue-box">40% Platform Development</span>
            </h4>
            <p>
              Building a unique platform requires great effort, which is exactly
              why we decided to allocate almost half of the tokenomics for
              platform construction.
            </p>
            <img
              className="token-item-side-img"
              src="./token-item-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item">
            <h4>
              <span className="blue-box">20% Legal Expenses</span>
            </h4>
            <p>
              The legal aspect is perhaps the most important part of the
              project, and creating bridge to NFTs and related services requires
              great effort in short, at the Lambo Club we have thought of the
              legal aspect is perhaps the most important part of the project,
              and creating a bridge to NFTs and related services requires great
              effort; in short, at the Lambo Club we have thought of everything.
            </p>
            <img
              className="token-item-side-img"
              src="./token-item-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item ">
            <h4>
              <span className="blue-box">20% Operating Costs</span>
            </h4>
            <p>
              Operating costs are understood to be all the costs of running the
              car fleet; allocating 20 percent allows the Lambo Club and all its
              users to enjoy many more benefits than expected.
            </p>
            <img
              className="token-item-side-img"
              src="./token-item-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
          <div className="tokenomics-data-item ">
            <h4>
              <span className="blue-box">20% Marketing and advertising</span>
            </h4>
            <p>
              Through this fee instead all events for "affiliates" will be
              promoted, from social campaigns to dedicated events for the most
              active fans.
            </p>
            <img
              className="token-item-side-img"
              src="./token-item-side.webp"
              alt=""
             loading="lazy" decoding="async" />
          </div>
        </div>
        <img className="tk-pattern1" src="./tokenomics-data.webp" alt=""  loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

export default Tokenomics;
