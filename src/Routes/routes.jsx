import { useState, useRef } from "react";
import Header from "../components/header/header";
import AboutUs from "../components/about-us/about-us";
import ContactUs from "../components/contact/contuct-us";
import Gallery from "../components/gallery/gallery";
import Plans from "../components/plans/plans";
import Footer from "../components/footer/footer";
import Guarantees from "../components/guarantees/guarantees";
import { LanguageProvider } from "../context/languagecontext";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Routes() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: false,
    });
  }, []);

  const scrollToRequest = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleScroll = () => {
    setTimeout(() => {
      scrollToRequest.current?.scrollIntoView({ behavior: "smooth" });
    }, 20); // scroll ochilganidan keyin pastga tushiramiz
    setScrollEnabled(true); // scrollni faollashtiramiz
  };

  return (
    <>
      <LanguageProvider>
        <div
          className={`w-full ${
            scrollEnabled ? "overflow-auto" : "h-screen overflow-hidden"
          } scroll-smooth`}
        >
          <Header />
          <main>
            <AboutUs onScroll={handleScroll} />
            <ContactUs ref={scrollToRequest} />
            <Guarantees />
            <Gallery />
            <Plans />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
}

export default Routes;
