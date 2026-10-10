import React from "react";
import "../styles/LamboHolder.css";

const LamboHolder = () => {
    return (
        <div className="lambo-holder-container">
            <div className="lambo-holder MaxWidth">
                <h2 className="secondary-heading underline">
                    Here are the BENEFITS reserved for NFT Lambo Club holders
                </h2>
                <p className="main-para">
                    Each NFT will grant the right to receive a Lamborghini for 3
                    days each year at our rental points. The driving days can be
                    used consecutively or even separately.
                </p>
                <div className="dashed-border para-bullets">
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            On the other hand, for those who want to rent a
                            Lamborghini at our circuit and do not have NFTs or
                            simply for those who need to rent a Lamborghini for
                            more than 3 days, renting the Lamborghini will be
                            possible from our app by paying directly in Lambo
                            Tokens receiving a 40% discount.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            Those who hold 10 Lambo Club NFTs for at least 12
                            months will be able to attend our rallies for free
                            without paying the admission fee.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            Those who hold 25 Lambo Club NFTs for at least 12
                            months will not only get free admission to rallies,
                            but will also receive free dinner in the VIP area at
                            rallies included in the PASS FREE.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            Those who hold 50 Lambo Club NFTs for at least 12
                            months in addition to the previous PASS benefits
                            will also be able to drive one of our Lamborghinis
                            during the rallies, ordinarily this service will
                            cost $5,000.00 (five thousand dollars) to those who
                            do not fall under this benefit.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            Each Lambo Club NFT you put in Staking will generate
                            5 Lambo Tokens per day for 365 days. So 4,745,000
                            Lambo Tokens will be minted from the 2,600 Lambo
                            Club NFTs.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <p>
                            Those who own Lambo Club NFTs have governance rights
                            for each NFT they own and thus will be able to vote
                            within the Community and determine important choices
                            in the direction of the project.
                        </p>
                    </div>
                    <div>
                        <span className="primarybullet"></span>
                        <div className="para-wrap">
                            <p>
                                Last but not least: EXTREME SCARCITY! There are
                                ONLY 2,600 Lambo Club NFTs on the market but
                                over 1 billion Lamborghini BRAND lovers, how
                                much will you be able to resell your NFTs for
                                with such a high REQUEST?
                            </p>
                            <p>
                                In short, as Master Satoshi Nakamoto said, "if
                                you don't believe it or don't understand it"
                                well.. we also "don't have the time to explain
                                it to you !".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="hblur-1" src="./holder-blur1.webp" alt=""  loading="lazy" decoding="async" />
            <img className="hblur-2" src="./holder-blur2.webp" alt=""  loading="lazy" decoding="async" />
        </div>
    );
};

export default LamboHolder;
