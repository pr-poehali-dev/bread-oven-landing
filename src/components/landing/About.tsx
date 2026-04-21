import Icon from '@/components/ui/icon';

const timeline = [
  { y: '2011', t: 'Основание мастерской', d: 'Запуск производства в Челябинске' },
  { y: '2015', t: 'Собственное КБ', d: 'Открыто конструкторское бюро' },
  { y: '2019', t: 'Сеть сервиса', d: '42 города присутствия' },
  { y: '2024', t: '12 000 клиентов', d: 'Промышленное и бытовое направление' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-coal-mid relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
              <span className="w-8 h-px bg-fire" /> О КОМПАНИИ
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-6">
              Делаем печи, <span className="text-fire-gradient">которые греют поколения</span>
            </h2>
            <p className="text-white/70 text-lg mb-4">
              ПечиПро — это 14 лет инженерного опыта, собственная производственная площадка в 4 500 м² и команда специалистов, влюблённых в металл и огонь.
            </p>
            <p className="text-white/70 mb-8">
              Мы верим, что печь — это не просто нагревательный прибор, а живая вещь в доме. Поэтому каждую модель проектируем так, чтобы она работала десятилетиями и радовала пользователя.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'Users', n: '120+', l: 'сотрудников' },
                { icon: 'Building2', n: '4 500 м²', l: 'производство' },
                { icon: 'Globe', n: '8 стран', l: 'экспорт' },
                { icon: 'Star', n: '4.9 / 5', l: 'рейтинг' },
              ].map((s) => (
                <div key={s.l} className="bg-coal rounded-xl p-4 border border-coal-light flex items-center gap-3">
                  <Icon name={s.icon} size={22} className="text-fire" />
                  <div>
                    <div className="font-oswald text-xl text-fire-gradient font-bold">{s.n}</div>
                    <div className="text-xs text-white/60">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-fire via-ember to-fire-dark opacity-40" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <div
                  key={t.y}
                  style={{ animationDelay: `${i * 120}ms` }}
                  className="relative pl-14 animate-fade-in-up"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center border-4 border-coal-mid">
                    <Icon name="Flame" size={14} className="text-white" />
                  </div>
                  <div className="bg-coal rounded-2xl p-5 border border-coal-light">
                    <div className="font-oswald text-2xl text-fire-gradient font-bold mb-1">{t.y}</div>
                    <div className="text-white font-medium">{t.t}</div>
                    <div className="text-white/60 text-sm mt-1">{t.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
