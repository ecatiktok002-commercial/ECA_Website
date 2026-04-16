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
        <div className="max-w-3xl">
          <span className="font-label text-secondary-fixed tracking-[0.2em] uppercase text-sm mb-6 block">
            ECA Group Mobility Systems
          </span>
          <h1 className="text-display-lg md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Engineering the Future of Mobility & Business
          </h1>
          <p className="text-xl text-emerald-100/80 font-body mb-10 max-w-xl leading-relaxed">
            Defining the next generation of transportation infrastructure through precision engineering, sustainable technology, and human-centric design.
          </p>
        </div>
      </div>
    </section>
  );
}
