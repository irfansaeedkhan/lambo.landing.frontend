import React from "react";
import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer-container">
      <img
        src="./footerP1.webp"
        className="pattern1"
        alt=""
        aria-hidden="true"
        width={664}
        height={405}
        loading="lazy"
        decoding="async"
      />
      <div className="footerInner">
        <div className="footer-data MaxWidth">
          <div className="footer-logo">
            <img
              src="./footer-logo.webp"
              alt="NFT Lambo Club"
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
            />
            <span className="footer-brand">NFT LAMBO CLUB</span>
          </div>
          <ul>
            <li>
              <Link
                to="/"
                className={`link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/howtoearn"
                className={`link ${
                  location.pathname === "/howtoearn" ? "active" : ""
                }`}
              >
                How To Earn
              </Link>
            </li>
          </ul>
          <Link to="/maintainance" className="btn base-color">
            Joins us NOW!
          </Link>
        </div>
        <div className="footer-terms">
          <p>
            NFT LAMBO CLUB© 2026 • All rights reserved | Before using NFT LAMBO
            CLUB platform it is mandatory to read{" "}
            <Link to="/terms" className="terms-link">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
