import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import IntroAnimation from "../components/IntroAnimation";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <IntroAnimation />
    </>
  );
};

export default Layout;
