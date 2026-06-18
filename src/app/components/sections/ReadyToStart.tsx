"use client";
import { motion } from "framer-motion";

export default function ReadyToStart() {
  return (
    <section className="relative px-6 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-[var(--font-montserrat)]">
      <div className="w-full py-12 overflow-hidden">
        <div className="w-full h-64 md:h-80 rounded-3xl md:rounded-[2rem] overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Banner"
            src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775571051447-construction-site-with-cranes-european-business-quarter-daylight-wide-angle-nikon-z9-30mm-lens_1.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 text-center w-full md:max-w-2xl px-4">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white text-2xl md:text-4xl font-bold"
            >
              Ready To Get Started?
            </motion.h3>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white text-sm md:text-base"
            >
              Have 10 minutes? Check out our case studies. We&apos;ve been in the industry for more than a decade. So there&apos;s lots of exciting stuff in here.
            </motion.span>
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              type="button"
              className="px-8 py-2 mt-6 rounded-xl text-sm bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Sign Up Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
