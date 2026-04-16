import { Share2, Globe, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-emerald-900 dark:bg-emerald-950 w-full py-16 px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo2.png" 
              alt="ECA Group Logo" 
              className="h-10 w-auto object-contain brightness-0 invert" 
              referrerPolicy="no-referrer"
            />
            <div className="text-2xl font-black text-emerald-50">ECA Group</div>
          </div>
          <p className="text-emerald-100/60 max-w-xs font-headline text-sm uppercase tracking-widest leading-relaxed">
            © 2024 ECA Group. Engineering excellence through precision.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-50 hover:bg-emerald-700 transition-colors"
            >
              <Share2 size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-50 hover:bg-emerald-700 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 text-emerald-100/80">
            <h4 className="text-emerald-50 font-bold uppercase tracking-widest text-xs mb-2">Connect With Us</h4>
            <div className="flex items-center gap-3 group">
              <Phone size={18} className="text-emerald-400" />
              <a href="tel:+60123456789" className="hover:text-emerald-200 transition-colors">+60 12-345 6789</a>
            </div>
            <div className="flex items-center gap-3 group">
              <Mail size={18} className="text-emerald-400" />
              <a href="mailto:contact@eca-group.com" className="hover:text-emerald-200 transition-colors">contact@eca-group.com</a>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-[18px] h-[18px] flex items-center justify-center">
                <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current text-emerald-400">
                  <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                </svg>
              </div>
              <a href="#" className="hover:text-emerald-200 transition-colors">TikTok @ecagroup</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-emerald-100/80">
            <h4 className="text-emerald-50 font-bold uppercase tracking-widest text-xs mb-2">Our Headquarters</h4>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-emerald-400 mt-1 shrink-0" />
              <div className="flex flex-col gap-4 w-full">
                <address className="not-italic leading-relaxed">
                  No21-B, Jalan Suarasa 8/3,<br />
                  Bandar Tun Hussein Onn,<br />
                  43200, Cheras, Selangor
                </address>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=No21-B,+Jalan+Suarasa+8/3,+Bandar+Tun+Hussein+Onn,+43200,+Cheras,+Selangor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-32 rounded-lg overflow-hidden border border-emerald-800/50 hover:border-emerald-500 transition-colors group relative block"
                  title="View on Google Maps"
                >
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <iframe 
                    src="https://maps.google.com/maps?q=No21-B,%20Jalan%20Suarasa%208/3,%20Bandar%20Tun%20Hussein%20Onn,%2043200,%20Cheras,%20Selangor&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                    title="HQ Location Map"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-emerald-800/50 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="font-headline text-[10px] uppercase tracking-widest text-emerald-100/40 hover:text-emerald-100 transition-all">Privacy Policy</a>
          <a href="#" className="font-headline text-[10px] uppercase tracking-widest text-emerald-100/40 hover:text-emerald-100 transition-all">Terms of Service</a>
          <a href="#" className="font-headline text-[10px] uppercase tracking-widest text-emerald-100/40 hover:text-emerald-100 transition-all">Cookie Policy</a>
          <a href="#" className="font-headline text-[10px] uppercase tracking-widest text-emerald-100/40 hover:text-emerald-100 transition-all">Accessibility</a>
        </div>
        <p className="text-emerald-100/20 text-[10px] uppercase tracking-[0.4em]">
          Precision • Sustainability • Excellence
        </p>
      </div>
    </footer>
  );
}
