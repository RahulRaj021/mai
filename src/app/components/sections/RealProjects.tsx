"use client";
import Image from "next/image";
import { ACTIVE_PROJECTS } from "../data";

const hoverColors = [
  "hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)] hover:border-b-indigo-500",
  "hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)] hover:border-b-rose-500",
  "hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)] hover:border-b-orange-500",
  "hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)] hover:border-b-teal-500",
];

export default function RealProjects() {
  return (
    <section id="projects" className="my-24 bg-[#F2F6FB] rounded-3xl px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">Real Work, Real Results</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Explore Real UK Projects</h2>
          <span className="text-sm md:text-md text-gray-500">From loft conversions in Leeds to boiler installs in Bristol.</span>
        </div>
        <a href="/projects" target="_blank" rel="noopener noreferrer" className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full whitespace-nowrap">
          Explore Projects
        </a>
      </div>

      <div className="grid grid-flow-col md:grid-flow-row auto-cols-[85vw] sm:auto-cols-[45vw] md:auto-cols-auto md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x md:snap-none snap-mandatory pt-2 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {ACTIVE_PROJECTS.map((proj, i) => (
          <div key={proj.id}
            className={`snap-center bg-white rounded-3xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] cursor-pointer flex flex-col transition-all duration-500 ease-out will-change-transform ${hoverColors[i]} border-b-[4px] border-b-transparent translate-y-0 opacity-100`}
            style={i > 0 ? { transitionDelay: `${i * 150}ms` } : undefined}>
            <div className="flex flex-col flex-grow">
              <div className="relative w-full h-[220px] rounded-t-3xl overflow-hidden shrink-0 bg-gray-100 group">
                <Image alt={proj.title} src={proj.image} fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"} />
                <div className="absolute top-4 right-4 bg-[#064e3b]/85 backdrop-blur-sm px-3.5 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  <span className="text-white text-[11px] font-semibold tracking-wide">Active</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-[#0F7BA2] text-[11px] font-medium uppercase tracking-wider mb-1">{proj.category}</span>
                <h3 className="text-[19px] font-bold text-[#333333] line-clamp-1 mb-2">{proj.title}</h3>
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-gray-100 mb-4" />
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-gray-400 min-w-0">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-lg shrink-0 stroke-[0.8]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <g id="Location_On"><g>
                          <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                          <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                        </g></g>
                      </svg>
                      <span className="text-sm font-medium text-[#6788AA]">{proj.location}</span>
                    </div>
                    <div className="font-bold text-[#008000] text-[14px] shrink-0">{proj.budget}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
