import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { MaintainancePageSVG } from "../components/SVGS";
import { Link, useLocation } from "react-router-dom";

function MaintainancePage() {
  const location = useLocation();
  const investorsImg = [
    "./metamask.webp",
    "./walletconnect.webp",
    "./pancake.webp",
    "./lamborghini.webp",
    "./binance.webp",
  ];

  useEffect(() => {
    let animations = [];
    let cancelled = false;

    async function run() {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      animations = [
        gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(
            "#star1",
            {
              y: "-=18",
              rotation: "-=5",
              ease: "Power1.easeInOut",
              duration: 6,
            },
            0
          )
          .to("#star2", { y: "+=22", rotation: "-=15", duration: 6.6 }, "<")
          .to("#star3", { y: "-=16", rotation: "-=25", duration: 7.3 }, "<")
          .to("#star4", { y: "+=30", rotation: "-=55", duration: 9.4 }, "<")
          .to("#star5", { y: "-=14", rotation: "-=25", duration: 6.3 }, "<"),
        gsap
          .timeline({ repeat: -1, yoyo: true })
          .to("#eye1", { rotate: 360, transformOrigin: "center", duration: 5 })
          .to(
            "#eye2",
            { rotate: 360, transformOrigin: "center", duration: 5 },
            "<"
          ),
        gsap
          .timeline({ repeat: -1 })
          .to("#box1 circle", { fill: "#4bd4de", stagger: 0.1 })
          .to("#box2 circle", { fill: "#4bd4de", stagger: 0.1 })
          .to("#box3 circle", { fill: "#4bd4de", stagger: 0.1 }),
      ];
    }

    run();
    return () => {
      cancelled = true;
      animations.forEach((a) => a.kill());
    };
  }, []);

  return (
    <div className="baseContainer">
      <Nav />
      <div className="notfoundContainer ">
        <div className="innernotfound">
          <div className="leftBox">
            <div className="notfoundContent">
              <h6>Maintenance</h6>
              <h3>Under Maintenance</h3>
              <p>
                The page you're looking for is currently under maintenance and
                will be back soon.
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
            <MaintainancePageSVG />
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

export default MaintainancePage;
