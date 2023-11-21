import React, { useRef, useState } from "react";
import Slider from "react-slick";
import IconArrowLeft from "../assets/IconArrowLeft";
import IconArrowRight from "../assets/IconArrowRight";
const data = [
  {
    about: "Who we are",
    name: "Technology Company",
    description:
      "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    about: "What we do",
    name: "Professional Brand Management",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    about: "How we do",
    name: "Strategize, Design, Collaborate",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
  },
];

function AboutSlider() {
  const ref = useRef(null);
  const [active, setActive] = useState(0)
  const totalPage = data.length;
  const settings = {
    dots: false,
    infinite: true,
    slideToShow: 1,
    speed: 250,
    initialSlide: 0,
    prevArrow: null,
    nextArrow: null,
    afterChange: current => setActive(current)
  };
  return (
    <>
      <Slider {...settings} className="relative z-[1]" ref={ref}>
        {data.map((item, i) => (
          <div key={i}>
            <div className="w-full px-10 py-10 bg-white">
              <h3 className="text-4xl mb-4  font-medium text-[#029FE4]">{item.about}</h3>
              <p className="mb-2 text-xl">{item.name}</p>
              <p className="text-[#777777]">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex items-center px-10 py-10">
        <div className="font-medium children:mx-0.5 mr-auto">
          <span className="text-3xl">
            {('00' + (active + 1)).slice(-2)}
          </span>
          <span className="text-3xl font-normal text-[#B6B6B6]">
             /
          </span>
          <span className="text-lg text-[#B6B6B6]">
            {('00' + totalPage).slice(-2)}
          </span>
        </div>
        <button
          className="bg-[#F1F1F1] text-[#B6B6B6] px-4 py-4  "
          onClick={ref?.current?.slickPrev}
        >
          <IconArrowLeft className={"w-5 h-auto"} />
        </button>

        <button
          className="bg-[#1BA0E1] text-white px-4 py-4  "
          onClick={ref?.current?.slickNext}
        >
          <IconArrowRight className={"w-5 h-auto"} />
        </button>
      </div>
    </>
  );
}

export default AboutSlider;
