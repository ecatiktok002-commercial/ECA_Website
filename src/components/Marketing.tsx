import CountUp from './CountUp';

export default function Marketing() {
  return (
    <section id="marketing" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="font-label text-secondary tracking-widest uppercase text-xs mb-4 block">
               Dynamic Marketing: Deploying Our Internal Success for Your Business
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The Growth Engine
            </h2>
            <p className="text-emerald-100/70 text-xl mb-10 leading-relaxed">
              We don't just build systems; we build brands. Our marketing vertical specializes in narrative-driven growth for mobility and industrial sectors. We treat your marketing budget with architectural precision, allowing you to bypass the cost of an in-house team while accessing elite strategists. For ambitious brands ready to transition from volume-based spending to value-driven results, our precision-engineered strategies offer a clear, collaborative pathway to measurable growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-headline font-bold text-2xl text-yellow-400 mb-1">
                  <CountUp end={2.4} decimals={1} suffix="M" />
                </h4>
                <p className="text-emerald-100/50 text-sm">Audience Reach</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-headline font-bold text-2xl text-yellow-400 mb-1">
                   <CountUp end={158} suffix="%" />
                </h4>
                <p className="text-emerald-100/50 text-sm">YoY Growth</p>
              </div>
            </div>
            <button className="mt-12 bg-white text-primary px-8 py-4 rounded-xl font-headline font-bold hover:bg-secondary-container transition-all">
              Partner with us
            </button>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
            <video
              className="w-full h-auto rounded-3xl relative z-10 shadow-2xl scale-105"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/marketing_section_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
