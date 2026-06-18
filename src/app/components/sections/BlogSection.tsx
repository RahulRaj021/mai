"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "../data";

export default function BlogSection() {
  const [blogMobileDot, setBlogMobileDot] = useState(0);
  const blogMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blogMobileRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round((el.scrollLeft / el.scrollWidth) * BLOG_POSTS.length);
      setBlogMobileDot(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-[var(--font-montserrat)]">
      <div className="flex flex-col items-center h-full py-12 overflow-hidden">
        <div className="text-[#222222] w-full space-y-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10 px-4"
          >
            <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-2">KNOWLEDGE HUB</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Latest Blog</h2>
            <p className="text-sm md:text-md text-gray-500 max-w-5xl mx-auto">Our articles cover a range of topics to help you stay informed and make better decisions. Dive into expert advice and stay ahead in the industry with our engaging and informative content.</p>
          </motion.div>
        </div>

        <div className="w-full h-full relative">
          {/* Desktop: 3-column masonry-style grid */}
          <div className="hidden md:flex w-full h-full space-x-5 px-4 md:px-0">
            {/* Column 1 */}
            <div className="flex flex-col w-1/3 space-y-5 h-full">
              {([0, 1] as const).map((idx, colIdx) => (
                <motion.div
                  key={BLOG_POSTS[idx].slug}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: (idx + 1) * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl ${colIdx === 0 ? "h-[216px]" : "h-[272px]"}`}
                >
                  <a target="_blank" rel="noopener noreferrer" href={`/blogs/${BLOG_POSTS[idx].slug}`} className="block w-full h-full">
                    <Image alt={`blog: ${BLOG_POSTS[idx].title}`} src={BLOG_POSTS[idx].image} width={1000} height={1000} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-[#007BD100] md:transform md:translate-y-full md:transition-transform md:duration-700 ease-in-out group-hover:translate-y-0">
                      <h3 className="text-white font-semibold capitalize text-lg line-clamp-1">{BLOG_POSTS[idx].title}</h3>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-1/3 space-y-5 h-full">
              {([2, 3] as const).map((idx, colIdx) => (
                <motion.div
                  key={BLOG_POSTS[idx].slug}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: (idx + 1) * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl ${colIdx === 0 ? "h-[272px]" : "h-[216px]"}`}
                >
                  <a target="_blank" rel="noopener noreferrer" href={`/blogs/${BLOG_POSTS[idx].slug}`} className="block w-full h-full">
                    <Image alt={`blog: ${BLOG_POSTS[idx].title}`} src={BLOG_POSTS[idx].image} width={1000} height={1000} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-[#007BD100] md:transform md:translate-y-full md:transition-transform md:duration-700 ease-in-out group-hover:translate-y-0">
                      <h3 className="text-white font-semibold capitalize text-lg line-clamp-1">{BLOG_POSTS[idx].title}</h3>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col w-1/3 space-y-5 h-full">
              {([4, 5] as const).map((idx, colIdx) => (
                <motion.div
                  key={BLOG_POSTS[idx].slug}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: (idx + 1) * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl ${colIdx === 0 ? "h-[216px]" : "h-[272px]"}`}
                >
                  <a target="_blank" rel="noopener noreferrer" href={`/blogs/${BLOG_POSTS[idx].slug}`} className="block w-full h-full">
                    <Image alt={`blog: ${BLOG_POSTS[idx].title}`} src={BLOG_POSTS[idx].image} width={1000} height={1000} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-[#007BD100] md:transform md:translate-y-full md:transition-transform md:duration-700 ease-in-out group-hover:translate-y-0">
                      <h3 className="text-white font-semibold capitalize text-lg line-clamp-1">{BLOG_POSTS[idx].title}</h3>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: horizontal snap scroll */}
          <div ref={blogMobileRef} className="flex md:hidden w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory py-4 px-4 -mx-4 no-scrollbar gap-5">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-[75vw] shrink-0 snap-center group cursor-pointer relative rounded-xl overflow-hidden shadow-lg h-[350px]"
              >
                <a target="_blank" rel="noopener noreferrer" className="block w-full h-full" href={`/blogs/${post.slug}`}>
                  <Image alt={`blog: ${post.title}`} src={post.image} width={1000} height={1000} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-[#007BD100]">
                    <h3 className="text-white font-semibold capitalize text-lg line-clamp-2 shadow-sm drop-shadow-md">{post.title}</h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-5">
            {BLOG_POSTS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to item ${i + 1}`}
                onClick={() => {
                  const el = blogMobileRef.current;
                  if (!el) return;
                  el.scrollTo({ left: (el.scrollWidth / BLOG_POSTS.length) * i, behavior: "smooth" });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${blogMobileDot === i ? "w-6 bg-[#1F5CAC]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a target="_blank" rel="noopener noreferrer" className="text-white bg-[#1F5CAC] shadow-md font-medium px-6 py-2 text-[14px] rounded-full" href="/blogs">View All Blogs</a>
        </div>
      </div>
    </section>
  );
}
