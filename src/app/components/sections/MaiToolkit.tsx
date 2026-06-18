"use client";
import { useState, useEffect, useRef } from "react";
import { TRADERS_DATABASE } from "../data";

const BAR_SETS = [
  [[77,17,52,16],[38,60,42,16],[30,45,15,17],[36,53,37,37]],
  [[45,30,60,25],[55,40,20,35],[20,55,45,30],[60,25,50,15]],
  [[30,50,40,20],[65,15,50,30],[50,30,60,20],[25,60,30,45]],
  [[55,25,45,35],[20,65,30,50],[45,20,55,40],[40,45,20,55]],
];

const PIN_POSITIONS = [
  { left: "90%", bottom: "50%" },
  { left: "30%", bottom: "65%" },
  { left: "55%", bottom: "30%" },
  { left: "70%", bottom: "70%" },
  { left: "20%", bottom: "40%" },
];

const CURSOR_WAYPOINTS = [
  { x: 0,   y: 0   },
  { x: 110, y: -5  },
  { x: 210, y: -10 },
  { x: 210, y: -10 },
  { x: 60,  y: -55 },
];
const CURSOR_CLICK_IDX = 3;

const AI_CARD_BRIEFS = [
  "This project involves renovating an existing kitchen to enhance functionality, layout efficiency, and overall aesthetics. The space measures roughly 12x15 feet...",
  "Looking for a qualified electrician to rewire our 3-bedroom Victorian terrace. Work includes consumer unit upgrade, new sockets throughout, and outdoor lighting installation...",
  "Need a reliable plumber to fix a persistent leak under the bathroom sink and replace the radiator in the master bedroom. Property is a 2-bed flat in Bristol...",
  "Seeking a skilled carpenter to design and build custom fitted wardrobes for two bedrooms. Measurements provided. Prefer oak or walnut finish with soft-close hinges...",
];

