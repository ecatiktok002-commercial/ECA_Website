import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 dark:bg-emerald-950 w-full py-12 px-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-black text-emerald-50">ECA Group</div>
          <p className="text-emerald-100/60 max-w-xs font-headline text-sm uppercase tracking-widest">
            © 2024 ECA Group. Engineering excellence through precision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a
            href="#"
            className="font-headline text-sm uppercase tracking-widest text-emerald-100/60 hover:text-emerald-200 transition-all underline decoration-emerald-500/50"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-headline text-sm uppercase tracking-widest text-emerald-100/60 hover:text-emerald-200 transition-all underline decoration-emerald-500/50"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="font-headline text-sm uppercase tracking-widest text-emerald-100/60 hover:text-emerald-200 transition-all underline decoration-emerald-500/50"
          >
            Cookie Policy
          </a>
          <a
            href="#"
            className="font-headline text-sm uppercase tracking-widest text-emerald-100/60 hover:text-emerald-200 transition-all underline decoration-emerald-500/50"
          >
            Accessibility
          </a>
        </div>
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
      <div className="max-w-7xl mx-auto border-t border-emerald-800/50 mt-12 pt-8 text-center">
        <p className="text-emerald-100/30 text-[10px] uppercase tracking-[0.3em]">
          Precision • Sustainability • Excellence
        </p>
      </div>
    </footer>
  );
}
