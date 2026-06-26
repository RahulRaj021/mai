"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { SERVICES_LOOP, PLACEHOLDERS_LOOP } from "../data";

export default function HeroSection({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [isExiting, setIsExiting] = useState(false);

  const typeSequence = useMemo(() =>
    SERVICES_LOOP.flatMap(word => [
      word,
      2000,
      () => setIsExiting(true),
      380,
      "",
      () => setIsExiting(false),
    ]),
  []);

  const [placeholderText, setPlaceholderText] = useState("I Want ");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isPlaceholderDeleting, setIsPlaceholderDeleting] = useState(false);
  const placeholderTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  useEffect(() => {
    const handlePlaceholderTyping = () => {
      const activeWord = PLACEHOLDERS_LOOP[placeholderIndex];
      const prefix = "I Want ";
      const fullText = prefix + activeWord;
      const speed = isPlaceholderDeleting ? 25 : 55;
      if (!isPlaceholderDeleting) {
        setPlaceholderText(fullText.substring(0, placeholderText.length + 1));
        if (placeholderText === fullText) {
          placeholderTimer.current = setTimeout(() => setIsPlaceholderDeleting(true), 2500);
          return;
        }
      } else {
        setPlaceholderText(fullText.substring(0, placeholderText.length - 1));
        if (placeholderText === prefix) {
          setIsPlaceholderDeleting(false);
          setPlaceholderIndex(p => (p + 1) % PLACEHOLDERS_LOOP.length);
          return;
        }
      }
      placeholderTimer.current = setTimeout(handlePlaceholderTyping, speed);
    };
    placeholderTimer.current = setTimeout(handlePlaceholderTyping, 120);
    return () => { if (placeholderTimer.current) clearTimeout(placeholderTimer.current); };
  }, [placeholderText, isPlaceholderDeleting, placeholderIndex]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    setSearchSuggestions(q.trim().length > 1 ? SERVICES_LOOP.filter(s => s.toLowerCase().includes(q.toLowerCase())).slice(0, 4) : []);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) { setSearchSubmitted(true); setTimeout(() => setSearchSubmitted(false), 3000); }
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full text-white font-(--font-montserrat)">
      <div className="w-full h-full flex items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
          <source src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1766055134591-MAI_Landing_Page_Video_(Hero_Section).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#003F6B4D]" />
        <div className="absolute inset-0 bg-[#00000026]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3 z-10 px-4">
          <motion.div
            className="w-full pt-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-bold text-white flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-2 leading-tight text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">We Find You The</span>
              <span className="sr-only">{SERVICES_LOOP.join(", ")}</span>
              <span className="md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl inline-block overflow-hidden">
                <motion.span
                  className="inline-block font-bold text-amber-400"
                  animate={{ y: isExiting ? "110%" : "0%" }}
                  transition={{ duration: 0.38, ease: "easeInOut" }}
                >
                  <TypeAnimation
                    sequence={typeSequence}
                    repeat={Infinity}
                    speed={50}
                    omitDeletionAnimation
                    cursor={false}
                  />
                  <span className="animate-pulse">|</span>
                </motion.span>
              </span>
            </h1>
            <span className="text-xs sm:text-sm md:text-lg font-light text-white text-center max-w-xl block mt-2 mx-auto">
              Find Local Trusted Tradespeople in Minutes
            </span>
          </motion.div>

          <div className="w-full flex flex-col items-center gap-4 pt-4">
            <motion.div
              className="px-3 w-full max-w-xl md:max-w-170"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-12.5">
                  <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder={placeholderText}
                    className="flex-1 h-full px-6 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium" />
                  <button type="submit" className="flex items-center justify-center w-10 h-10 mr-1.25 rounded-full transition hover:scale-95">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="16.5" fill="white" stroke="#EDEDED" /><path d="M16.5 24C20.37 24 23.5 20.87 23.5 17S20.37 10 16.5 10 9.5 13.13 9.5 17s3.13 7 7 7Z" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 13c1.06 0 2.08.42 2.83 1.17.75.75 1.17 1.77 1.17 2.83" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 22l3 3" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
                {searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white border border-gray-100 p-2 shadow-xl z-20 text-slate-800 text-left">
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 py-1">Matching Services</span>
                    {searchSuggestions.map((s, i) => (
                      <button key={i} type="button" onClick={() => { setSearchQuery(s); setSearchSuggestions([]); }}
                        className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-slate-50 font-medium transition-colors">{s}</button>
                    ))}
                  </div>
                )}
                {searchSubmitted && (
                  <div className="absolute top-full left-0 right-0 mt-3 rounded-xl bg-emerald-500/90 backdrop-blur-md px-4 py-2.5 text-xs text-white z-20 text-center shadow-lg font-semibold">
                    ⚡ Search active! Generating matches for &quot;{searchQuery}&quot; near you...
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-gray-200 max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            >
              {["200K+ Trusted Traders", "Transparent Bidding System", "11K Monthly Active Users"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-gray-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
