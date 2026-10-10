import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "../styles/FAQ.css";

const FAQ = () => {
    const data = {
        rows: [
            {
                title: "How do I join the Club?",
                content: `If you are wondering how to start registering on the platform and interacting with our ecosystem the procedure is quite SIMPLE, first you will need to download the decentralized METAMASK Wallet.<br><br>Not sure how to download and activate your Metamask Wallet? Don't worry, this mind-blowingly simple guide will save you, CLICK HERE and download it!<br><br>Once you have downloaded METAMASK you can download another .pdf guide we have prepared for you that will help you one step at a time to set up your wallet on the BINANCE SMART CHAIN. To download the guide CLICK HERE!<br><br>Now that you have your METAMASK Wallet configured for BSC the registration will be really easy. Don't worry, we have prepared a .pdf guide for this step as well. CLICK HERE to download it!<br><br>Registration will cost ONLY 15 BUSD ($15) if you have a person to register you with their referral code, otherwise you will have to pay a slight surcharge and registration will cost you 50 BUSD ($50).`,
            },
            {
                title: "With what cryptocurrency can I purchase the NFTs?",
                content:
                    `The Network we had you set up your Metamask on is the Binance Smart Chain Network and the currency to purchase NFTs is Binance's Stable Coin, BUSD.<br><br>

                    However keep some small fraction of BNBs, Binasce Coin, in your Wallet, you will need them to pay the GAS cost, that is, the fees to process transactions on the blockchain.<br><br>
                    
                    It is essential to have BNBs in your wallet to move Lambo Club NFTs and Lambo Tokens to other Wallets.<br><br>
                    
                    The pre-launch price of each NFT will be 1032 BUSD ($1032) but it is important not to miss the pre-sale as a later increase in the value of these NFTs will be inevitable.<br><br>
                     
                    We do not know how long the price will remain this low, as always business REWARDS speed.`,
            },
            {
                title: "How do I buy Lambo Token?",
                content: `Buying Lambo Tokens is really very simple. Tokens are listed on Pancakeswap, a decentralized exchange based on Binance Smart Chain.<br><br>

                To make it even easier to buy Tokens moreover, we have included a dedicated session within the platform, linked directly to Pancakeswap.<br><br>
                
                This way if you are browsing within the platform and want to purchase Lambo Tokens you will not have to leave each time to go to Pancakeswap.`,
            },
            {
                title: "What fees are generated for the Core Team?",
                content:
                    `All fees that are generated for project sustainability are made clear and transparent. In total, the Core Team receives two forms of fees.<br><br>

                    Registration Fees: upon registration, the user pays a registration fee that can range from $15 to $45 in BNB. The fee depends on whether a user was introduced by one of our members or signed up independently.<br><br>
                    
                    Sales Fees: Every time an NFT is sold on the platform in BUSD, 20% of the amount is turned over to the Core Team. PLEASE NOTE: Not all of this amount is taken by the Core Team, much of it is mainly used to make the WIN A LAMBO program sustainable! Thanks to these fees in fact we can fulfill your dream of receiving a Lamborghini for FREE through the Referral program.
                    `,
            },
            {
                title: "How do we support 1200%-2,000% APY?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "When will staking be made available?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Is there a wallet limit?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Is liquidity locked?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "How do I stake NFT Lambo Club to receive Lambo Tokens?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is so special about WRLD NFT’s?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "How can NFT owners earn? ",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "How will the WRLD app scanner work? ",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra.<br><br> Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
        ],
    };

    const styles = {
        bgColor: "transparent",
        titleTextColor: "white",
        rowTitleTextSize: "1.6rem",
        rowContentPaddingBottom: "20px",
        rowTitleColor: "white",
        rowContentColor: "white",
        arrowColor: "white",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    return (
        <div className="faq-container MaxWidth">
            <div className="secondary-heading-white">
                Frequently Asked Questions
            </div>
            <p className="section-para">
                Before you write to us check through this list, maybe the answer
                to your Question is right here! Also attached in these answers
                are very important Tutorials to help you with the procedures...
            </p>
            <Faq data={data} styles={styles} config={config} />
            <img className="mesh" src="./faq-mesh.webp" alt=""  loading="lazy" decoding="async" />
        </div>
    );
};

export default FAQ;
