import React from "react";
import IconListItem from "~/assets/IconListItem";
import CoreValue from "~/assets/CoreValue";

const data = [
  {
    title: "Dedication",
    dsecription:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    dsecription:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Curiosity",
    dsecription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

function Values() {
  return (
    <section className="w-full px-10 bg-[#F8F8F8] pt-10 overflow-hidden">
      <div className="w-full children:my-5">
        <h2 className="text-4xl text-center text-[#029FE4] font-medium">
          Our Core Values
        </h2>
        <p className="text-[#777777]">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </p>
        <ul className="w-full py-2 children:my-6">
          {data?.map((item, i) => (
            <li className="flex items-start" key={i}>
              <IconListItem className="flex-shrink-0 w-6 h-8 mr-4 text-[#747474]" />
              <div className="flex-grow">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-[#777777]">{item.dsecription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CoreValue
        className={"w-[120%] h-auto ml-14"}
        svgClassName={"w-full h-auto"}
      />
    </section>
  );
}

export default Values;
