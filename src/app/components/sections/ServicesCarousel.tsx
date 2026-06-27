"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        slidesPerView="auto"
        spaceBetween={16}
        allowTouchMove={false}
        className="py-4"
      >
        {ALL_SERVICES.map((srv, idx) => (
          <SwiperSlide key={idx} style={{ width: "180px" }}>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="relative w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white">
                <Image src={srv.image} alt={srv.title} fill sizes="180px" className="object-cover" loading="lazy" />
              </div>
              <span className="mt-3 text-xs md:text-sm font-medium text-gray-700 text-center max-w-[140px] leading-tight line-clamp-2">{srv.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-10 text-center">
        <a href="/services" className="inline-flex items-center gap-2 rounded-full bg-[#1F5CAC] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1F5CAC]/90 hover:scale-[1.02] transition-all">
          View All Services
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
}
