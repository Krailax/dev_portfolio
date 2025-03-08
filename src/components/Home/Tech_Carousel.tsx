"use client";


import Marquee from "react-fast-marquee";
import DataTech from "../../data/technologies.json";

export default function TechCarousel() {
  return (
    <section className="mt-8 w-11/12 sm:w-8/12 overflow-hidden py-4">
      <Marquee gradient={false} speed={100} className="mask-fade">
        {[...DataTech, ...DataTech].map((data, key) => (
          <div key={key} className="w-50 h-32 p-4 flex flex-col items-center justify-center gap-4 font-semibold flex-shrink-0"> 
            <img src={`/technologies/${data.icon}`} loading="lazy" alt={data.name} width={data.width} height={data.height} />
            <p className="text-center text-md font-semibold">{data.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}