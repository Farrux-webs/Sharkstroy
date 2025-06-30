import { useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
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
   const lenis = useRef(null)

 useEffect(() => {
    const l = new Lenis({
      duration: 1.5,
      smooth: true,
    })

    const raf = (time) => {
      l.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.current = l

    return () => l.destroy()
  }, [])


    const handleScroll = () => {
    if (scrollToRequest.current && lenis.current) {
      lenis.current.scrollTo(scrollToRequest.current, {
        offset: 0,
        duration: 1.5,
        easing: (t) => t * (2 - t),
      })
    }
  }

  return (
    <>
      <LanguageProvider>
        <Header />
        <main>
          <AboutUs onScroll={handleScroll} />
          <ContactUs ref={scrollToRequest} />
          <Gallery />
          <Guarantees />
          <Plans />
        </main>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default Routes;
