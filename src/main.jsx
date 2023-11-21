import "./main.css";
import "./slick.css";

import Hero from "./components/Hero";
import React from "react";
import ReactDOM from "react-dom/client";
import Values from "./components/Values";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <Hero />
      <Values />
      <div className="flex items-center justify-center font-medium text-gray-700 bg-white h-96">
        TODO SLIDER
      </div>
    </main>
    <Footer/>
  </React.StrictMode>
);
