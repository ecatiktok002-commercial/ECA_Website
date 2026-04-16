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

const glowVariants = {
  initial: { opacity: 0.4, scale: 0.8 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function VisionMission() {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/3">
        <div className="aspect-square rounded-full border border-primary/10 absolute inset-0 animate-[spin_40s_linear_infinite]"></div>
        <div className="aspect-square rounded-full border border-primary/5 absolute inset-20 animate-[spin_30s_linear_infinite_reverse]"></div>
      </div>

      {/* Floating Glow Orbs */}
      <motion.div 
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"
        style={{ transitionDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-x-16 lg:gap-x-24 gap-y-12 items-start">
          
          {/* Row 1: Headings */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-label text-primary tracking-[0.4em] uppercase text-xs mb-4 block font-bold">
                THE FUTURE
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
                Our Vision
              </h2>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light">
                To be Malaysia’s premier architect of smart mobility, operational technology, and scalable business ecosystems, setting the gold standard for innovation and collaborative growth.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <span className="font-label text-primary tracking-[0.4em] uppercase text-xs mb-4 block font-bold">
                THE PATH
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
                Our Mission
              </h2>
            </motion.div>
          </div>

          {/* Row 2: Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >

            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.p 
                variants={itemVariants}
                className="text-secondary font-headline uppercase tracking-[0.2em] text-sm"
              >
                Service Pillars
              </motion.p>
              
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
