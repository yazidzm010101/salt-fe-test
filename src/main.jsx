import "./main.css";
import "./slick.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import React from "react";
import ReactDOM from "react-dom/client";
import Values from "./components/Values";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="overflow-x-hidden">
      <Hero />
      <Values />
      <Perks/>
    </main>
    <Footer/>
  </React.StrictMode>
);
