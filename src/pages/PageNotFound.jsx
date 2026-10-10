import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { PageNotFoundSVG } from "../components/SVGS";
import { Link, useLocation } from "react-router-dom";

function PageNotFound() {
  const location = useLocation();
  const investorsImg = [
    "./metamask.webp",
    "./walletconnect.webp",
    "./pancake.webp",
    "./lamborghini.webp",
    "./binance.webp",
  ];

  useEffect(() => {
    let tween;
    let cancelled = false;

    async function run() {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      tween = gsap
        .timeline({ repeat: -1, delay: 1 })
        .to("#eye", { x: 13, y: 2, duration: 1.3 })
        .to("#eye", { x: -13, y: 0, duration: 1.3 })
        .to("#eye", { x: 6, y: -3, delay: 0.4, duration: 1.3 })
        .to("#eye", { x: -3, y: -3, duration: 0.6 })
        .to("#eye", { x: 2, y: 5, duration: 0.8 })
        .to("#eye", { x: 0, y: 5, duration: 0.5 })
        .to("#eye", { x: 0, y: 0, duration: 0.7 });
    }

    run();
    return () => {
      cancelled = true;
      if (tween) tween.kill();
    };
  }, []);

  return (
    <div className="baseContainer">
      <Nav />
      <div className="notfoundContainer ">
        <div className="innernotfound">
          <div className="leftBox">
            <div className="notfoundContent">
              <h6>Error 404</h6>
              <h3>Page Not Found</h3>
              <p>
                The page you are looking for might have been removed or is
                temporarily unavailable.
              </p>
              <button type="button">
                <Link
                  to="/"
                  className={`Btnlink ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Back to home
                </Link>
              </button>
            </div>
          </div>
          <div className="rightBox">
            <PageNotFoundSVG />
          </div>
        </div>
      </div>
      <footer className="logoCardsContainer">
        {investorsImg.map((investor) => (
          <img
            key={investor}
            src={investor}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </footer>
    </div>
  );
}

export default PageNotFound;
