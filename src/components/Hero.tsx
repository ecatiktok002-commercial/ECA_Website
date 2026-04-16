export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-container">
      <div className="absolute inset-0 opacity-40">
        <img
          className="w-full h-full object-cover"
          alt="high-angle architectural shot of a futuristic sustainable transportation hub"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCr4lpNjHkS-AXmUdgrF72XI2ssdE80I2NxyMaeQ7Ulp26rLcFdFFiJAsRkG3DxnheCKGXEMycDkwOEkyoBeWrDDyQ5MlAEhlRLD1BW-Zf607DWBg8fzRKb6KI-Vb5IoeREVFXvxbvF97oxcYQJd-211VR9fdn_N_TdUsZ1G1pwDk6PaIQdG7gOQ0AM1QXgZXKMAoR6K-JR-DcfV4D6LeL9lLwx-yGNN6ccphTeCfYlI9ObGxKOTepfL0Iaz8HhbG_Goi9rgqosVI"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <span className="font-label text-secondary-fixed tracking-[0.2em] uppercase text-sm mb-6 block">
            The Foundation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            ECA GROUP: Engineering the Future of Mobility & Business
          </h1>
          <h2 className="text-2xl text-secondary-fixed font-headline mb-6">
            Our Story: Born in Logistics, Scaled by Technology
          </h2>
          <p className="text-xl text-emerald-100/80 font-body mb-10 max-w-3xl leading-relaxed">
            Founded in January 2021 during the rapid expansion of the gig economy, ECA Group began with a singular focus: solving real-world logistical challenges. We recognized that ambition without infrastructure was a roadblock for thousands of e-hailing drivers. We didn't just provide cars; we provided economic opportunity. Today, ECA Group has evolved into a multi-faceted enterprise. From MOTAC-certified tourism to proprietary SaaS architecture and precision marketing, we bridge the gap between physical operations and digital transformation. We don't just participate in the market—we engineer the systems that lead it.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-secondary-fixed font-headline font-bold text-xl mb-3">Empower</h3>
              <p className="text-emerald-50/80 text-sm">Equip drivers, travelers, and business owners with the tools, vehicles, and strategies they need to thrive.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-secondary-fixed font-headline font-bold text-xl mb-3">Innovate</h3>
              <p className="text-emerald-50/80 text-sm">Replace outdated industry practices with AI-driven, custom-built software and data analytics.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-secondary-fixed font-headline font-bold text-xl mb-3">Collaborate</h3>
              <p className="text-emerald-50/80 text-sm">Build transparent, high-yield partnerships with investors, B2B clients, and local enterprises to drive collective economic success.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all">
              Explore Solutions
            </button>
            <button className="border border-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
