"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data";

const CARD_STYLES = [
  { border: "hover:border-blue-600", rotate: "hover:rotate-[4deg]", quote: "group-hover:text-blue-600" },
  { border: "hover:border-yellow-500", rotate: "hover:-rotate-[4deg]", quote: "group-hover:text-yellow-500" },
  { border: "hover:border-rose-500", rotate: "hover:rotate-[4deg]", quote: "group-hover:text-rose-500" },
  { border: "hover:border-cyan-400", rotate: "hover:-rotate-[4deg]", quote: "group-hover:text-cyan-400" },
];

export default function Testimonials() {
  const [testimonialMobileDot, setTestimonialMobileDot] = useState(0);
  const testimonialMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = testimonialMobileRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round((el.scrollLeft / el.scrollWidth) * TESTIMONIALS.length);
      setTestimonialMobileDot(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="w-full relative py-12 overflow-hidden border-t border-gray-800"
      style={{
        backgroundImage: 'url("https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775571841973-Rectangle_34624722.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/10 lg:bg-gradient-to-r lg:from-black/10 lg:via-black/10 lg:to-black/10" />
      <div className="relative z-10 mx-auto px-4 sm:px-10 xl:px-[117px]">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-4/12 flex flex-col items-start text-white flex-shrink-0"
          >
            <span className="text-md uppercase mb-4" style={{ color: "rgb(191,238,255)" }}>What People Say</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">The Proof Is In The Pudding</h2>
            <span className="text-gray-300 mb-6 md:mb-10 max-w-lg text-md">Tradespeople are winning, homeowners are relieved. Don&apos;t take our word for it, here&apos;s what real MAI users across the UK have to say.</span>
          </motion.div>

          <div className="w-full lg:w-8/12">
            <div ref={testimonialMobileRef} className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto overflow-y-hidden sm:overflow-visible pb-4 pt-4 px-4 -mx-4 sm:pb-0 sm:pt-0 sm:px-0 sm:mx-0 snap-x snap-mandatory sm:snap-none no-scrollbar">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`w-[85vw] sm:w-auto shrink-0 snap-center group bg-white rounded-[24px] p-5 flex flex-col shadow-2xl border-b-4 border-transparent ${CARD_STYLES[i].border} ${CARD_STYLES[i].rotate} transition-all duration-[1200ms] ease-out`}
                >
                  <div className="flex-grow">
                    <span className={`text-6xl text-gray-800 font-serif leading-none h-6 block transition-colors duration-700 ${CARD_STYLES[i].quote}`}>&quot;</span>
                    <span className="text-gray-700 text-md mb-6 block mt-3">{t.text}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">{t.name}</h4>
                      <span className="text-gray-500 text-xs sm:text-sm">{t.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex sm:hidden justify-center items-center gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to item ${i + 1}`}
                  onClick={() => {
                    const el = testimonialMobileRef.current;
                    if (!el) return;
                    el.scrollTo({ left: (el.scrollWidth / TESTIMONIALS.length) * i, behavior: "smooth" });
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${testimonialMobileDot === i ? "w-6 bg-[#1F5CAC]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
