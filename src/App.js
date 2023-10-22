import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SectorPage from "./pages/SectorPage";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Services from "./pages/Services";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <div className="">
      {" "}
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="" element={""}>
          <Route path="/" element={<Home />} />
          <Route path="/sector" element={<SectorPage />} />
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Footer />
    </div>
  );
}

export default App;
