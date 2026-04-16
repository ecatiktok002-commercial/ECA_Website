export default function Marketing() {
  return (
    <section id="marketing" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label text-secondary tracking-widest uppercase text-xs mb-4 block">
              The Growth Engine
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Outsourced Marketing: Surgical Precision, Zero Waste
            </h2>
            <p className="text-emerald-100/80 text-xl mb-6 leading-relaxed">
              The same analytical, data-driven approach we use to scale our own operations is now available to our B2B partners. ECA Group offers an elite, outsourced marketing department dedicated to one philosophy: Precision Over Volume.
            </p>
            <p className="text-emerald-100/80 text-lg mb-10 leading-relaxed">
              We reject the traditional "spray and pray" agency model that burns through your budget. Instead, we specialize in hyper-segmentation—building concise, highly targeted audience profiles with high buying intent. We treat your marketing budget with architectural precision.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-headline font-bold text-2xl text-secondary mb-1">
                  Hyper-Segmentation
                </h4>
                <p className="text-emerald-100/60 text-sm">Targeted Audience Profiles</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-headline font-bold text-2xl text-secondary mb-1">
                  ROI-Focused
                </h4>
                <p className="text-emerald-100/60 text-sm">Elite Strategists</p>
              </div>
            </div>
            <button className="mt-12 bg-white text-primary px-8 py-4 rounded-xl font-headline font-bold hover:bg-secondary-container transition-all">
              Partner with us
            </button>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            <img
              className="w-full h-full object-cover rounded-3xl relative z-10 border border-white/10"
              alt="dynamic close-up of a high-tech digital display panel"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGdYInfFmS6by-de464G5ZaMYE5BZI-17tm4EmrXP_533quB_lc9CfUwndppcXCLvvSurDEuS3KQKHD_JYyI-fD1VCm-luqmPC9IPZ5DP0FPL5IualnI8x18ZJchu5wGC4rECp2g7gadQTei2jUAfWzIzNP-TkKGlNELNQJPxFLyacv6AXWwEc5Ms7wyndjRQHXGfgCQ5vBLIQPOvG6uc6F-XcZkXLDOR4-dKjkVa6b7OW0GJzn9RRtc0fMxnivuzMjHV3gTyAb8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
