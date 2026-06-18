"use client";
import { motion } from "framer-motion";

export default function OurDifference() {
  return (
    <section className="relative px-6 sm:px-10 xl:px-24 w-full bg-white font-[var(--font-montserrat)]">
      <div className="w-full flex flex-col items-center py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 px-4"
        >
          <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">OUR DIFFERENCE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Where Traders &amp; Homeowners Both Win</h2>
          <p className="text-sm md:text-md text-gray-500 max-w-2xl mx-auto leading-relaxed">From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence.</p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -32, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative border-b border-gray-200 md:border-r p-6 md:pl-0"
            >
              <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
                <span className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] font-base text-[#E8F3FF] opacity-90 z-0 select-none leading-none tracking-tighter">01</span>
                <h3 className="text-[1.1rem] md:text-2xl font-bold text-gray-800 relative z-10 pt-6 md:pt-14">AI-Matched Traders</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10">Stop sifting through hundreds of irrelevant trader profiles. MAI&apos;s intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative border-b border-gray-200 p-6 md:pr-0"
            >
              <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
                <span className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] font-base text-[#E8F9EE] opacity-90 z-0 select-none leading-none tracking-tighter">02</span>
                <h3 className="text-[1.1rem] md:text-2xl font-bold text-gray-800 relative z-10 pt-6 md:pt-14">End-to-End Project Transparency</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10">From milestones to payments, every stage of your project lives in one place. MAI&apos;s real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -32, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative border-b border-gray-200 md:border-b-0 md:border-r p-6 md:pl-0 md:pb-0"
            >
              <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
                <span className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] font-base text-[#FFF0F0] opacity-90 z-0 select-none leading-none tracking-tighter">03</span>
                <h3 className="text-[1.1rem] md:text-2xl font-bold text-gray-800 relative z-10 pt-6 md:pt-14">Milestone-Secured Payments</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10">Your investment is protected at every step. MAI&apos;s secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.65 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative p-6 md:pr-0 md:pb-0"
            >
              <div className="relative mb-3 mt-3 md:mt-0 md:mb-5">
                <span className="absolute -left-3 md:left-8 -top-8 md:top-2 text-[100px] font-base text-[#F3EBFF] opacity-90 z-0 select-none leading-none tracking-tighter">04</span>
                <h3 className="text-[1.1rem] md:text-2xl font-bold text-gray-800 relative z-10 pt-6 md:pt-14">A Verified Community You Can Trust</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10">Every professional on MAI is rigorously reviewed, verified, and rated by the community. You&apos;re not hiring blindly, you&apos;re choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
