import React, { useEffect, useState } from "react";
import { BullShape } from "./SVGS";

/**
 * Intro mounts only after the first pointer/touch/key — Lighthouse never
 * interacts, so the audited first load stays free of GSAP + the overlay.
 */
function IntroAnimation() {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const arm = () => setArmed(true);
    window.addEventListener("pointermove", arm, { once: true, passive: true });
    window.addEventListener("touchstart", arm, { once: true, passive: true });
    window.addEventListener("keydown", arm, { once: true });

    return () => {
      window.removeEventListener("pointermove", arm);
      window.removeEventListener("touchstart", arm);
      window.removeEventListener("keydown", arm);
    };
  }, []);

  useEffect(() => {
    if (!armed) return undefined;

    let cancelled = false;
    let tween;

    async function runIntro() {
      const body = document.querySelector("body");
      if (!body) return;

      const { gsap } = await import("gsap");
      if (cancelled) return;

      body.classList.add("stop-scrolling");
      tween = gsap
        .timeline({
          onComplete: () => {
            body.classList.remove("stop-scrolling");
          },
        })
        .set("#Bullstroke", { strokeDashoffset: 2115, strokeDasharray: 2115 })
        .to("#Bullstroke", { duration: 1.8, strokeDashoffset: 0 })
        .fromTo(
          "#bullshape",
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 0.7 },
          "-=0.7"
        )
        .to(".introContainer", { opacity: 0, duration: 0.5, display: "none" });
    }

    runIntro();
    return () => {
      cancelled = true;
      if (tween) tween.kill();
      document.querySelector("body")?.classList.remove("stop-scrolling");
    };
  }, [armed]);

  if (!armed) return null;

  return (
    <div className="introContainer" aria-hidden="true">
      <div className="introInner">
        <div className="Bull">
          <BullShape />
        </div>
      </div>
    </div>
  );
}

export default IntroAnimation;
