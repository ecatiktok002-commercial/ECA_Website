import { motion } from 'motion/react';
import { Handshake, TrendingUp, Settings, Cpu, Users, Share2 } from 'lucide-react';

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

export default function VisionMission() {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* High-Contrast Technical Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sharp Grid */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
        />

        {/* Vertical Scanning Beams */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />
        <motion.div 
          animate={{ x: ['-200%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
        />

        {/* Large Geometric Outlines */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-primary/20 rounded-full flex items-center justify-center"
        >
          <div className="w-[80%] h-[80%] border border-primary/10 rounded-full" />
          <div className="w-[60%] h-[60%] border border-primary/5 rounded-full" />
          {/* Technical Marks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] border border-secondary/20 rounded-full flex items-center justify-center opacity-50"
        >
          <div className="w-[70%] h-[70%] border border-secondary/10 rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-secondary/40" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-secondary/40" />
        </motion.div>

        {/* Pulsing Intersections */}
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-x-16 lg:gap-x-24 gap-y-16 items-start">
          
          {/* Left Column: Vision */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-x-6 mb-8">
                <span className="font-label text-primary tracking-[0.4em] uppercase text-xs font-bold whitespace-nowrap">
                  THE FUTURE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light">
                To be Malaysia’s premier architect of smart mobility, operational technology, and scalable business ecosystems, setting the gold standard for innovation and collaborative growth.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Mission & Pillars */}
          <div className="lg:col-span-3 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-baseline gap-x-6 mb-8">
                <span className="font-label text-primary tracking-[0.4em] uppercase text-xs font-bold whitespace-nowrap">
                  THE PATH
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  Our Mission
                </h2>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >

              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* EMPOWER Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all group relative overflow-hidden flex flex-col gap-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 shrink-0 bg-secondary-container rounded-xl flex items-center justify-center relative z-10">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/20 rounded-xl blur-lg"
                    />
                    <div className="relative">
                      <Handshake className="text-secondary" size={24} />
                      <TrendingUp className="text-secondary absolute -top-1.5 -right-1.5" size={12} />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-headline font-bold text-lg uppercase tracking-wider mb-2">
                      Empower
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Equip drivers, travelers, and business owners with the tools, vehicles, and strategies they need to thrive.
                    </p>
                  </div>
                </motion.div>

                {/* INNOVATE Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all group relative overflow-hidden flex flex-col gap-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 shrink-0 bg-secondary-container rounded-xl flex items-center justify-center relative z-10">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 bg-primary/20 rounded-xl blur-lg"
                    />
                    <div className="relative">
                      <Settings className="text-secondary" size={24} />
                      <Cpu className="text-secondary absolute -top-1.5 -right-1.5" size={12} />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-headline font-bold text-lg uppercase tracking-wider mb-2">
                      Innovate
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Replace outdated industry practices with AI-driven, custom-built software and data analytics.
                    </p>
                  </div>
                </motion.div>

                {/* COLLABORATE Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all group relative overflow-hidden flex flex-col gap-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 shrink-0 bg-secondary-container rounded-xl flex items-center justify-center relative z-10">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute inset-0 bg-primary/20 rounded-xl blur-lg"
                    />
                    <div className="relative">
                      <Users className="text-secondary" size={24} />
                      <Share2 className="text-secondary absolute -top-1.5 -right-1.5" size={12} />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-primary font-headline font-bold text-lg uppercase tracking-wider mb-2">
                      Collaborate
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Build transparent, high-yield partnerships with investors, B2B clients, and local enterprises to drive collective economic success.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}