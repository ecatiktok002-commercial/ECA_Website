import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-container">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 opacity-40">
        <img
          className="w-full h-full object-cover"
          alt="ECA Group Mobility Hub"
          src="/background2.jpg"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="font-label text-secondary-fixed tracking-[0.2em] uppercase text-sm mb-6 block">
            ECA Group Mobility Systems
          </span>
          <h1 className="text-display-lg md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Engineering the Future of Mobility & Business
          </h1>
          <p className="text-xl text-emerald-100/80 font-body mb-10 max-w-xl leading-relaxed">
            Defining the next generation of transportation infrastructure through precision engineering, sustainable technology, and human-centric design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

