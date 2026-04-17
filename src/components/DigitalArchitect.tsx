import { Bot, Database, Cloud, Handshake } from 'lucide-react';

export default function DigitalArchitect() {
  return (
    <section id="saas" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              We Build the Software That Runs Your Business
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              Custom SaaS & Digital Transformation
            </h2>
            <p className="text-on-surface-variant mb-8 text-lg">
             As the core architect behind ECA Group’s rapid expansion, we understand that off-the-shelf software rarely fits a growing business. We are not just a mobility company; we are a SaaS (Software as a Service) Provider. </p>
            <p className="text-on-surface-variant mb-8 text-lg"> We design and build customized web applications and AI-driven automated workflows tailored to the exact logistical and operational needs of our B2B partners. Whether you need to streamline your inventory, automate your customer service, or build a bespoke booking ecosystem, we translate your operational bottlenecks into elegant, high-efficiency software solutions.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Bot className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                AI-Driven Workflows
              </h3>
              <p className="text-on-surface-variant text-sm">
                Automate your customer service and replace manual operational bottlenecks with high-efficiency, intelligent automation.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Database className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Inventory Optimization
              </h3>
              <p className="text-on-surface-variant text-sm">
                Streamline your physical and digital inventory management through custom-built, real-time tracking web applications.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Cloud className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                Bespoke Booking Ecosystems
              </h3>
              <p className="text-on-surface-variant text-sm">
                Architect customized, end-to-end booking platforms tailored specifically to the unique logistical demands of your business.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl hover:bg-white transition-all border border-transparent hover:border-outline-variant/30">
              <Handshake className="text-secondary mb-6" size={40} />
              <h3 className="text-xl font-headline font-bold text-primary mb-3">
                B2B Digital Synergy
              </h3>
              <p className="text-on-surface-variant text-sm">
                Seamlessly integrate your operational workflows with our proprietary software to scale your enterprise alongside ours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
