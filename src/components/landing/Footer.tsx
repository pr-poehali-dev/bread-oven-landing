import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-coal border-t border-coal-light py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ember via-fire to-fire-dark flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-coal" />
            </div>
            <span className="font-oswald text-lg font-bold text-white">
              ПЕЧИ<span className="text-fire-gradient">ПРО</span>
            </span>
          </div>
          <div className="text-white/50 text-sm">© 2011–2026 ПечиПро. Все права защищены</div>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-fire transition">Политика</a>
            <a href="#" className="hover:text-fire transition">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
