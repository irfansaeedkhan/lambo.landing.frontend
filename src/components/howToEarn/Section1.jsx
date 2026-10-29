import React, { useEffect, useState } from "react";

const Section1 = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return undefined;
    function onKeyUp(e) {
      if (e.key === "Escape") setVideoOpen(false);
    }
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [videoOpen]);

  return (
    <div className="Section1Container">
      <div className="Section1Inner MaxWidth">
        <div className="left">
          <h2>
            Driving a Lambo is a Dream but driving it as wealthy will be your
            and our Mission!
          </h2>
          <p>
            In our Club there are many opportunities to earn income. Study this
            page carefully because in addition to taking advantage of the
            important income-generating activities, there is a crazy competition
            to take home a real <span>FREE LAMBO!</span>
          </p>
        </div>
        <div className="right">
          <div className="card">
            <img
              src="/videoImg.webp"
              className="img-btn"
              alt="How to earn video preview"
              width={640}
              height={360}
              loading="eager"
              decoding="async"
              fetchPriority="low"
            />
            <button
              id="play-video"
              type="button"
              className="video-play-button"
              aria-label="Play video"
              onClick={() => setVideoOpen(true)}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          {videoOpen && (
            <div
              id="video-overlay"
              className="video-overlay open"
              role="dialog"
              aria-label="Video player"
              onClick={() => setVideoOpen(false)}
            >
              <button
                type="button"
                className="video-overlay-close"
                aria-label="Close video"
                onClick={() => setVideoOpen(false)}
              >
                &times;
              </button>
              <video
                src="/videos/video.mp4"
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
                aria-label="How to earn video"
              />
            </div>
          )}
        </div>
      </div>
      <img
        src="./section1P1.webp"
        className="pattern1"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        src="./section1P2.webp"
        className="pattern2"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Section1;
