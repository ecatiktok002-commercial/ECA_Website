import { ArrowRight } from 'lucide-react';

export default function Tourism() {
  return (
    <section id="tourism" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              Expanding Horizons
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Tech-Enabled Tourism Ventures
            </h2>
          </div>
          <button className="text-primary font-headline font-bold flex items-center gap-2 group">
            View Tourism Portfolio{' '}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="luxury eco-resort villa with infinity pool"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTn6Zeno1JSK4bE_Weq5i2CCtDAdIgBrTnCXShz-sbHEzlEzrk5P-sye4WoahEUaNFVBEiI54PGEtQtJ0OMUwixXPzDXIb5MGDzgt9GuJQT-ih0wrdqySnvFeisj3szGRlMWvuu2xHMHxJVT7r4gBioF35XbJYZ7uTcIDhexZ_1dwwEsX1SnJiSKph5psfstXN-r_3vjN8HN4HwRcA6GU9Qxt0qG_488OKpZ9bzBm8hSjsR9e4Cvj0MbLbBJpymIRXWHAaVER8is"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-3xl font-bold mb-2">MOTAC-Certified Experiences</h3>
              <p className="text-emerald-50/90 max-w-md">
                Backed by our official licensing from the Ministry of Tourism, Arts and Culture Malaysia (MOTAC), we provide seamless, budget-friendly, and highly flexible transport packages.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="lifestyle shot of modern professional meeting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFie2jqcS09qozPMclvYzFm6l5N8t4k_PBkP-5QWRl2d7KEaqiPE5TaDoqJsQFOypmTYkIZVMUNhCGR5h-InjrTOqHOC1kudRwGD95VpBB1-F7fSKVtMdPjqwjKfEoJMO6vltXoz9wDFuiUe_97J88SyuARPVC1ngNYlcPpl2Js-Vtw7NMuiRb5VIu_bGehbNs4u4BaXlSlkIbPL-Y7xrYe2VkPTIEwo8KP-Sh0ThELmWwcoxLKdht4wPTztWvvAit0TKlA8FpedM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Corporate Delegations</h3>
              <p className="text-emerald-50/90">
                Reliable transport solutions for corporate event planners.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="tranquil beach at sunrise"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk_6KNDWijjknbzt8wyyVR763uoOYRssAmjgiYNbheleoMsLGhA_TDPA_tetipRJ-3fjlEBLA7NQE7qYiiNYeSa_2hFBmNOzZHtZLfpRwMDuWdRWJiH0SJgOwuReEjDepl9WMgs4KKSUOIAULK9R1IuIsY8ycRTFVT-fPRITtgY44fB-8CgvjWUgtP0RZGEkAQ1oAmI2aessFhF4x-qOfkyrUT8A9jCQ2xPjK9FCJtX3q8HbYOxd7TciyZtUuzEumIrYj1d5ETMK0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Frictionless Travel</h3>
              <p className="text-emerald-50/90">
                From digital booking to final destination, powered by our tech infrastructure.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 bg-primary p-12 rounded-2xl flex flex-col justify-center">
            <h3 className="text-white text-3xl font-bold mb-4 tracking-tight">
              The Reliable Logistical Backbone
            </h3>
            <p className="text-emerald-100/80 text-lg mb-8 max-w-2xl">
              ECA Group applies our logistical mastery to the travel sector. We offer reliable, scalable transport solutions that travel agencies, hotels, and corporate event planners can depend on. Let us be the reliable logistical backbone for your next large-scale corporate event or tourism venture.
            </p>
            <div className="flex gap-8">
              <button className="bg-secondary text-on-primary px-6 py-3 rounded-xl font-headline font-bold hover:opacity-90 transition-all">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
