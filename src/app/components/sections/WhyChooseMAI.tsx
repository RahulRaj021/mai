"use client";
import { useState } from "react";
import { TRADERS_DATABASE } from "../data";

export default function WhyChooseMAI() {
  const [whyChooseSliderIdx, setWhyChooseSliderIdx] = useState(0);

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-[var(--font-montserrat)]">
      <div className="text-center py-12 overflow-hidden">
        <div className="text-center mb-8 px-4">
          <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">TRUSTED BY HOMEOWNERS</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Why Choose MAI</h2>
          <p className="text-sm md:text-md text-gray-500 max-w-6xl mx-auto leading-relaxed">
            Every trader on MAI is verified, rated, and ready to work, so you get competitive bids from qualified professionals, not random strangers.
          </p>
        </div>

        {/* Desktop Slider */}
        <div className="hidden sm:block overflow-hidden">
          <div
            className="flex items-start transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${whyChooseSliderIdx * 20}%)` }}
          >
            {TRADERS_DATABASE.map((trader, i) => {
              const STAGGER_TY = [96, 56, 0, 56, 96];
              const ty = STAGGER_TY[i % STAGGER_TY.length];
              return (
                <div
                  key={trader.id}
                  className="flex-shrink-0 w-[20%] flex justify-center px-2"
                  style={{ paddingTop: `${ty}px` }}
                >
                  <a
                    href={trader.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-4xl font-bold text-[#003F6B]">
                      {(trader as any).initials ?? trader.name.split(" ").slice(0, 2).map((w: string) => w[0].toUpperCase()).join("")}
                    </div>
                    <div className="w-full absolute bottom-0 rounded-b-xl py-5 bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] z-30 text-white text-center">
                      <p className="text-lg font-semibold capitalize">{trader.name}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="flex sm:hidden overflow-x-auto no-scrollbar space-x-4 py-4 px-2">
          {TRADERS_DATABASE.map((trader) => (
            <a
              key={trader.id}
              href={trader.link}
              className="relative min-w-[230px] max-w-[230px] h-[350px] overflow-hidden cursor-pointer rounded-xl shadow-md flex-shrink-0 inline-block"
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-4xl font-bold text-[#003F6B]">
                {(trader as any).initials ?? trader.name.split(" ").slice(0, 2).map((w: string) => w[0].toUpperCase()).join("")}
              </div>
              <div className="w-full absolute bottom-0 rounded-b-xl py-5 bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] z-30 text-white text-center">
                <p className="text-lg font-semibold capitalize">{trader.name}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden sm:flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => setWhyChooseSliderIdx(prev => Math.max(0, prev - 1))}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-2xl text-[#003F6B]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" />
            </svg>
          </button>
          <button
            onClick={() => setWhyChooseSliderIdx(prev => Math.min(TRADERS_DATABASE.length - 5, prev + 1))}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-2xl text-[#003F6B]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full"
            href="/trader-list"
          >
            View All Traders
          </a>
        </div>
      </div>
    </section>
  );
}
