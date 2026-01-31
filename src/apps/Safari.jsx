import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";
import { techStack } from '../constants';
import { useWindowStore } from '../store/store';
import CanvasLoader from '../canvas/CanvasLoader';

const ComputersCanvas = lazy(() => import('../canvas/Computers'));
gsap.registerPlugin(ScrollTrigger);

const SafariComponent = () => {

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const { openWindow, focusWindow } = useWindowStore();

  // --- Native macOS Scrollbar Fade Logic ---
  const handleScroll = () => {
    if (!isScrolling) setIsScrolling(true);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1200); // Fades out after 1.2s of inactivity
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (!scrollRef.current) return;

    // 1. Hero Entrance
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: "expo.out",
      delay: 0.5
    });

    // 2. Experience Section Slide
    gsap.from(".experience-box", {
      scrollTrigger: {
        trigger: ".experience-box",
        scroller: scrollRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 3. Tech Cards Staggered Slide-Up
    const cards = gsap.utils.toArray(".tech-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          scroller: scrollRef.current, // Ensure this is exactly your scrollable div
          start: "top bottom-=20",
          toggleActions: "play none none reverse",
          // Add this to debug: markers: true 
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: (i % 3) * 0.1,
        ease: "power3.out",
        onComplete: () => gsap.set(card, { clearProps: "all" }) // Clean up after animation
      });
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-137 bg-[#0a0a0a] text-[#ededed] font-sans rounded-xl overflow-hidden"
    >
      {/* Header */}

      <div className="relative flex items-center h-13 bg-gray-200 backdrop-blur-md border-b border-gray-300 px-4 select-none rounded-t-lg">
        {/* macOS window controls (Traffic Lights) */}
        <WindowControls target="safari" />

        {/* Navigation Icons */}
        <div className="flex items-center gap-4 mx-4">
          <svg
            className="w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="w-5 h-5 cursor-pointer text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-auto flex items-center bg-[#e3e3e3] border border-transparent hover:border-gray-300 focus-within:border-blue-400 rounded-lg px-3 py-1 text-sm transition-all">
          <div className="flex-1 text-center text-gray-600 truncate px-4">
            <span className="opacity-70 mr-1">🔒</span>
            aarons-portfolio.com
          </div>
        </div>

        {/* Right-side Icons (Share / New Tab) */}
        <div className="flex items-center gap-4 ml-4">
          <svg
            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
          </svg>

          <svg
            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>


      {/* Webpage Content */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`safari-content flex-1 overflow-y-auto overflow-x-hidden scroll-smooth selection:bg-blue-500/30 ${isScrolling ? 'is-scrolling' : ''}`}
      >
        <div className="max-w-3xl mx-auto px-10 py-20">

          <section className="grid grid-cols-1 md:grid-cols-13 gap-10 mb-32 items-center">

            {/* Left Side: Intro Text (Spans 5 columns) */}
            <div className="md:col-span-5 space-y-8 z-10">
              <div className="reveal">
                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-3">
                  Web Developer
                </p>
                <h1 className="text-4xl font-bold tracking-tighter leading-[0.9]">
                  Aaron K.C.
                </h1>
              </div>
              <p className="reveal text-lg text-gray-400 leading-relaxed">
                I build digital experiences that combine <span className="text-white font-medium">rigorous logic</span> with <span className="text-white font-medium">fluid motion</span>.
              </p>
              <div className="reveal pt-4">
                <button
                  className="h-11 px-8 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform active:scale-95"
                  onClick={() => openWindow("contact")}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="md:col-span-8 relative h-50 sm:h-70 md:h-100 flex items-center justify-center">
              <div className="no-drag absolute -inset-10 z-0 cursor-grab active:cursor-grabbing" onMouseDown={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                focusWindow("safari");
              }} onTouchStart={(e) => e.stopPropagation()}>
                <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
                  <ComputersCanvas />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-32">
            <h2 className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-4 italic">01. Experience</h2>
            <div className="experience-box group flex flex-col md:flex-row justify-between gap-6 hover:bg-white/1 transition-colors p-6 -mx-6 rounded-2xl">
              <div className="w-1/3">
                <h3 className="text-xl font-semibold">MERN Intern</h3>
                <p className="text-blue-500 font-mono text-[10px] mt-1 tracking-widest uppercase font-bold">Sriyog Consulting Pvt Ltd.</p>
              </div>
              <div className="flex-1">
                <p className="text-xs font-mono text-gray-600 mb-6 text-right">Sept — Dec 2025</p>
                <ul className="text-[15px] text-gray-400 space-y-4 list-none border-l-2 border-white/5 pl-8">
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">Built and managed React based frontend with dynamic UI components.</li>
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 before:rounded-full">Used React Query for efficient data fetching and caching.</li>
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 before:rounded-full">Implemented server-side logic and CRUD via Node.</li>
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 before:rounded-full">Integrated Cloudinary for image optimization and storage.</li>
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 before:rounded-full">Collaborated on REST APIs and version control workflows.</li>
                  <li className="relative before:content-[''] before:absolute before:-left-9 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-800 before:rounded-full">Participated on code reviews.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Grid */}
          <section className="mb-20">
            <h2 className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-4 italic">02. Toolkit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((stack, idx) => (
                <div key={idx} className="tech-card bg-linear-to-b from-white/3 to-transparent border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group">
                  <h4 className="text-[9px] text-gray-500 font-bold uppercase mb-6 tracking-widest group-hover:text-blue-500 transition-colors">{stack.category}</h4>
                  <div className="flex flex-col gap-3 text-gray-300">
                    {stack.items.map(item => (
                      <span key={item} className="text-sm font-light border-b border-white/3 pb-2">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="py-20 border-t border-white/5 flex justify-between items-center opacity-40 text-[9px] uppercase tracking-[0.5em]">
            <span>Aaron K.C</span>
            <span>Handcrafted Portfolio</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

const Safari = WindowWrapper(SafariComponent, "safari");
export default Safari;