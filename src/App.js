import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const HowToEarn = React.lazy(() => import("./pages/HowToEarn"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const MaintainancePage = React.lazy(() => import("./pages/MaintainancePage"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="howtoearn" element={<HowToEarn />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="maintainance" element={<MaintainancePage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
