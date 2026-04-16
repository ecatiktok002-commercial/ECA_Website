import { motion } from 'motion/react';
import { Handshake, TrendingUp, Settings, Cpu, Users, Share2 } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          {/* Vision Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <span className="font-label text-primary tracking-[0.4em] uppercase text-xs mb-4 block font-bold">
                THE FUTURE
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
                Our Vision
              </h2>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light max-w-xl">
                To be Malaysia’s premier architect of smart mobility, operational technology, and scalable business ecosystems, setting the gold standard for innovation and collaborative growth.
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-full border border-primary/10 absolute inset-0 animate-[spin_20s_linear_infinite]"></div>
            <div className="aspect-square rounded-full border border-primary/5 absolute inset-10 animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="space-y-16">
          <div className="text-center">
            <span className="font-label text-primary tracking-[0.4em] uppercase text-xs mb-4 block font-bold">
              THE PATH
            </span>
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-secondary font-headline uppercase tracking-[0.2em] text-sm">
              Service Pillars
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* EMPOWER Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
                  <div className="relative">
                    <Handshake className="text-secondary" size={28} />
                    <TrendingUp className="text-secondary absolute -top-2 -right-2" size={14} />
                  </div>
                </div>
                <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-wider mb-4">
                  Empower
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Equip drivers, travelers, and business owners with the tools, vehicles, and strategies they need to thrive.
                </p>
              </div>
            </motion.div>

            {/* INNOVATE Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
                  <div className="relative">
                    <Settings className="text-secondary" size={28} />
                    <Cpu className="text-secondary absolute -top-2 -right-2" size={14} />
                  </div>
                </div>
                <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-wider mb-4">
                  Innovate
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Replace outdated industry practices with AI-driven, custom-built software and data analytics.
                </p>
              </div>
            </motion.div>

            {/* COLLABORATE Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:bg-white hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-8">
                  <div className="relative">
                    <Users className="text-secondary" size={28} />
                    <Share2 className="text-secondary absolute -top-2 -right-2" size={14} />
                  </div>
                </div>
                <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-wider mb-4">
                  Collaborate
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Build transparent, high-yield partnerships with investors, B2B clients, and local enterprises to drive collective economic success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
