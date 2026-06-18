"use client";
import { useState } from "react";

export default function StoneOffcutsForm() {
  const [stoneTitle, setStoneTitle] = useState("");
  const [stoneType, setStoneType] = useState("");
  const [stoneDesc, setStoneDesc] = useState("");
  const [stoneBudget, setStoneBudget] = useState(3500);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setStoneTitle(""); setStoneType(""); setStoneDesc(""); setStoneBudget(3500);
    }, 4500);
  };

  return (
    <section id="marketplace-form" className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-[var(--font-montserrat)] my-12">
      <div className="w-full py-12 bg-white overflow-hidden">
        <div className="mx-auto w-full flex flex-col lg:flex-row gap-12 xl:gap-24 items-center lg:items-start px-0">

          {/* Left */}
          <div className="w-full lg:w-5/12 flex flex-col pt-4">
            <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">Stone Offcuts Marketplace</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Submit Your Project. Let MAI Find Your Perfect Stone.</h2>
            <p className="text-sm md:text-md text-[#667588] max-w-6xl mx-auto leading-relaxed">Discover discounted stone offcuts on MAI, connecting you with verified UK sellers for secure, budget-friendly options.</p>
            <div className="flex flex-col space-y-8 mt-8">
              {[
                { num: "1", bg: "bg-[#1A4CFF]/20", title: "Post Your Project", desc: "Describe what you need, add dimensions, set your budget." },
                { num: "2", bg: "bg-[#FF4D6D]/20", title: "Get Matched Instantly", desc: "MAI finds sellers with matching offcuts in the UK." },
                { num: "3", bg: "bg-[#FF9500]/20", title: "Buy Safely & Save", desc: "Secure payment, verified sellers, up to 70% cheaper." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-5">
                  <div className={`w-[42px] h-[42px] rounded-xl ${step.bg} font-bold flex items-center justify-center shrink-0 text-sm`}>{step.num}</div>
                  <div className="mt-0.5">
                    <h4 className="text-[17px] font-bold text-gray-600 mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-[14px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-4xl font-bold text-[#333333] mb-3">Find Your Perfect Stone Offcut</h3>
              <p className="text-gray-500 text-[15px] mb-8">Set your offcut budget and MAI does the rest</p>

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 text-3xl font-bold animate-bounce">✓</div>
                  <h4 className="text-lg font-bold text-[#003F6B]">Project Posted Successfully!</h4>
                  <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">
                    We have broadcasted your brief &quot;{stoneTitle}&quot; to verified UK stone sellers near you. Check your dashboard for incoming bids.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Project Title</label>
                      <input type="text" required value={stoneTitle} onChange={e => setStoneTitle(e.target.value)} placeholder="Enter project name"
                        className="px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] placeholder:text-gray-400 bg-white" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Stone Type</label>
                      <input type="text" required value={stoneType} onChange={e => setStoneType(e.target.value)} placeholder="Select stone type"
                        className="px-5 py-2.5 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] placeholder:text-gray-400 bg-white" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Project Description</label>
                    <textarea rows={3} required value={stoneDesc} onChange={e => setStoneDesc(e.target.value)} placeholder="Enter description"
                      className="px-5 py-2.5 rounded-2xl border border-gray-200 outline-none focus:border-[#1F5CAC] transition-colors w-full text-[14px] resize-none placeholder:text-gray-400 bg-white" />
                  </div>
                  <div>
                    <label className="text-[17px] font-bold text-gray-900 mb-6 block">Budget Range</label>
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-3 px-1">
                      <span>£300 (minimum)</span><span>£25,000 (maximum)</span>
                    </div>
                    <div className="relative w-full h-[8px] bg-gray-200 rounded-full mb-8">
                      <div className="absolute top-0 left-0 h-full rounded-full transition-colors duration-200"
                        style={{ width: `${((stoneBudget - 300) / (25000 - 300)) * 100}%`, backgroundColor: "rgb(8,54,145)" }} />
                      <input type="range" min="300" max="25000" step="1" value={stoneBudget} onChange={e => setStoneBudget(Number(e.target.value))}
                        className="absolute -top-3 left-0 w-full h-8 opacity-0 cursor-pointer appearance-none z-20" />
                      <div className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] border border-white rounded-full shadow-md z-10 pointer-events-none transform scale-110"
                        style={{ left: `calc(${((stoneBudget - 300) / (25000 - 300)) * 100}% - 9px)`, backgroundColor: "rgb(8,54,145)" }} />
                    </div>
                    <div className="flex items-center justify-center gap-0">
                      <span className="text-4xl font-extrabold" style={{ color: "rgb(8,54,145)" }}>£</span>
                      <input type="text" inputMode="numeric" value={stoneBudget}
                        onChange={e => { const v = Number(e.target.value.replace(/[^0-9]/g, "")); if (!isNaN(v)) setStoneBudget(Math.min(Math.max(v, 300), 25000)); }}
                        className="text-4xl font-extrabold text-center bg-transparent outline-none border-b-2 transition-colors duration-200 w-36"
                        style={{ color: "rgb(8,54,145)", borderColor: "rgb(8,54,145)" }} />
                    </div>
                  </div>
                  <button type="submit" disabled={!stoneTitle || !stoneType || !stoneDesc}
                    className={`w-full py-2.5 rounded-full text-[15px] shadow-md transition-all duration-200 ${stoneTitle && stoneType && stoneDesc ? "bg-[#083691] text-white hover:bg-[#083691]/90" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>
                    Post Your Stones Project Now
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
