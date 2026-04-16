export default function FleetManagement() {
  return (
    <section id="fleet-management" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
            Operational Supremacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Daily Rentals & Intelligent Fleet Management
          </h2>
          <p className="text-on-surface-variant text-lg">
            At ECA Group, our daily, weekly, and monthly car rental services for private clients are driven by uncompromising quality and safety. However, the secret to our scale lies in our Built-In Fleet Management Architecture.
          </p>
        </div>
        <div className="bg-surface-container-low rounded-3xl p-4 md:p-12 emerald-bloom">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-white border-l-4 border-primary hover:bg-emerald-50 transition-colors cursor-pointer">
                <h4 className="font-headline font-bold text-primary mb-1">
                  Digital Oversight
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Every vehicle is monitored through proprietary, customized digital systems.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-transparent hover:bg-white transition-all cursor-pointer">
                <h4 className="font-headline font-bold text-primary/60 mb-1">
                  Real-Time Tracking
                </h4>
                <p className="text-sm text-on-surface-variant/70">
                  Track real-time maintenance, insurance renewals, and safety metrics.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-transparent hover:bg-white transition-all cursor-pointer">
                <h4 className="font-headline font-bold text-primary/60 mb-1">
                  Absolute Transparency
                </h4>
                <p className="text-sm text-on-surface-variant/70">
                  Minimizes downtime, maximizes asset lifespan, and provides confidence to stakeholders.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl overflow-hidden relative border border-outline-variant/20 shadow-inner">
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
              <img
                className="w-full h-full object-cover"
                alt="abstract professional data visualization dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLASegY4hB21AiSz86v4tFAWLqt9QtWRJg0Pmm8QAzqrvkp4khXaTN-IKGr62KBzrKHI5hJ2GdGhxMalkhkY8OGSiVN7vlJJFhwvCM8wRd0KTg0rTzz2sfdrQ0qZorQOs4EbnxAeuFpKtwlWBZUufMkKsuiWl5tMeh_DwjEaHuT5JtyQ9vrs8Ncy_EyUPl7yGuKEV598HROTW9teP4DrRcKG8NaXOOVaj-p2Ye4ChAGZ4NyKS-HP9sDtHlfMYGo7CAbsPiNcukCtw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
