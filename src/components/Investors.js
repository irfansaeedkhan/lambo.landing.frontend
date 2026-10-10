import React from "react";
import "../styles/Investors.css";

const Investors = () => {
  const investorsImg = [
    { src: "./metamask.webp", alt: "MetaMask", width: 170, height: 32 },
    { src: "./walletconnect.webp", alt: "WalletConnect", width: 164, height: 28 },
    { src: "./pancake.webp", alt: "PancakeSwap", width: 207, height: 40 },
    { src: "./lamborghini.webp", alt: "Lamborghini", width: 149, height: 46 },
    { src: "./binance.webp", alt: "Binance", width: 140, height: 36 },
  ];
  return (
    <div className="investors MaxWidth" aria-label="Partners">
      {investorsImg.map((investor) => (
        <img
          key={investor.src}
          src={investor.src}
          alt={investor.alt}
          width={investor.width}
          height={investor.height}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      ))}
    </div>
  );
};

export default Investors;
