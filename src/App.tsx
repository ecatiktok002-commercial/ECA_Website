/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ECA Group Landing Page Redesign
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  LayoutGrid, Handshake, TrendingUp, Settings, Cpu, 
  Users, Share2, Bot, Database, Cloud, Share, 
  BrainCircuit, Mic, Key, Phone, Mail 
} from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const targetTimeRef = useRef(0);
  const isScrubbingRef = useRef(false);

  // --- Scroll-driven Video Scrubbing Logic ---
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We must ensure the video metadata is loaded before we try to scrub.
    const handleMetadata = () => {
      video.pause();
    };
    video.addEventListener('loadedmetadata', handleMetadata);

    const smoothScrub = () => {
      if (!video.duration) {
        requestAnimationFrame(smoothScrub);
        return;
      }
      
      // Interpolate current time towards target time for smoothness
      video.currentTime += (targetTimeRef.current - video.currentTime) * 0.1;
      
      if (isScrubbingRef.current) {
        requestAnimationFrame(smoothScrub);
      }
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const percentage = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollPercentage(percentage);

      if (video.duration) {
        targetTimeRef.current = (percentage / 100) * video.duration * 0.99;
        
        if (!isScrubbingRef.current) {
          isScrubbingRef.current = true;
          requestAnimationFrame(smoothScrub);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
      window.removeEventListener('scroll', handleScroll);
      isScrubbingRef.current = false;
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="bg-emerald-950 text-white min-h-screen font-body selection:bg-white/10 selection:text-white antialiased overflow-x-hidden">
      
      {/* ==================================================================================
        BACKGROUND LAYER: SCRUBBING VIDEO
        A single fixed background element that updates based on scroll.
        ==================================================================================
      */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          src="/image_2.mp4" // *** Place your video here ***
          className="w-full h-full object-cover"
          muted
          playsInline
          loop={false} // We handle looping by scrolling, not auto-looping.
          preload="metadata"
        />
        {/* Subtle Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-emerald-950/30" />
      </div>

      {/* ==================================================================================
        FOREGROUND LAYER: GLASSMORPHISM UI & CONTENT
        ==================================================================================
      */}
      <div className="relative z-10">

        {/* --- Header & Nav --- */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/5 shadow-inner">
          <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <img src="/logo2.png" alt="ECA Group Logo" className="h-10 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer"/>
              <div className="text-2xl font-bold font-headline tracking-tighter text-white uppercase">ECA GROUP</div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
                <LayoutGrid size={20} />
              </button>
              <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-emerald-950 px-6 py-2.5 rounded-full font-headline font-bold hover:scale-95 duration-200">
                Contact
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content (Content is centered/modular now to float over the dynamic background) */}
        <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24 md:space-y-32">
          
          {/* --- Hero Section --- */}
          <section id="hero" className="flex flex-col items-center justify-center text-center py-20 min-h-[70vh]">
            <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col gap-6 w-full max-w-4xl">
              <span className="font-label text-emerald-200 tracking-[0.4em] uppercase text-sm mb-4">Physical Assets. Digital Intelligence.</span>
              <h1 className="text-5xl md:text-7xl font-bold font-headline text-white leading-[1.1] tracking-tight mb-6">Engineering the Future of Mobility & Business</h1>
              <p className="text-xl text-emerald-100/90 max-w-2xl leading-relaxed mx-auto">
                Born in logistics, scaled by technology. ECA Group bridges the gap between physical operations and digital transformation, evolving from e-hailing pioneers to architects of modern mobility, custom SaaS, and precision marketing.
              </p>
            </div>
          </section>

          {/* --- Vision & Mission Section --- */}
          <section id="vision-mission" className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden">
            {/* High-Contrast Technical Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem] z-0">
              {/* Sharp Grid */}
              <div className="absolute inset-0 opacity-[0.1]" 
                   style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
              />

              {/* Vertical Scanning Beams */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent"
              />
              <motion.div 
                animate={{ x: ['-200%', '100%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
              />

              {/* Large Geometric Outlines */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-emerald-400/30 rounded-full flex items-center justify-center"
              >
                <div className="w-[80%] h-[80%] border border-emerald-400/20 rounded-full" />
                <div className="w-[60%] h-[60%] border border-emerald-400/10 rounded-full" />
                {/* Technical Marks */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-400/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-400/50" />
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] border border-blue-400/20 rounded-full flex items-center justify-center opacity-50"
              >
                <div className="w-[70%] h-[70%] border border-blue-400/10 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400/40" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400/40" />
              </motion.div>

              {/* Pulsing Intersections */}
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"
              />
              <motion.div 
                animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"
              />
            </div>

            <div className="grid lg:grid-cols-5 gap-x-16 gap-y-16 items-start relative z-10 w-full">
              {/* Left Column: Vision */}
              <div className="lg:col-span-2 flex flex-col gap-6 text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="font-label text-emerald-200 tracking-widest uppercase text-xs font-bold whitespace-nowrap mb-4 block">
                    THE FUTURE
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight mb-6">
                    Our Vision
                  </h2>
                  <p className="text-emerald-100/80 text-lg leading-relaxed font-light">
                    To be Malaysia’s premier architect of smart mobility, operational technology, and scalable business ecosystems, setting the gold standard for innovation and collaborative growth.
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Mission & Pillars */}
              <div className="lg:col-span-3 space-y-12 text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="font-label text-emerald-200 tracking-widest uppercase text-xs font-bold whitespace-nowrap mb-4 block">
                    THE PATH
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight mb-8">
                    Our Mission
                  </h2>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* EMPOWER Card */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-emerald-900/40 p-6 rounded-2xl border border-white/5 hover:bg-emerald-800/80 transition-all group relative overflow-hidden flex flex-col gap-6 shadow-inner"
                  >
                    <div className="w-12 h-12 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center relative z-10 border border-emerald-500/20">
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg"
                      />
                      <div className="relative">
                        <Handshake className="text-emerald-400" size={24} />
                      </div>
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-white font-headline font-bold text-lg uppercase tracking-wider mb-2">
                        Empower
                      </h4>
                      <p className="text-emerald-100/70 text-sm leading-relaxed">
                        Equip drivers, travelers, and business owners with tools and strategies they need to thrive.
                      </p>
                    </div>
                  </motion.div>

                  {/* INNOVATE Card */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-emerald-900/40 p-6 rounded-2xl border border-white/5 hover:bg-emerald-800/80 transition-all group relative overflow-hidden flex flex-col gap-6 shadow-inner"
                  >
                    <div className="w-12 h-12 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center relative z-10 border border-emerald-500/20">
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg"
                      />
                      <div className="relative">
                        <Settings className="text-emerald-400" size={24} />
                      </div>
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-white font-headline font-bold text-lg uppercase tracking-wider mb-2">
                        Innovate
                      </h4>
                      <p className="text-emerald-100/70 text-sm leading-relaxed">
                        Replace outdated practices with AI-driven, custom-built software and data analytics.
                      </p>
                    </div>
                  </motion.div>

                  {/* COLLABORATE Card */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-emerald-900/40 p-6 rounded-2xl border border-white/5 hover:bg-emerald-800/80 transition-all group relative overflow-hidden flex flex-col gap-6 shadow-inner"
                  >
                    <div className="w-12 h-12 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center relative z-10 border border-emerald-500/20">
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg"
                      />
                      <div className="relative">
                        <Users className="text-emerald-400" size={24} />
                      </div>
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-white font-headline font-bold text-lg uppercase tracking-wider mb-2">
                        Collaborate
                      </h4>
                      <p className="text-emerald-100/70 text-sm leading-relaxed">
                        Drive collective success through transparent partnerships with B2B clients and investors.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* --- Rent-to-Own & E-Hailing Section --- */}
          <section id="gig-economy" className="relative p-10 md:p-16 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-inner flex flex-col items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Gig economy partner" src="/sewaBeli.png" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500/20"></div>
                </div>
              </div>
              <div className="p-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="font-label text-emerald-200 tracking-widest uppercase text-xs mb-4">SewaBeli: Ownership Redefined</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">E-Hailing Solutions</h2>
                <p className="text-emerald-100/80 text-lg leading-relaxed mb-8">
                  Drivers are our operational partners. Traditional models focus on vehicle leasing; our differentiator is the SewaBeli (Rent-to-Own) Initiative. We view them not as renters, but as operational partners, transforming Everyday drivers into vehicle owners by the end of their contract.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-emerald-500/10 rounded-full flex items-center justify-center relative">
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg" />
                    <Key className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-white text-lg text-left">Path to Ownership</h4>
                    <p className="text-emerald-100/80 text-left">Everyday drivers become vehicle owners by the end of their contract.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Tourism Section --- */}
          <section id="tourism" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-label text-emerald-200 tracking-widest uppercase text-xs mb-4 block">Expanding Horizons</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tourism Ventures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {img: 'https://picsum.photos/seed/travel/800/600', title: 'Flexible Packages', icon: BrainCircuit},
                {img: 'https://picsum.photos/seed/corporate/800/600', title: 'Corporate Mobility', icon: Users},
                {img: 'https://picsum.photos/seed/digital/800/600', title: 'Digital Infrastructure', icon: Mic}
              ].map((item, idx) => (
                <div key={idx} className="relative rounded-3xl overflow-hidden group aspect-[4/3] bg-emerald-900 border border-white/5 shadow-lg">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} src={item.img} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent flex flex-col justify-end p-8 text-center items-center">
                    <item.icon className="text-emerald-400 mb-4" size={32} />
                    <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-emerald-100/70 text-sm max-w-xs">{idx === 0 ? "Seamless budget-friendly transport tailored for travelers." : (idx === 1 ? "A reliable logistical backbone for corporate delegations and events." : "Booking ecosystem frictionless travel experience powered by tech.")}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- Daily Rentals & Fleet Management Section --- */}
          <section id="fleet-management" className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.15)] space-y-12 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="font-label text-emerald-200 tracking-widest uppercase text-xs mb-4 block">Where Physical Assets Meet Digital Oversight</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Daily Rentals & Fleet Management</h2>
              <p className="text-emerald-100/80 text-lg">Daily and monthly services for private clients with uncompromising quality and safety. However, the secret is our Built-In Fleet Management Architecture for global operators. It draws industry peers into our ecosystem by minimizing downtime.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-emerald-900/50 backdrop-blur-lg rounded-3xl p-6 border border-white/5 shadow-inner">
               <img className="w-full h-full rounded-2xl object-cover" alt="professional data visualization dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLASegY4hB21AiSz86v4tFAWLqt9QtWRJg0Pmm8QAzqrvkp4khXaTN-IKGr62KBzrKHI5hJ2GdGhxMalkhkY8OGSiVN7vlJJFhwvCM8wRd0KTg0rTzz2sfdrQ0qZorQOs4EbnxAeuFpKtwlWBZUufMkKsuiWl5tMeh_DwjEaHuT5JtyQ9vrs8Ncy_EyUPl7yGuKEV598HROTW9teP4DrRcKG8NaXOOVaj-p2Ye4ChAGZ4NyKS-HP9sDtHlfMYGo7CAbsPiNcukCtw" referrerPolicy="no-referrer" />
               <div className="space-y-4">
                  {['Live Telemetry', 'Asset Lifecycle', 'Eco-Analytics'].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border-l-4 transition-colors text-left ${idx === 0 ? 'bg-white/10 border-white' : 'bg-transparent border-emerald-800'}`}>
                      <h4 className="font-headline font-bold text-white mb-1">{item}</h4>
                      <p className="text-sm text-emerald-100/80">{idx === 0 ? 'Real-time tracking of vehicle health and location across continents.' : (idx === 1 ? 'Predictive modeling for part replacement cycles.' : 'Carbon offsets and efficiency gains across the fleet.')}</p>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* --- Marketing Section --- */}
          <section id="marketing" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-emerald-900 rounded-[2.5rem] p-10 md:p-16 border border-emerald-800">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <span className="font-label text-emerald-200 tracking-widest uppercase text-xs mb-4">Deploying Internal Success</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">The Growth Engine</h2>
              <p className="text-emerald-100/70 text-lg mb-10 leading-relaxed max-w-xl">Marketing strategy verticale for narrative-driven growth treat marketing budget with architectural precision transition volume-based spending to value-driven results for a clear, collaborative pathway.</p>
              <div className="flex justify-center md:justify-start gap-12 text-center">
                {[ {val: '2.4M', lab: 'Audience Reach'}, {val: '158%', lab: 'YoY Growth'} ].map(item => (
                  <div key={item.lab}>
                    <h4 className="font-headline font-bold text-4xl text-emerald-100 mb-1">{item.val}</h4>
                    <p className="text-emerald-100/50 text-xs uppercase font-label tracking-widest">{item.lab}</p>
                  </div>
                ))}
              </div>
            </div>
            <img className="w-full h-full rounded-3xl object-cover shadow-2xl" alt="dynamic high-tech digital display panel" src="/marketingSection.png" referrerPolicy="no-referrer" />
          </section>

          {/* --- Systems Developer Section --- */}
          <section id="saas" className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-label text-emerald-200 tracking-widest uppercase text-xs mb-4 block">We Build the Software That Runs Your Business</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Custom SaaS & Systems</h2>
              <p className="text-emerald-100/80 text-lg">As the core architect, we design and build customized web applications, translated operational bottlenecks, high-efficiency customized solutions for the exact logistical and operational needs of our B2B partners.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
              {[ {icon: Bot, title: 'AI-Driven Workflows', text: 'Automate your customer service, reduce manual physical tracking bottlenecks.'}, {icon: Database, title: 'Inventory Optimization', text: 'Streamline tracking and optimize physical inventory management.'}, {icon: Cloud, title: 'Bespoke Ecosystems', text: 'Architect end-to-end booking customized specifically tailored for B2B partners.'}, {icon: Share, title: 'B2B Digital Synergy', text: 'Proprietary software to scale your enterprise alongside ours, integrated seamless.'} ].map((item, idx) => (
                 <div key={idx} className="bg-emerald-900 p-8 rounded-2xl hover:bg-emerald-800 transition-colors border border-white/5 shadow-inner text-center items-center flex flex-col gap-4">
                  <div className="w-16 h-16 shrink-0 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <item.icon className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-emerald-100/80 text-sm max-w-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* --- Footer --- */}
        <footer id="footer" className="bg-emerald-950/80 backdrop-blur-3xl border-t border-white/5 py-16 px-8 text-center text-xs text-emerald-100/40 uppercase font-headline tracking-widest mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
            <img src="/logo2.png" alt="ECA Group Logo" className="h-10 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
            <div className="max-w-md">© 2024 ECA Group. Precision • Sustainability • Excellence. Engineering excellence through precision since 2024.</div>
            <div className="flex flex-wrap justify-center gap-6 text-[10px]">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" /> 
                <a href="tel:+60123456789" className="hover:text-emerald-200 transition-colors">+60 12-345 6789</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400" /> 
                <a href="mailto:contact@eca-group.com" className="hover:text-emerald-200 transition-colors">contact@eca-group.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Share2 size={14} className="text-emerald-400" /> 
                <a href="#" className="hover:text-emerald-200 transition-colors">TikTok @ecagroup</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
