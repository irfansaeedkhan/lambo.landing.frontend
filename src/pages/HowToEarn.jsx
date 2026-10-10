import React, { Suspense, lazy } from "react";
import LazyWhenVisible from "../components/LazyWhenVisible";
import Section1 from "../components/howToEarn/Section1";

const Section2 = lazy(() => import("../components/howToEarn/Section2"));
const Section3 = lazy(() => import("../components/howToEarn/Section3"));
const Section4 = lazy(() => import("../components/howToEarn/Section4"));
const Section5 = lazy(() => import("../components/howToEarn/Section5"));

function HowToEarn() {
  return (
    <main className="howtoearnContainer">
      <Section1 />
      <LazyWhenVisible minHeight={480} rootMargin="320px 0px">
        <Suspense fallback={null}>
          <Section2 />
        </Suspense>
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={420} rootMargin="320px 0px">
        <Suspense fallback={null}>
          <Section3 />
        </Suspense>
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={420} rootMargin="320px 0px">
        <Suspense fallback={null}>
          <Section4 />
        </Suspense>
      </LazyWhenVisible>
      <LazyWhenVisible minHeight={420} rootMargin="320px 0px">
        <Suspense fallback={null}>
          <Section5 />
        </Suspense>
      </LazyWhenVisible>
    </main>
  );
}

export default HowToEarn;
