import React from "react";
import { Link } from "react-router-dom";
import "../styles/LamboClub.css";

const LamboClub = () => {
  return (
    <div className="lambo-club-container">
      <div className="lambo-club MaxWidth">
        <div className="left">
          <h2 className="secondary-heading">What is NFT Lambo Club?</h2>
          <p>
            If you don't love Lamborghinis this Club is NOT for you. You
            wouldn't understand the excitement we feel every time we start those
            engines and why we built the most exclusive Club in the world around
            that excitement!{" "}
          </p>
          <p>
            NFT Lambo Club is more than just a FAMILY of strangers from all over
            the world who are in love with the same Luxury Car Brand.{" "}
          </p>
          <p>
            NFT Lambo Club is above all a decentralized tool that will allow you
            to start driving REAL Lamborghinis at our rallies or to WIN a
            Lamborghini for FREE through our Lambo Contest.
          </p>
        </div>
        <div className="right">
          <h2 className="primary-color">
            "Hey buddy… aren't you still in the world's most exclusive{" "}
            <span className="white-color italic">
              Lamborghini Lovers' Club?
            </span>{" "}
            What are you waiting for?"
          </h2>
          <Link to="/maintainance" className="btn">
            Join us NOW!
          </Link>
        </div>
      </div>
      <img
        className="blur-1"
        src="./club-blur1.webp"
        alt=""
        aria-hidden="true"
        width={700}
        height={1295}
        loading="lazy"
        decoding="async"
      />
      <img
        className="blur-2"
        src="./club-blur2.webp"
        alt=""
        aria-hidden="true"
        width={700}
        height={742}
        loading="lazy"
        decoding="async"
      />
      <img
        className="club-tri"
        src="./club-tri.webp"
        alt=""
        aria-hidden="true"
        width={700}
        height={404}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default LamboClub;
