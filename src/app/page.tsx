"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import FloatingButton from "./components/FloatingButton";
import HeroSection from "./components/sections/HeroSection";
import ServicesCarousel from "./components/sections/ServicesCarousel";
import MaiToolkit from "./components/sections/MaiToolkit";
import HowItWorks from "./components/sections/HowItWorks";
import RealProjects from "./components/sections/RealProjects";
import StoneOffcutsForm from "./components/sections/StoneOffcutsForm";
import WhyChooseMAI from "./components/sections/WhyChooseMAI";
import OurDifference from "./components/sections/OurDifference";
import BlogSection from "./components/sections/BlogSection";
import Testimonials from "./components/sections/Testimonials";
import ReadyToStart from "./components/sections/ReadyToStart";
import Footer from "./components/sections/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const check = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      setHeroVisible(window.scrollY < heroHeight * 0.85);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900">
      <FloatingButton />
      <Header heroVisible={heroVisible} />
      <HeroSection heroRef={heroRef} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ServicesCarousel />
        <MaiToolkit />
        <HowItWorks />
        <RealProjects />
        <StoneOffcutsForm />
      </main>
      <WhyChooseMAI />
      <OurDifference />
      <BlogSection />
      <Testimonials />
      <ReadyToStart />
      <Footer />
    </div>
  );
}
