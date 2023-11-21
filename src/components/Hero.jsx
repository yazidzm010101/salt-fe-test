import React from "react";
import burger from "~/assets/icon-burger.svg";
import company_profile from "~/assets/company.svg";
import chevron_down from "~/assets/icon-chevron-down-double.svg";
import banner from "~/assets/banner_benjamin-wong-4-ka5rdCesI-unsplash.png";
import AboutSlider from "./AboutSlider";

function Hero() {
  return (
    <section>
      {/* HEADER */}
      <div className="relative flex w-full bg-white h-[3.75rem] items-center px-6 md:bg-transparent z-[2]">
        <a href="/">
          <img src={company_profile} />
        </a>
        <ul className="absolute hidden mx-auto text-white -translate-x-1/2 left-1/2 children:mx-4 md:flex children:my-4">
          <li>
            <a href="#who-we-are">Who We Are</a>
          </li>
          <li>
            <a href="#our-values">Our Values</a>
          </li>
          <li>
            <a href="#the-perks">The Perks</a>
          </li>
        </ul>
        <button className="ml-auto md:invert">
          <img src={burger} className="w-6 h-auto" />
        </button>
      </div>

      {/* BANNER */}
      <div className="relative w-full md:-mt-[3.75rem]">
        <img src={banner} className="w-full aspect-[16/9] xl:aspect-[16/6] object-cover" />
        <div className="absolute top-0 left-0 hidden w-full h-full bg-black opacity-70 md:block"/>
        <div className="relative w-full -mt-[4rem] md:-mt-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-center">
          <div
            className="absolute top-0 left-0 h-full w-full bg-[#53A7E9] md:bg-transparent text-white"
            style={{ clipPath: "polygon(0 8rem, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="relative bg-[#4097DB] md:bg-transparent text-white pt-24 pb-20 px-10"
            style={{ clipPath: "polygon(0 0, 100% 4rem, 100% 100%, 0 100%)" }}
          >
            <h1 className="text-4xl font-semibold">
              Discover
              <br /> Your Wonder
            </h1>
            <p className="max-w-md mx-auto mt-3">
              Cupidatat eu deserunt id nulla exercitation irure labore aliquip
              commodo irure eiusmod elit. In adipisicing aute non voluptate. Id
              enim voluptate ipsum non laborum incididunt cillum officia.
            </p>
          </div>
        </div>
        <button className="absolute flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg z-[2] left-1/2">
          <img src={chevron_down} className="w-6 h-auto" />
        </button>
      </div>

      {/* SLIDER */}
      <AboutSlider />
    </section>
  );
}

export default Hero;
