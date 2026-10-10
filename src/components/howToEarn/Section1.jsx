import React, { useEffect } from "react";

const Section1 = () => {
  useEffect(() => {
    const player = document.querySelector("#play-video");
    const videoOverlay = document.querySelector("#video-overlay");
    if (!player || !videoOverlay) return undefined;

    function close_video() {
      videoOverlay.classList.remove("open");
      const iframe = videoOverlay.querySelector("iframe");
      if (iframe) iframe.remove();
    }

    function open_video(e) {
      e.preventDefault();
      videoOverlay.classList.add("open");
      if (!videoOverlay.querySelector("iframe")) {
        videoOverlay.insertAdjacentHTML(
          "beforeend",
          `<iframe width="988" height="556" src="https://www.youtube.com/embed/ZimIZpg0YAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
      }
    }

    function onKeyUp(e) {
      if (e.key === "Escape") close_video();
    }

    player.addEventListener("click", open_video);
    videoOverlay.addEventListener("click", close_video);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      player.removeEventListener("click", open_video);
      videoOverlay.removeEventListener("click", close_video);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

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
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            id="video-overlay"
            className="video-overlay"
            role="dialog"
            aria-label="Video player"
          >
            <button type="button" className="video-overlay-close" aria-label="Close video">
              &times;
            </button>
          </div>
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
