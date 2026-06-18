"use client";
import { ALL_SERVICES } from "../data";

export default function ServicesCarousel() {
  return (
    <section id="services" className="my-20">
      <div className="text-center mb-10">
        <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide block mb-2">Get Any Home Repair Done</span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Looking For A Service?</h2>
        <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
          From a dripping tap to a full loft conversion find the right{" "}
          <a href="/trader-list" className="text-[#1F5CAC] hover:underline" target="_blank">verified tradesperson</a>{" "}
          for any job.
        </p>
      </div>

      <div className="overflow-hidden py-4">
        <div className="animate-marquee flex gap-4" style={{ width: "max-content" }}>
          {[...ALL_SERVICES, ...ALL_SERVICES].map((srv, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px] md:min-w-[140px] shrink-0 cursor-pointer">
              <div className="w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white">
                <img src={srv.image} alt={srv.title} className="object-cover w-full h-full" />
              </div>
              <span className="mt-3 text-xs md:text-sm font-medium text-gray-700 text-center max-w-[140px] leading-tight line-clamp-2">{srv.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="/services" className="inline-flex items-center gap-2 rounded-full bg-[#1F5CAC] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1F5CAC]/90 hover:scale-[1.02] transition-all">
          View All Services
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
}
