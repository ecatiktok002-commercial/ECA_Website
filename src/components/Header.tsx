import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md w-full top-0 sticky z-50 border-b border-emerald-900/5">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src="/logo2.png" 
            alt="ECA Group Logo" 
            className="h-10 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
          <div className="text-2xl font-bold tracking-tighter text-emerald-900">
            ECA GROUP
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['Projects', 'Specialisms', 'Sustainability', 'About Us', 'Careers'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-headline tracking-tight font-medium text-emerald-900/70 hover:text-emerald-600 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary p-2 hover:bg-primary/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-medium transition-all hover:scale-95 duration-200">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
