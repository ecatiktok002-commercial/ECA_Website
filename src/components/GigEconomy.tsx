import { Key, TrendingUp } from 'lucide-react';
import CountUp from './CountUp';

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
                src="/sewaBeli.png"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl max-w-xs border-l-4 border-secondary">
              <p className="text-primary font-headline font-bold text-3xl mb-1">
                <CountUp end={150} />
              </p>
              <p className="text-on-surface-variant text-sm font-label uppercase tracking-wider">
                Active Partners
              </p>
            </div>
          </div>
          <div>
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              Smart E-Hailing Solutions & The SewaBeli Initiative
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              SewaBeli: Ownership Redefined
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">We view our drivers not as renters, but as operational partners. While traditional models focus purely on vehicle leasing, our true differentiator in the gig economy is the SewaBeli (Rent-to-Own) Initiative. We have engineered a sustainable, shared-economy ecosystem designed to bridge the gap between labor and capital, creating long-term value for everyone involved.</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <Key size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Pathway to Ownership</h4>
                  <p className="text-on-surface-variant">
                   sustainable framework that transforms everyday drivers into vehicle owners by the end of their contract.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-secondary bg-secondary-container p-3 rounded-lg">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary">Mutual Financial Success</h4>
                  <p className="text-on-surface-variant">
                    Prioritizing partner success to ensure unprecedented fleet loyalty, operational stability, and a highly scalable model.
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
