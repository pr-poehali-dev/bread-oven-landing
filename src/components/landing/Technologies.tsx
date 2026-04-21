import Icon from '@/components/ui/icon';

const TECH_IMG = 'https://cdn.poehali.dev/projects/dd4f9dfb-21af-43ef-9911-ef437189e13f/files/c1deba47-4981-4d69-8aa5-56716397cffa.jpg';

const techs = [
  { icon: 'Flame', t: 'Вторичный дожиг', v: '85%', vl: 'КПД' },
  { icon: 'Thermometer', t: 'Теплоаккумулятор', v: '12ч', vl: 'горения' },
  { icon: 'Wind', t: 'Конвекция', v: '+35%', vl: 'к теплу' },
  { icon: 'Gauge', t: 'Плазменная резка', v: '±0.1мм', vl: 'точность' },
];

const Technologies = () => {
  return (
    <section id="tech" className="py-24 bg-coal-mid relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-fire/30 to-ember/20 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-coal-light">
            <img src={TECH_IMG} alt="Технологии производства" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-fire/20 border border-fire/40 backdrop-blur flex items-center justify-center">
                <Icon name="Cpu" size={20} className="text-fire" />
              </div>
              <div>
                <div className="text-xs text-white/60">Собственное КБ</div>
                <div className="font-oswald text-lg text-white">14 инженеров и технологов</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
            <span className="w-8 h-px bg-fire" /> ТЕХНОЛОГИИ
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-6">
            Инженерия <span className="text-fire-gradient">огня</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Мы не просто варим металл. Каждая печь — результат многолетних исследований, испытаний и инженерных решений, которые реально экономят ваши деньги на отоплении.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {techs.map((t) => (
              <div key={t.t} className="bg-coal rounded-xl p-5 border border-coal-light hover:border-fire/40 transition">
                <Icon name={t.icon} size={22} className="text-fire mb-3" />
                <div className="font-oswald text-2xl font-bold text-fire-gradient">{t.v}</div>
                <div className="text-xs text-white/50 mb-2">{t.vl}</div>
                <div className="text-sm text-white/80">{t.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
