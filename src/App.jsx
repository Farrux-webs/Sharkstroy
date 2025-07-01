import { useState, useRef, useEffect } from "react";
import Routes from "./Routes/routes";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // uzunroq duration = sekinroq harakat
      easing: (t) => 1 - Math.pow(1 - t, 5), // kuchli inertia, shift qilib to‘xtaydi
      smooth: true,
      smoothTouch: true,
      gestureOrientation: "vertical", // faqat vertikal scroll
    });

    lenisRef.current = lenis;

    let animationFrame;
    const animate = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
