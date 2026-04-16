import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-emerald-50/80 dark:bg-emerald-950/80 backdrop-blur-md w-full top-0 sticky z-50 bg-emerald-100/20">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50">
          ECA GROUP
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['E-Hailing', 'Tourism', 'Fleet Management', 'Marketing', 'SaaS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-headline tracking-tight font-medium text-emerald-900/70 dark:text-emerald-50/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary p-2 hover:bg-primary/10 rounded-full transition-colors">
            <Search size={24} />
          </button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-medium transition-all hover:scale-95 duration-200">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
