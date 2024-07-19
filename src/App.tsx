import Celebrations from "./components/Celebrations/Celebrations";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Tourism from "./components/Tourism/Tourism";
import Foods from "./components/Foods/Foods";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const celebrationRef = useRef<HTMLDivElement | null>(null);
  const foodsRef = useRef<HTMLDivElement | null>(null);
  const tourismRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#hero" && heroRef.current) {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#celebrations" && celebrationRef.current) {
      celebrationRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#foods" && foodsRef.current) {
      foodsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#tourism" && tourismRef.current) {
      tourismRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <main ref={heroRef} id="hero">
        <Header/>
        <HeroSection />
        <div ref={celebrationRef} id="celebrations">
          <Celebrations />
        </div>
        <div ref={foodsRef} id="foods">
          <Foods />
        </div>
        <div ref={tourismRef} id="tourism">
          <Tourism />
        </div>
      </main>
    </>
  );
}

export default App;
