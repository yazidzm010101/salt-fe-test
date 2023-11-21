import React, { useEffect } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import Values from "./components/Values";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <Values />
        <Perks />
      </main>
      <Footer />
    </>
  );
}

export default App;

import "./main.css";
import "./slick.css";
