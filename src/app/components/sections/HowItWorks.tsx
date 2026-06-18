"use client";
import { useState, useEffect, useRef } from "react";
import { PROCESS_STEPS } from "../data";

export default function HowItWorks() {
  const [processVisible, setProcessVisible] = useState(false);
  const processRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setProcessVisible(true); },
      { threshold: 0.15 }
    );
    if (processRef.current) observer.observe(processRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="my-24" ref={processRef}>
      <div className="mx-auto w-full px-4 xl:px-8 text-center flex flex-col items-center">
        <div className={`transition-all duration-1000 ease-out ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3 block">SIMPLE PROCESS</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">How To Find Verified Traders</h2>
          <span className="text-sm text-gray-500">Find trusted professionals in 4 simple steps</span>
        </div>

        <div className="relative w-full mt-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gray-200 hidden md:block" />
            <div className="absolute top-12 left-[12.5%] h-[1px] bg-gradient-to-r from-[#0C7A56] to-[#CBECE2] hidden md:block transition-all duration-[2000ms] ease-out"
              style={{ width: processVisible ? "75%" : "0%", opacity: processVisible ? 1 : 0 }} />
            <div className="absolute top-12 bottom-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-gray-200 md:hidden z-0" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#0C7A56] to-[#CBECE2] md:hidden transition-all duration-[2000ms] ease-out z-0"
              style={{ height: processVisible ? "85%" : "0%", opacity: processVisible ? 1 : 0 }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className={`flex flex-col items-center relative transition-all duration-1000 ease-out ${processVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${200 + i * 250}ms` }}>
                <div className="relative w-24 h-24 rounded-full mx-auto mb-6 shrink-0 z-10 group">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img alt={step.title} loading="lazy" width={220} height={220}
                      className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full" src={step.icon} />
                  </div>
                  <div className="absolute top-0 -right-1 w-6 h-6 bg-[#0C7A56] text-white rounded-full flex items-center justify-center text-[12px] font-bold shadow-md">
                    {step.num}
                  </div>
                </div>
                <div className="px-3 bg-[#F2F6FB] md:bg-transparent py-3 md:py-0 rounded-xl md:rounded-none">
                  <h4 className="text-[17px] font-bold text-[#333333] mb-3 leading-snug">{step.title}</h4>
                  <span className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed max-w-[360px] mx-auto block">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="post-project" className={`mt-16 flex justify-center w-full transition-all duration-1000 ease-out ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "1400ms" }}>
          <a href="/post-a-project" className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full hover:bg-[#1F5CAC]/90 transition-colors">
            Post Your Project Now
          </a>
        </div>
      </div>
    </section>
  );
}
