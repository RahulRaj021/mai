# MAI — My AI Project

A Next.js web app for the [MAI platform](https://www.myproject.ai/) — connecting homeowners with verified UK tradespeople.

## Tech Stack

- **Next.js** (App Router, `"use client"` components)
- **Tailwind CSS** utility-first styling
- **Framer Motion** scroll-triggered animations
- **TypeScript**

## Project Structure

```
src/app/
├── page.tsx                        # Root page — imports all section components
├── globals.css                     # Global styles & keyframe animations
├── layout.tsx                      # Root layout
└── components/
    ├── Header.tsx                  # Nav header with dropdowns
    ├── FloatingButton.tsx          # Animated floating AI chat button
    ├── data.ts                     # Shared constants (services, projects, testimonials…)
    └── sections/
        ├── HeroSection.tsx         # Hero with typing animation & search
        ├── ServicesCarousel.tsx    # Marquee services strip
        ├── MaiToolkit.tsx          # Animated dashboard / map / AI cards
        ├── HowItWorks.tsx          # 4-step process with IntersectionObserver
        ├── RealProjects.tsx        # Active UK project cards
        ├── StoneOffcutsForm.tsx    # Stone marketplace brief form
        ├── WhyChooseMAI.tsx        # Trader slider
        ├── OurDifference.tsx       # 4-panel Framer Motion grid
        ├── BlogSection.tsx         # Masonry blog grid + mobile scroll
        ├── Testimonials.tsx        # Testimonial cards with parallax bg
        ├── ReadyToStart.tsx        # CTA banner
        └── Footer.tsx              # Cursor-reactive glow footer
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
