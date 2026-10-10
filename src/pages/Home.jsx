import React from "react";
import Hero from "../components/Hero";
import LamboClub from "../components/LamboClub";
import LamboToken from "../components/LamboToken";
import SmartContract from "../components/SmartContract";
import LamboHolder from "../components/LamboHolder";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Members from "../components/Members";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <main className="App">
      <Hero />
      <LamboClub />
      <LamboToken />
      <SmartContract />
      <LamboHolder />
      <Tokenomics />
      <Roadmap />
      <Members />
      <FAQ />
    </main>
  );
}

export default Home;