export default function MaiToolkit() {
  const [barSetIdx, setBarSetIdx] = useState(0);
  const [pinIdx, setPinIdx] = useState(0);
  const [cursorIdx, setCursorIdx] = useState(0);
  const [cursorClicking, setCursorClicking] = useState(false);
  const [activeTraderIdx, setActiveTraderIdx] = useState(0);

  const aiCardBriefIdxRef = useRef(0);
  const aiCardTextNodeRef = useRef<HTMLSpanElement>(null);
  const aiCardTypingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const typeAiCardText = (target: string) => {
    if (aiCardTypingRef.current) clearTimeout(aiCardTypingRef.current);
    if (aiCardTextNodeRef.current) aiCardTextNodeRef.current.textContent = "";
    let i = 0;
    const typeChar = () => {
      i++;
      if (aiCardTextNodeRef.current) aiCardTextNodeRef.current.textContent = target.substring(0, i);
      if (i < target.length) aiCardTypingRef.current = setTimeout(typeChar, 22);
    };
    aiCardTypingRef.current = setTimeout(typeChar, 200);
  };

  useEffect(() => {
    aiCardTypingRef.current = setTimeout(() => typeAiCardText(AI_CARD_BRIEFS[0]), 600);
    return () => { if (aiCardTypingRef.current) clearTimeout(aiCardTypingRef.current); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBarSetIdx(b => (b + 1) % BAR_SETS.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setPinIdx(p => (p + 1) % PIN_POSITIONS.length), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCursorIdx(c => {
        const next = (c + 1) % CURSOR_WAYPOINTS.length;
        if (next === CURSOR_CLICK_IDX) {
          setCursorClicking(true);
          setTimeout(() => setCursorClicking(false), 350);
          setTimeout(() => {
            aiCardBriefIdxRef.current = (aiCardBriefIdxRef.current + 1) % AI_CARD_BRIEFS.length;
            typeAiCardText(AI_CARD_BRIEFS[aiCardBriefIdxRef.current]);
          }, 300);
        }
        return next;
      });
    }, 1400);
    return () => { clearInterval(t); if (aiCardTypingRef.current) clearTimeout(aiCardTypingRef.current); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTraderIdx(i => (i + 1) % 4), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="toolkit" className="w-full py-12">
      <div className="mx-auto">
        <div className="text-center mb-16 px-4">
          <span className="text-xs font-bold text-[#1F5CAC] uppercase tracking-wide mb-3 block">YOUR MAI TOOLKIT</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Unlock Powerful Tools After Sign Up</h2>
          <span className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto block">
            Everything You Need to{" "}
            <a href="/trader-list" className="text-[#1F5CAC]" target="_blank">Hire the Right Tradesperson</a>
          </span>
        </div>

        <div className="grid grid-flow-col auto-cols-[85vw] md:auto-cols-[55vw] lg:auto-cols-[420px] xl:auto-cols-[400px] 2xl:grid-flow-row 2xl:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden 2xl:overflow-visible snap-x 2xl:snap-none snap-mandatory no-scrollbar px-4">

          {/* Dashboard Card */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer snap-start">
            <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">Dashboard</h3>
            <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px] block">Keep track of every job in one clean dashboard, from your first quote request to the final sign-off.</span>
            <div className="w-full max-w-[370px] flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-2xl pb-2">
              <div className="w-full flex-1 mt-auto rounded-2xl bg-white border border-gray-100 shadow-[0_2px_25px_rgba(0,0,0,0.04)] p-4 flex flex-col pointer-events-none select-none relative h-56 xl:h-64">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-gray-500">Project Overview</span>
                  <div className="text-[9px] text-gray-500 font-medium px-2 py-1 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-1">
                    This Year - 2026
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none"><path d="M3 4L0 0H6L3 4Z" fill="#A0AEC0"/></svg>
                  </div>
                </div>
                <div className="flex justify-end gap-3 w-full flex-wrap">
                  {([["#003F6B","Posted Project"],["#1E8AC9","Active Project"],["#6BB5DB","Pending Project"],["#0BA560","Completed Project"]] as [string,string][]).map(([color, label]) => (
                    <div key={label} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-[8px] font-medium text-gray-500">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex items-end justify-center gap-3 md:gap-4 border-l border-b border-gray-100 relative mb-1 px-4">
                  <div className="absolute -left-2.5 top-0 text-[7px] text-gray-400 h-full flex flex-col justify-between pb-1 text-right">
                    {["50","40","30","20","10","0"].map(n => <span key={n}>{n}</span>)}
                  </div>
                  {BAR_SETS[barSetIdx].map((bars, i) => (
                    <div key={i} className="flex items-end gap-[2px] h-[100px] justify-around relative w-[36px] md:w-[56px] flex-shrink-0">
                      {bars.map((h, j) => (
                        <div key={j} className="w-2.5 rounded-t-[3px] transition-all duration-500"
                          style={{ height: `${h}%`, backgroundColor: ["#003F6B","#1E8AC9","#6BB5DB","#0BA560"][j] }} />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex justify-evenly w-full text-[8px] text-gray-400 absolute bottom-1 left-0 right-0">
                  {["Jan","Feb","Mar","Apr"].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
              <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] rounded-lg p-2.5 w-full max-w-72 z-10 border border-gray-50">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] font-bold text-gray-700">Ratings</span>
                  <span className="text-[8px] text-gray-400 bg-gray-50 px-1 py-0.5 rounded">All Time</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#FDBA31] text-[10px]">⭐</span>
                  <span className="text-xs font-bold text-gray-800">4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search With Postcode Card */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col snap-start">
            <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">Search With Postcode</h3>
            <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px] block">Find tradespeople near you, just enter your county and browse verified, rated tradespeople in your area.</span>
            <div className="flex-1 mt-auto overflow-hidden flex select-none h-56">
              <div className="hidden md:flex w-[45%] flex-col justify-center gap-2.5 p-3 z-10 bg-white relative">
                {[
                  { src: "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775566344052-User1.png", alt: "Devon Lane" },
                  { src: "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775566369346-User2.png", alt: "Eleanor Pena" },
                  { src: "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775566390752-User3.png", alt: "Robert Fox" },
                  { src: "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775566409028-User4.png", alt: "Wade Warren" },
                ].map(({ src, alt }, i) => (
                  <div key={alt} className="flex items-center gap-2.5 w-full px-2 py-1.5 rounded-xl border bg-white shadow-[0_1px_5px_rgba(0,0,0,0.02)]"
                    style={{ transform: `translateY(${activeTraderIdx === i ? -6 : 0}px)`, zIndex: activeTraderIdx === i ? 2 : 1, position: "relative", transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), border-color 0.4s", borderColor: activeTraderIdx === i ? "#1E8AC9" : "#f3f4f6" }}>
                    <img src={src} alt={alt} className="w-full h-full" />
                  </div>
                ))}
              </div>
              <div className="relative w-[55%] flex-1 flex items-center justify-center">
                <div className="w-full h-52 relative bg-[#EAF5F0] rounded-2xl overflow-hidden">
                  <img src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775828227781-image.png" alt="Map" className="w-full h-full object-cover transition-all duration-700 scale-[1.4]" />
                  <div className="absolute w-6 h-6 -translate-x-1/2 translate-y-1/2"
                    style={{ left: PIN_POSITIONS[pinIdx].left, bottom: PIN_POSITIONS[pinIdx].bottom, transition: "left 1s ease-in-out, bottom 1s ease-in-out" }}>
                    <img src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775567468424-Frame_2147233423.png" alt="Pin" className="w-full h-full object-contain drop-shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Write With AI Card */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col snap-start">
            <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">Write With AI</h3>
            <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px] block">Not sure how to describe your project? Our AI helps you write a clear, detailed brief in seconds.</span>
            <div className="flex-1 mt-auto rounded-2xl p-5 flex flex-col justify-center pointer-events-none select-none relative overflow-hidden h-56 xl:h-64">
              <div className="w-full bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-4 text-[11px] text-gray-600 font-medium tracking-wide">Modern Kitchen Renovation</div>
              <div className="w-full h-[100px] bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[10px] sm:text-[11px] text-gray-500 leading-relaxed overflow-hidden">
                <span ref={aiCardTextNodeRef} />
                <span className="inline-block w-[1px] h-[9px] bg-gray-400 animate-blink" style={{ verticalAlign: "middle" }} />
              </div>
              <div className="flex justify-end items-center mt-2">
                <div className="bg-[#EBF7FF] border border-[#CAE6FA] text-[#0077C8] px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-all duration-150 shadow-[0_4px_15px_rgba(0,119,200,0.12)]"
                  style={{ transform: cursorClicking ? "scale(0.91)" : "scale(1)", boxShadow: cursorClicking ? "0 1px 4px rgba(0,119,200,0.10)" : undefined }}>
                  <span className="text-[#0077C8] text-[13px] animate-pulse">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM8.00065 4.33325 10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"/>
                    </svg>
                  </span>
                  Write with MAI AI
                </div>
              </div>
              <div className="absolute left-3 bottom-3 w-10 h-10 z-20 pointer-events-none"
                style={{ transform: `translate(${CURSOR_WAYPOINTS[cursorIdx].x}px, ${CURSOR_WAYPOINTS[cursorIdx].y}px) scale(${cursorClicking ? 0.82 : 1})`, transition: "transform 0.5s" }}>
                <img src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775715990989-image_2808_(1).png" alt="cursor" className="w-full h-full object-contain drop-shadow-md" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
