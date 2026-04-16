import { Terminal, Shield, Cloud, Network } from 'lucide-react';

export default function DigitalArchitect() {
  return (
    <section id="saas" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              Core Infrastructure
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              The Digital Architect
            </h2>
            <p className="text-on-surface-variant mb-8 text-lg">
              At the foundation of ECA Group lies our digital architecture—robust cloud systems and custom middleware that power every transaction and logistical movement. Whether you need to streamline your inventory, automate your customer service, or build a bespoke booking ecosystem, we translate your operational bottlenecks into elegant software solutions. We are always open to exploring synergies with visionary enterprises that are ready to architect their digital future alongside us.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Terminal className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Custom Middleware
              </h3>
              <p className="text-on-surface-variant text-sm">
                Scalable API layers connecting disparate mobility assets into a single unified dashboard.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Shield className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Zero-Trust Security
              </h3>
              <p className="text-on-surface-variant text-sm">
                Bank-grade encryption for all financial and logistical data streams.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Cloud className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Edge Computing
              </h3>
              <p className="text-on-surface-variant text-sm">
                Processing data at the vehicle level to minimize latency and maximize safety.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Network className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Interconnected Ecosystem
              </h3>
              <p className="text-on-surface-variant text-sm">
                Seamless integration between SewaBeli, Tourism, and Fleet assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
