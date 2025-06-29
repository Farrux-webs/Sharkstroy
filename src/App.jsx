import { useState, useEffect } from "react";
import Routes from "./Routes/routes";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    Lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      Lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // // Cleanup on unmount
    // return () => {
    //   lenis.current.destroy();
    // };
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
