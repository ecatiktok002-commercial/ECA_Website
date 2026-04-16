import { Banknote, Zap } from 'lucide-react';

export default function GigEconomy() {
  return (
    <section id="e-hailing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-container-low rounded-[2rem] overflow-hidden emerald-bloom">
              <img
                className="w-full h-full object-cover"
                alt="modern electric delivery bike parked in a vibrant clean urban city street"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV47YOb8kMltONHqg7A70Y4O01J5zrBuY6llJ5l22sypiJgoJQNNAs9A4DaPGSGaekc1wxEZGhvqrkaO5cm6lcDYrsYGmkmKiRu7RdvE88Q4YW4BZ3u4HPbHT7N3OAt2aVXH_LS9NLRd_G0ATuQ2yx8oP1WtCEz1fRTOWP9hkrWGt_XbQiNM3trYpMKQgOfN3JDeGKtr32u2RLB2IOmHznKUT-40Uee-4ZWUdfX1X0zqTgh3yP4LtiLMng8SjivnO-B5sa5Wzn2hM"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl max-w-xs border-l-4 border-secondary">
              <p className="text-primary font-headline font-bold text-3xl mb-1">15k+</p>
              <p className="text-on-surface-variant text-sm font-label uppercase tracking-wider">
                Active Gig Partners
              </p>
            </div>
          </div>
          <div>
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              Empowering the Gig Economy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Smart E-Hailing Solutions & The SewaBeli Initiative
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              We view our drivers not as renters, but as operational partners. Our Smart E-Hailing Fleet Solutions provide high-quality, perfectly maintained vehicles optimized for the gig economy. But our true differentiator is our SewaBeli (Rent-to-Own) Initiative.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We have engineered a sustainable, shared-economy framework that transforms everyday drivers into vehicle owners by the end of their contract. By prioritizing the financial success of our partners, we ensure unprecedented fleet loyalty, operational stability, and a scalable model that investors and stakeholders can trust.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <Banknote size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Pathway to Ownership</h4>
                  <p className="text-on-surface-variant">
                    Redefining vehicle rental as a sustainable path to long-term asset ownership.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Partner With Us</h4>
                  <p className="text-on-surface-variant">
                    Join an ecosystem that turns mobility into sustainable economic empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
