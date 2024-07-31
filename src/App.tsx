import Celebrations from "./components/Celebrations/Celebrations";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Tourism from "./components/Tourism/Tourism";
import Foods from "./components/Foods/Foods";
import { IdSessions } from "./Types/Enums";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Handicraft from "./components/Handicraft/Handicraft";

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const celebrationRef = useRef<HTMLDivElement | null>(null);
  const foodRef = useRef<HTMLDivElement | null>(null);
  const handiRef = useRef<HTMLDivElement | null>(null);
  const tourismRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === `#${IdSessions.Hero}` && heroRef.current) {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === `#${IdSessions.Celebration}` && celebrationRef.current) {
      celebrationRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === `#${IdSessions.Food}` && foodRef.current) {
      foodRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === `#${IdSessions.Handicraft}` && handiRef.current) {
      handiRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === `#${IdSessions.Tourism}` && tourismRef.current) {
      tourismRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <main ref={heroRef} id={IdSessions.Hero}>
        <Header />
        <HeroSection />
        <div ref={celebrationRef} id={IdSessions.Celebration}>
          <Celebrations />
        </div>
        <div ref={foodRef} id={IdSessions.Food}>
          <Foods />
        </div>
        <div ref={handiRef} id={IdSessions.Handicraft}>
          <Handicraft />
        </div>
        <div ref={tourismRef} id={IdSessions.Tourism}>
          <Tourism />
        </div>
      </main>
    </>
  );
}

export default App;
