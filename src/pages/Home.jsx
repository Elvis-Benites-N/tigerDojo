import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Banner from "../containers/Banner";
import Footer from "../components/Footer";
import About from "../containers/About";
import Contact from "../containers/Contact";
import WorkDetails from "../containers/WorkDetails";

const Home = () => {
  const aboutRef = useRef(null);
  const workDetailsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(workDetailsRef)}
      />

      {/* Sections */}
      <Banner onContactClick={() => scrollToSection(contactRef)} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={workDetailsRef}>
        <WorkDetails />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
