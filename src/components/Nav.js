import React, { useEffect } from "react";
import "../styles/Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  useEffect(() => {
    const header = document.querySelector(".header");
    const icon = document.querySelector(".icon-container");
    const links = document.querySelectorAll(".mobile-menu .link, .mobile-menu .btn");
    if (!header || !icon) return undefined;

    const toggleMenu = () => {
      header.classList.toggle("menu-open");
      const open = header.classList.contains("menu-open");
      icon.setAttribute("aria-expanded", open ? "true" : "false");
    };

    const closeMenu = () => {
      header.classList.remove("menu-open");
      icon.setAttribute("aria-expanded", "false");
    };

    links.forEach((li) => {
      li.addEventListener("click", closeMenu);
    });
    icon.addEventListener("click", toggleMenu);

    return () => {
      links.forEach((li) => {
        li.removeEventListener("click", closeMenu);
      });
      icon.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="nav-container">
      <nav className="MaxWidth" aria-label="Primary">
        <Link to="/" className="logo">
          <img
            src="logo.webp"
            alt="NFT Lambo Club"
            width={80}
            height={61}
            decoding="async"
            fetchPriority="low"
          />
          <span className="logo-title">NFT LAMBO CLUB</span>
        </Link>
        <div className="links">
          <Link
            to="/"
            className={`link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/howtoearn"
            className={`link ${
              location.pathname === "/howtoearn" ? "active" : ""
            }`}
          >
            How To Earn
          </Link>
          <Link to="/maintainance" className="btn base-color">
            Launch App
          </Link>
        </div>
      </nav>
      <div className="Navcontainer">
        <div className="header">
          <button
            type="button"
            className="icon-container"
            aria-label="Toggle menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <div id="menuicon" aria-hidden="true">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
            </div>
          </button>
          <div className="logo-container">
            <div id="logoicon">
              <img
                className="hero-img"
                src="./logo320x320.webp"
                alt="NFT Lambo Club"
                width={38}
                height={38}
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
          <div className="mobile-menu" id="mobile-menu">
            <ul className="menu">
              <li className="menu-item">
                <Link
                  className={`link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/howtoearn"
                  className={`link ${
                    location.pathname === "/howtoearn" ? "active" : ""
                  }`}
                >
                  How To Earn
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/maintainance"
                  className="btn base-color"
                >
                  Launch App
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
