import { Terminal, Shield, Cloud, Network } from 'lucide-react';

export default function DigitalArchitect() {
  return (
    <section id="saas" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              The Digital Architect
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              Custom SaaS & Digital Transformation
            </h2>
            <p className="text-on-surface-variant mb-6 text-lg">
              As the core architect behind ECA Group’s rapid expansion, we understand that off-the-shelf software rarely fits a growing business. We are not just a mobility company; we are a SaaS (Software as a Service) Provider.
            </p>
            <p className="text-on-surface-variant mb-8">
              We design and build customized web applications and AI-driven automated workflows tailored to the exact logistical and operational needs of our B2B partners.
            </p>
            <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-headline font-bold hover:bg-primary/90 transition-all">
              Build With Us
            </button>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Terminal className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Custom Web Apps
              </h3>
              <p className="text-on-surface-variant text-sm">
                Translate your operational bottlenecks into elegant, high-efficiency software solutions.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Shield className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                AI-Driven Workflows
              </h3>
              <p className="text-on-surface-variant text-sm">
                Automate your customer service and build bespoke booking ecosystems.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Cloud className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Streamlined Inventory
              </h3>
              <p className="text-on-surface-variant text-sm">
                Scalable systems to manage physical assets and digital oversight seamlessly.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Network className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Digital Infrastructure
              </h3>
              <p className="text-on-surface-variant text-sm">
                Let us build the customized digital infrastructure that will scale your business into the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
