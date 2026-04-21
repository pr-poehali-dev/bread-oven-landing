import { useState } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { href: '#home', label: 'Главная' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#advantages', label: 'Преимущества' },
  { href: '#tech', label: 'Технологии' },
  { href: '#quiz', label: 'Квиз' },
  { href: '#warranty', label: 'Гарантия' },
  { href: '#service', label: 'Сервис' },
  { href: '#about', label: 'О нас' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-coal/80 backdrop-blur-xl border-b border-coal-light">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ember via-fire to-fire-dark flex items-center justify-center animate-pulse-glow">
            <Icon name="Flame" size={20} className="text-coal" />
          </div>
          <span className="font-oswald text-xl font-bold tracking-wide text-white">
            ПЕЧИ<span className="text-fire-gradient">ПРО</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.slice(0, 7).map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+78001234567" className="text-sm text-white/80 hover:text-fire transition">
            +7 (800) 123-45-67
          </a>
          <a
            href="#quiz"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-fire to-fire-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-fire/30 transition"
          >
            Подобрать печь
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-coal-mid border-t border-coal-light animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-fire py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
