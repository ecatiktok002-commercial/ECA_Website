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
                alt="Gig economy partner"
                src="/section3.png"
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
              SewaBeli: Ownership Redefined
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We bridge the gap between labor and capital. Our SewaBeli (Lease-to-Own) model provides independent workers with high-efficiency electric vehicles, transforming daily expenses into long-term assets. By prioritizing the financial success of our partners, we ensure unprecedented fleet loyalty, operational stability, and a scalable model that investors and stakeholders can trust. We continually seek to align with forward-thinking individuals and entities who recognize the long-term value of sustainable, tech-driven economic empowerment.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <Banknote size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Zero-Upfront Entry</h4>
                  <p className="text-on-surface-variant">
                    Low-barrier access to professional-grade tools for urban logistics.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">EV Infrastructure</h4>
                  <p className="text-on-surface-variant">
                    Integrated charging network access ensuring maximum uptime for operators.
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
