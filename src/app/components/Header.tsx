"use client";
import { useState, useEffect, useRef } from "react";

export default function Header({ heroVisible }: { heroVisible: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [maiAwardsOpen, setMaiAwardsOpen] = useState(false);
  const howItWorksTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maiAwardsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (setter: (v: boolean) => void, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setter(true);
  };
  const closeDropdown = (setter: (v: boolean) => void, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    timerRef.current = setTimeout(() => setter(false), 120);
  };

  return (
    <section className="w-full top-0 z-50 fixed">
      {/* Top row */}
      <div
        className="flex items-center justify-between pointer-events-auto px-4 sm:px-10 xl:px-24 h-[88px]"
        style={{ background: "linear-gradient(90deg, rgb(10, 22, 40) 0%, rgb(13, 31, 60) 100%)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}
      >
        <a className="flex items-center gap-2.5 flex-shrink-0" href="/">
          <img alt="Myproject.ai" width={2200} height={2200} decoding="async"
            className="w-[88px] md:w-24 xl:w-28 h-auto brightness-0 invert"
            src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1754994240150-Group_5258.png"
            style={{ color: "transparent" }} />
        </a>

        <div className={`hidden lg:flex flex-1 max-w-md transition-all duration-500 ${heroVisible ? "opacity-0 -translate-y-1 pointer-events-none" : "opacity-100 translate-y-0"}`}>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-[50px]">
              <input placeholder="Search Here"
                className="flex-1 h-full px-6 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium"
                type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <button className="flex items-center justify-center w-[40px] h-[40px] mr-[5px] rounded-full transition hover:scale-95">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#EDEDED" />
                  <path d="M16.5 23.9968C20.366 23.9968 23.5 20.8628 23.5 16.9968C23.5 13.1308 20.366 9.99683 16.5 9.99683C12.634 9.99683 9.5 13.1308 9.5 16.9968C9.5 20.8628 12.634 23.9968 16.5 23.9968Z" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 12.9968C17.5609 12.9968 18.5783 13.4183 19.3284 14.1684C20.0786 14.9185 20.5 15.936 20.5 16.9968" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.5 21.9968L24.5 24.9968" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-2.5 cursor-pointer px-3 py-2 rounded-full transition-all" style={{ background: "rgba(255, 255, 255, 0.07)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, rgb(30, 138, 201), rgb(0, 63, 107))" }}>
              <svg width="16" height="16" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <circle opacity="0.25" cx="17" cy="17" r="17" fill="white" />
                <path opacity="0.4" d="M17.0026 8.33203C14.6009 8.33203 12.6484 10.2845 12.6484 12.6862C12.6484 15.042 14.4909 16.9487 16.8926 17.0312C16.9659 17.022 17.0393 17.022 17.0943 17.0312H17.1584C18.2853 16.9936 19.3535 16.5192 20.137 15.7084C20.9204 14.8975 21.3579 13.8137 21.3568 12.6862C21.3568 10.2845 19.4043 8.33203 17.0026 8.33203Z" fill="white" />
                <path d="M21.6569 19.4663C19.0994 17.7612 14.9285 17.7612 12.3527 19.4663C11.1885 20.2454 10.5469 21.2996 10.5469 22.4271C10.5469 23.5546 11.1885 24.5996 12.3435 25.3696C13.6269 26.2313 15.3135 26.6621 17.0002 26.6621C18.6869 26.6621 20.3735 26.2313 21.6569 25.3696C22.8119 24.5904 23.4535 23.5454 23.4535 22.4087C23.4444 21.2812 22.8119 20.2363 21.6569 19.4663Z" fill="white" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm">Sign In</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgba(255,255,255,0.4)" }}>
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
            </svg>
          </div>
        </div>

        {/* Mobile icons */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer" aria-label="Search">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="16.5" fill="white" stroke="#EDEDED" />
              <path d="M16.5 23.9968C20.366 23.9968 23.5 20.8628 23.5 16.9968C23.5 13.1308 20.366 9.99683 16.5 9.99683C12.634 9.99683 9.5 13.1308 9.5 16.9968C9.5 20.8628 12.634 23.9968 16.5 23.9968Z" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.5 21.9968L24.5 24.9968" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <svg width="16" height="16" viewBox="0 0 34 34" fill="none" className="text-white">
              <circle opacity="0.25" cx="17" cy="17" r="17" fill="white" />
              <path opacity="0.4" d="M17.0026 8.33203C14.6009 8.33203 12.6484 10.2845 12.6484 12.6862C12.6484 15.042 14.4909 16.9487 16.8926 17.0312C16.9659 17.022 17.0393 17.022 17.0943 17.0312H17.1584C18.2853 16.9936 19.3535 16.5192 20.137 15.7084C20.9204 14.8975 21.3579 13.8137 21.3568 12.6862C21.3568 10.2845 19.4043 8.33203 17.0026 8.33203Z" fill="white" />
              <path d="M21.6569 19.4663C19.0994 17.7612 14.9285 17.7612 12.3527 19.4663C11.1885 20.2454 10.5469 21.2996 10.5469 22.4271C10.5469 23.5546 11.1885 24.5996 12.3435 25.3696C13.6269 26.2313 15.3135 26.6621 17.0002 26.6621C18.6869 26.6621 20.3735 26.2313 21.6569 25.3696C22.8119 24.5904 23.4535 23.5454 23.4535 22.4087C23.4444 21.2812 22.8119 20.2363 21.6569 19.4663Z" fill="white" />
            </svg>
          </button>
          <button className="text-white text-2xl focus:outline-none cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom nav row */}
      <div className="hidden lg:flex items-center justify-between px-6 sm:px-10 xl:px-24 h-11 backdrop-blur-md border-b border-white/10"
        style={{ background: "linear-gradient(90deg, rgba(5,12,28,0.45) 0%, rgba(10,22,40,0.45) 100%)" }}>
        <div className="flex items-center gap-1">
          <a href="/"><span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all" style={{ color: "rgba(255,255,255,0.82)", textShadow: "rgba(0,0,0,0.8) 0px 1px 4px" }}>Home</span></a>

          {/* How It Works dropdown */}
          <div className="relative"
            onMouseEnter={() => openDropdown(setHowItWorksOpen, howItWorksTimer)}
            onMouseLeave={() => closeDropdown(setHowItWorksOpen, howItWorksTimer)}>
            <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all" style={{ color: "rgba(255,255,255,0.92)", textShadow: "rgba(0,0,0,0.8) 0px 1px 4px" }}>
              How It Works
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={`transition-transform duration-200 ${howItWorksOpen ? "rotate-180" : ""}`} height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
              </svg>
            </span>
            <div className="absolute top-full left-0 mt-1 w-44 rounded-lg shadow-xl overflow-hidden z-50"
              style={{ background: "#0a1628", border: "1px solid rgba(255,255,255,0.08)", opacity: howItWorksOpen ? 1 : 0, transform: howItWorksOpen ? "translateY(0)" : "translateY(-6px)", transition: "opacity 0.18s ease, transform 0.18s ease", pointerEvents: howItWorksOpen ? "auto" : "none" }}>
              {[["Project Owner", "/how-it-works/project-owner"], ["Trader", "/how-it-works/trader"], ["Intern", "/how-it-works/intern"]].map(([label, href]) => (
                <a key={label} href={href} className="block px-4 py-2.5 text-[13px] text-white/85 hover:bg-white/10 hover:text-white transition-colors">{label}</a>
              ))}
            </div>
          </div>

          <a href="/projects"><span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all" style={{ color: "rgba(255,255,255,0.82)", textShadow: "rgba(0,0,0,0.8) 0px 1px 4px" }}>Projects</span></a>
          <a href="/blogs"><span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all" style={{ color: "rgba(255,255,255,0.82)", textShadow: "rgba(0,0,0,0.8) 0px 1px 4px" }}>Blogs</span></a>

          {/* Mai Awards dropdown */}
          <div className="relative"
            onMouseEnter={() => openDropdown(setMaiAwardsOpen, maiAwardsTimer)}
            onMouseLeave={() => closeDropdown(setMaiAwardsOpen, maiAwardsTimer)}>
            <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all" style={{ color: "rgba(255,255,255,0.92)", textShadow: "rgba(0,0,0,0.8) 0px 1px 4px" }}>
              Mai Awards
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={`transition-transform duration-200 ${maiAwardsOpen ? "rotate-180" : ""}`} height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
              </svg>
            </span>
            <div className="absolute top-full left-0 mt-1 w-40 rounded-lg shadow-xl overflow-hidden z-50"
              style={{ background: "#0a1628", border: "1px solid rgba(255,255,255,0.08)", opacity: maiAwardsOpen ? 1 : 0, transform: maiAwardsOpen ? "translateY(0)" : "translateY(-6px)", transition: "opacity 0.18s ease, transform 0.18s ease", pointerEvents: maiAwardsOpen ? "auto" : "none" }}>
              {[["Awards", "/mai-awards"], ["Sponsorship", "/sponsorship"]].map(([label, href]) => (
                <a key={label} href={href} className="block px-4 py-2.5 text-[13px] text-white/85 hover:bg-white/10 hover:text-white transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a target="_self" className="flex items-center gap-1.5 px-3 rounded-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer" href="/post-a-project">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M17.5405 2.16663H8.46214C4.5188 2.16663 2.16797 4.51746 2.16797 8.46079V17.5283C2.16797 21.4825 4.5188 23.8333 8.46214 23.8333H17.5296C21.473 23.8333 23.8238 21.4825 23.8238 17.5391V8.46079C23.8346 4.51746 21.4838 2.16663 17.5405 2.16663Z" fill="white" />
              <path d="M17.3346 12.1875H13.8138V8.66663C13.8138 8.22246 13.4455 7.85413 13.0013 7.85413C12.5571 7.85413 12.1888 8.22246 12.1888 8.66663V12.1875H8.66797C8.2238 12.1875 7.85547 12.5558 7.85547 13C7.85547 13.4441 8.2238 13.8125 8.66797 13.8125H12.1888V17.3333C12.1888 17.7775 12.5571 18.1458 13.0013 18.1458C13.4455 18.1458 13.8138 17.7775 13.8138 17.3333V13.8125H17.3346C17.7788 13.8125 18.1471 13.4441 18.1471 13C18.1471 12.5558 17.7788 12.1875 17.3346 12.1875Z" fill="white" />
            </svg>
            Post a Project
          </a>
          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.12)" }} />
          <a target="_self" className="flex items-center gap-1.5 px-3 rounded-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer" href="/projects">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M10.3035 4.58106L19.5769 9.21773C23.7369 11.2977 23.7369 14.6994 19.5769 16.7794L10.3035 21.4161C4.06352 24.5361 1.51768 21.9794 4.63768 15.7502L5.58018 13.8761C5.85102 13.3236 5.85102 12.6844 5.58018 12.1319L4.63768 10.2469C1.51768 4.01772 4.07435 1.46106 10.3035 4.58106Z" fill="white" />
              <path d="M16.0766 13.8125H10.2266C9.7824 13.8125 9.41406 13.4442 9.41406 13C9.41406 12.5558 9.7824 12.1875 10.2266 12.1875H16.0766C16.5207 12.1875 16.8891 12.5558 16.8891 13C16.8891 13.4442 16.5207 13.8125 16.0766 13.8125Z" fill="white" />
            </svg>
            Send Proposals
          </a>
          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.12)" }} />
          <a target="_self" className="flex items-center gap-1.5 px-3 rounded-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer" href="/projects">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.9" d="M22.8496 7.5603C21.9287 6.54197 20.3904 6.0328 18.1587 6.0328H17.8987V5.98947C17.8987 4.16947 17.8987 1.91614 13.8254 1.91614H12.1787C8.10541 1.91614 8.10541 4.1803 8.10541 5.98947V6.04364H7.84541C5.60291 6.04364 4.07541 6.5528 3.15457 7.57114C2.08207 8.7628 2.11458 10.3661 2.22291 11.4603L2.23374 11.5361L2.34207 12.6736C2.35291 12.6845 2.37457 12.7061 2.39624 12.717C2.75374 12.9553 3.12207 13.1936 3.51207 13.4103C3.66374 13.5078 3.82624 13.5945 3.98874 13.6811C5.84124 14.6995 7.87791 15.382 9.94707 15.7178C10.0446 16.7361 10.4887 17.9278 12.8612 17.9278C15.2337 17.9278 15.6996 16.747 15.7754 15.6961C17.9854 15.3386 20.1196 14.5695 22.0479 13.4428C22.1129 13.4103 22.1562 13.3778 22.2104 13.3453C22.7087 13.0636 23.1746 12.7603 23.6296 12.4245C23.6527 12.4123 23.6715 12.3934 23.6837 12.3703L23.7271 11.9803L23.7812 11.4711C23.7921 11.4061 23.7921 11.352 23.8029 11.2761C23.8896 10.182 23.8679 8.68697 22.8496 7.5603ZM14.1829 14.9811C14.1829 16.1295 14.1829 16.3028 12.8504 16.3028C11.5179 16.3028 11.5179 16.097 11.5179 14.992V13.627H14.1829V14.9811ZM9.65458 6.0328V5.98947C9.65458 4.1478 9.65458 3.4653 12.1787 3.4653H13.8254C16.3496 3.4653 16.3496 4.15864 16.3496 5.98947V6.04364H9.65458V6.0328Z" fill="white" />
              <path opacity="0.3" d="M22.2082 13.325L22.0457 13.4225C20.1089 14.548 17.9834 15.3116 15.7732 15.6758C15.6865 16.7158 15.2315 17.9075 12.859 17.9075C10.4865 17.9075 10.0315 16.7266 9.94484 15.6975C7.87568 15.3725 5.83901 14.69 3.98651 13.6608C3.82401 13.5741 3.66151 13.4875 3.50984 13.39C3.11984 13.1733 2.75151 12.935 2.39401 12.6966C2.37234 12.6858 2.35068 12.6641 2.33984 12.6533L3.00068 19.7058C3.22818 21.8616 4.11651 24.0825 8.88318 24.0825H17.1382C21.9048 24.0825 22.7932 21.8616 23.0207 19.695L23.7032 12.35C23.691 12.3731 23.6721 12.3919 23.649 12.4041C23.1832 12.74 22.7065 13.0541 22.2082 13.325Z" fill="white" />
            </svg>
            Apply Internship
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-[#0a1628] border-b border-white/5 shadow-xl lg:hidden text-white">
          <nav className="flex flex-col text-base font-semibold text-white/95 px-5 py-4 gap-1">
            <a href="/" className="rounded-lg px-3 py-2.5 hover:bg-white/5">Home</a>
            <a href="#how-it-works" className="rounded-lg px-3 py-2.5 hover:bg-white/5">How It Works</a>
            <div className="pl-6 flex flex-col gap-0.5">
              {["Project Owner", "Trader", "Intern"].map(item => (
                <a key={item} href={`/how-it-works/${item.toLowerCase().replace(" ", "-")}`} className="rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white/70">{item}</a>
              ))}
            </div>
            <a href="/projects" className="rounded-lg px-3 py-2.5 hover:bg-white/5">Projects</a>
            <a href="/blogs" className="rounded-lg px-3 py-2.5 hover:bg-white/5">Blogs</a>
            <span className="rounded-lg px-3 py-2.5 hover:bg-white/5 cursor-pointer">Mai Awards</span>
            <div className="pl-6 flex flex-col gap-0.5">
              {["Awards", "Sponsorship"].map(item => (
                <a key={item} href={`/${item.toLowerCase()}`} className="rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white/70">{item}</a>
              ))}
            </div>
            <hr className="border-white/5 my-1" />
            <a href="/post-a-project" className="rounded-lg px-3 py-2.5 hover:bg-white/5 flex items-center gap-2 text-sm">
              <span className="h-4 w-4 bg-white/20 rounded-full flex items-center justify-center text-xs">+</span>
              Post a Project
            </a>
            <a href="/projects" className="rounded-lg px-3 py-2.5 hover:bg-white/5 text-sm">Send Proposals</a>
            <a href="/projects" className="rounded-lg px-3 py-2.5 hover:bg-white/5 text-sm">Apply Internship</a>
          </nav>
        </div>
      )}
    </section>
  );
}
