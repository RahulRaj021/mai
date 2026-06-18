"use client";
import { useState, useEffect, useRef } from "react";

const FLOAT_SCHEMES = [
  {
    label: "Ask MAI AI",
    icon: 'sparkle',
    bg: 'linear-gradient(135deg, rgb(152,89,0) 0%, rgb(227,144,0) 45%, rgb(255,212,84) 100%)',
    glow: 'rgba(255,187,0,0.373)',
    pillBg: 'rgb(255,187,0)',
    pulseBg: 'rgba(0,102,161,0.19)',
    ringColor: 'rgba(0,150,199,0.8)',
    sparkle: 'rgb(125,211,252)',
  },
  {
    label: "Talk to MAI",
    icon: 'mic',
    bg: 'linear-gradient(135deg, rgb(21,128,61) 0%, rgb(34,197,94) 45%, rgb(74,222,128) 100%)',
    glow: 'rgba(34,197,94,0.45)',
    pillBg: 'rgb(34,197,94)',
    pulseBg: 'rgba(34,197,94,0.19)',
    ringColor: 'rgba(34,197,94,0.8)',
    sparkle: 'rgb(134,239,172)',
  },
  {
    label: "Need help?",
    icon: 'headphone',
    bg: 'linear-gradient(135deg, rgb(30,64,175) 0%, rgb(59,130,246) 45%, rgb(147,197,253) 100%)',
    glow: 'rgba(59,130,246,0.45)',
    pillBg: 'rgb(59,130,246)',
    pulseBg: 'rgba(59,130,246,0.19)',
    ringColor: 'rgba(59,130,246,0.8)',
    sparkle: 'rgb(147,197,253)',
  },
];

export default function FloatingButton() {
  const [floatSchemeIdx, setFloatSchemeIdx] = useState(0);
  const [floatIconVisible, setFloatIconVisible] = useState(true);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const floatHoveredRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (floatHoveredRef.current) return;
      setFloatIconVisible(false);
      setTimeout(() => {
        setFloatSchemeIdx(i => (i + 1) % FLOAT_SCHEMES.length);
        setFloatIconVisible(true);
      }, 320);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const scheme = FLOAT_SCHEMES[floatSchemeIdx];
  const ringRgb = scheme.ringColor;
  const halfRing = ringRgb.replace('0.8)', '0.667)');

  return (
    <div
      className="fixed bottom-6 right-6 z-50 select-none"
      style={{
        opacity: floatIconVisible ? 1 : 0,
        transform: floatIconVisible ? 'translateX(0)' : 'translateX(-220px)',
        transition: 'opacity 0.32s ease, transform 0.32s ease',
      }}
    >
      <div
        className="relative"
        onMouseEnter={() => { floatHoveredRef.current = true; setShowChatPopup(true); }}
        onMouseLeave={() => { floatHoveredRef.current = false; setShowChatPopup(false); }}
      >
        {/* Chat popup on hover */}
        <div
          className="absolute bottom-[calc(100%+14px)] right-0 w-[280px] rounded-2xl shadow-2xl pointer-events-none"
          style={{
            background: '#0d1b2a',
            opacity: showChatPopup ? 1 : 0,
            transform: showChatPopup ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.96)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          <div className="p-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-[15px]">Hi! I&apos;m MAI</span>
            </div>
            <p className="text-gray-300 text-[13px] leading-relaxed">
              Hi there! I&apos;m MAI 😊 I can help you register or log in, post a project, send a proposal, or apply for an internship and I can even do most of it for you. What would you like to do?
            </p>
          </div>
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10">
            <span className="text-gray-500 text-[11px] flex items-center gap-1.5 cursor-move select-none">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                <path d="M13 6v5h5V7.75l3.25 3.25L18 14.25V11h-5v5h3.25L13 19.25 9.75 16H13v-5H8v3.25L4.75 11 8 7.75V11h5V6H9.75L13 2.75 16.25 6H13z"/>
              </svg>
              Drag to move
            </span>
            <span className="text-emerald-400 text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Online 24/7
            </span>
          </div>
          <div className="absolute -bottom-[7px] right-5 w-3.5 h-3.5 rotate-45 border-r border-b border-transparent" style={{ background: '#0d1b2a' }} />
        </div>

        <button
          aria-label={scheme.label}
          className="relative focus:outline-none block"
          style={{ cursor: 'pointer', touchAction: 'none', padding: 0, background: 'none', border: 'none' }}
          onClick={() => alert("Launching MAI AI Help Assistant...")}
        >
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: `${scheme.glow} 0px 0px 20px 2px`, transition: 'box-shadow 0.8s ease' }} />
          <div className="mai-pulse-ring absolute inset-0 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${scheme.pulseBg} 0%, transparent 70%)`, transition: 'background 0.8s ease' }} />
          <div className="mai-pulse-ring-2 absolute inset-0 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${scheme.pulseBg} 0%, transparent 70%)`, transition: 'background 0.8s ease' }} />
          <div className="mai-pulse-ring-3 absolute inset-0 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${scheme.pulseBg} 0%, transparent 70%)`, transition: 'background 0.8s ease' }} />
          <div className="mai-spin-ring absolute inset-0 rounded-full pointer-events-none"
            style={{ background: `conic-gradient(transparent 0deg, ${ringRgb} 90deg, transparent 180deg, ${halfRing} 270deg, transparent 360deg)`, transition: 'background 0.8s ease' }} />
          {[0, 1, 2].map(i => (
            <div key={i} className={`mai-orbit-${i + 1} absolute pointer-events-none`}
              style={{ left: '50%', top: '50%', width: 0, height: 0 }}>
              <div className="absolute" style={{ left: i === 2 ? 42 : 36, top: 0, transform: 'translate(-50%,-50%)' }}>
                <svg viewBox="0 0 20 20" style={{ width: i === 0 ? 8 : i === 1 ? 6 : 10, height: i === 0 ? 8 : i === 1 ? 6 : 10, color: scheme.sparkle, filter: `drop-shadow(${scheme.sparkle.replace('rgb','rgba').replace(')', ',0.667)')} 0px 0px 4px)`, transition: 'color 0.8s ease' }} fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-white relative z-10 overflow-hidden"
            style={{ boxShadow: 'rgba(0,0,0,0.25) 0px 10px 25px -5px', background: scheme.bg, transition: 'background 0.8s ease' }}>
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)' }} />
            <div className="mai-shimmer absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)' }} />
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {scheme.icon === 'mic' ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              ) : scheme.icon === 'headphone' ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="currentColor">
                  <path d="M12 3C7.03 3 3 7.03 3 12v5c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-5c0-4.97-4.03-9-9-9z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" className="w-6 h-6 relative z-10" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </div>
        </button>

        {/* Label pill */}
        <div className="hidden md:block absolute right-[4.5rem] top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap">
          <div className="px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-1.5"
            style={{ background: scheme.pillBg, transition: 'background 0.8s ease' }}>
            <span className="text-white text-xs font-semibold">{scheme.label}</span>
            <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-t border-white/20"
            style={{ right: -4, background: scheme.pillBg, transition: 'background 0.8s ease' }} />
        </div>
      </div>
    </div>
  );
}
