import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/dd4f9dfb-21af-43ef-9911-ef437189e13f/files/8af4f5f5-129c-4c95-9297-21832c485655.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-coal noise-overlay pt-16">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-fire/30 blur-[120px] animate-fire" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-ember/20 blur-[140px] animate-fire delay-300" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coal-mid border border-fire/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-fire animate-pulse" />
            <span className="text-sm text-white/80">Производитель №1 в России</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
            Печи, в которых<br />
            <span className="text-fire-gradient">живёт огонь</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-xl">
            Промышленные и бытовые печи премиум-класса. 14 лет производства, собственное КБ, гарантия до 10 лет.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="group px-7 py-4 rounded-xl bg-gradient-to-r from-fire to-fire-dark text-white font-semibold hover:shadow-2xl hover:shadow-fire/40 transition flex items-center gap-2"
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#quiz"
              className="px-7 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition flex items-center gap-2"
            >
              <Icon name="Sparkles" size={18} />
              Пройти квиз
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
            {[
              { n: '14+', l: 'лет опыта' },
              { n: '12 000', l: 'печей в работе' },
              { n: '10 лет', l: 'гарантия' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-oswald text-3xl font-bold text-fire-gradient">{s.n}</div>
                <div className="text-sm text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in-up delay-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-fire/30 to-ember/20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-coal-light shadow-2xl shadow-fire/20">
            <img src={HERO_IMG} alt="Печь премиум класса" className="w-full h-[560px] object-cover" />
            <div className="absolute top-4 right-4 bg-coal/80 backdrop-blur-lg border border-fire/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-fire" />
              <span className="text-sm text-white">Сертификат ТР ТС</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-coal/80 backdrop-blur-lg border border-coal-light rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-white/60">Популярная модель</div>
                <div className="font-oswald text-lg text-white">Жар-птица Pro</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/60">от</div>
                <div className="font-oswald text-xl text-fire-gradient font-bold">67 200 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
