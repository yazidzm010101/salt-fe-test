import React, { useRef, useState } from "react";
import Slider from "react-slick";
import IconArrowLeft from "../assets/IconArrowLeft";
import IconArrowRight from "../assets/IconArrowRight";
import SpecialityAccesories from "../assets/SpecialityAccesories";
import { twMerge } from "tailwind-merge";
const data = [
  {
    icon: <SpecialityAccesories className={"w-full h-auto"} />,
    name: "Accessories",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
  },
  {
    icon: <SpecialityAccesories className={"w-full h-auto"} />,
    name: "Speed Improvement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
  },
  {
    icon: <SpecialityAccesories className={"w-full h-auto"} />,
    name: "Exhaust",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
  },
];

function Perks() {
  const ref = useRef(null);
  const [active, setActive] = useState(1);
  const totalPage = data.length;
  const settings = {
    dots: false,
    centerMode: true,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    infinite: true,
    speed: 250,
    initialSlide: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    afterChange: (current) => setActive(current),
  };

  const prev = () => {
    if (ref?.current) {
      ref.current.slickPrev();
    }
  };

  const next = () => {
    if (ref?.current) {
      ref.current.slickNext();
    }
  };

  const goto = (i) => {
    if (ref?.current) {
      ref.current.slickGoTo(i);
    }
  };
  return (
    <section id="the-perks" className="px-5 py-5 bg-[#509FDD] md:bg-white">
      <div className="container max-w-6xl px-5 py-5 mx-auto bg-white">
        <h2 className="text-2xl md:text-6xl md:font-medium uppercase md:normal-case  mb-4 text-[#029FE4] font-bold">
          Our Speciality
        </h2>
        <p className="text-[#303030] md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        <Slider {...settings} className="relative z-[1]" ref={ref}>
          {data.map((item, i) => (
            <div key={i} className="py-10">
              <div className="w-full px-10 py-2 bg-white md:px-20">
                {item.icon}
              </div>
              <p className="md:text-xl md:my-4 md:font-medium text-[#303030] text-center">
                {item.name}
              </p>
              <p
                className={twMerge(
                  "px-4  md:text-lg md:my-4 text-[#A7A7A7] text-center pb-10 md:block hidden"
                )}
              >
                {item.description}
              </p>
            </div>
          ))}
        </Slider>
        {data.map((item, i) => (
          <p
            key={i}
            className={twMerge(
              "text-[#A7A7A7] text-center pb-10 md:hidden",
              i == active ? "block" : "hidden"
            )}
          >
            {item.description}
          </p>
        ))}
        <div className="flex items-center">
          <button
            className="bg-transparent text-[#D2D2D2] px-4 py-4  "
            onClick={prev}
          >
            <IconArrowLeft className={"w-5 h-auto"} />
          </button>
          <div className="flex mx-auto children:mx-1">
            {data.map((item, i) => (
              <div
                key={i}
                className={twMerge(
                  "w-2 h-2 rounded-full",
                  active == i ? "border-2 border-[#3D46A2]" : "bg-[#DAF3FC]"
                )}
                onClick={() => goto(i)}
              />
            ))}
          </div>
          <button
            className="bg-transparent text-[#3D46A2] px-4 py-4 "
            onClick={next}
          >
            <IconArrowRight className={"w-5 h-auto"} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Perks;
