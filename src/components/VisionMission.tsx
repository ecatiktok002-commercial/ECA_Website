export default function VisionMission() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Vision Section */}
          <div className="space-y-8">
            <div>
              <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
                The Future
              </span>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Vision
              </h2>
              <p className="text-on-surface-variant text-xl leading-relaxed font-light">
                To be Malaysia’s premier architect of smart mobility, operational technology, and scalable business ecosystems, setting the gold standard for innovation and collaborative growth.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="space-y-8">
            <div>
              <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
                The Path
              </span>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
            </div>
            
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-secondary font-headline font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-primary transition-colors">
                  Empower
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Equip drivers, travelers, and business owners with the tools, vehicles, and strategies they need to thrive.
                </p>
              </div>

              <div className="group">
                <h4 className="text-secondary font-headline font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-primary transition-colors">
                  Innovate
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Replace outdated industry practices with AI-driven, custom-built software and data analytics.
                </p>
              </div>

              <div className="group">
                <h4 className="text-secondary font-headline font-bold text-lg uppercase tracking-wider mb-3 group-hover:text-primary transition-colors">
                  Collaborate
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Build transparent, high-yield partnerships with investors, B2B clients, and local enterprises to drive collective economic success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
