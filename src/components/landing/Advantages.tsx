import Icon from '@/components/ui/icon';

const items = [
  { icon: 'Factory', t: 'Собственное производство', d: 'Полный цикл: от проектирования до сборки. Контроль качества на каждом этапе.' },
  { icon: 'ShieldCheck', t: 'Гарантия до 10 лет', d: 'Уверены в надёжности — даём расширенную гарантию на корпус и сварные швы.' },
  { icon: 'Truck', t: 'Доставка по РФ и СНГ', d: 'Собственная логистика, упаковка по ГОСТ, страхование груза.' },
  { icon: 'Award', t: 'Сертификаты ТР ТС', d: 'Все модели проходят испытания и имеют полный пакет документов.' },
  { icon: 'Wrench', t: 'Сервис и запчасти', d: 'Сервисные центры в 42 городах. Запчасти на складе 5+ лет после покупки.' },
  { icon: 'Zap', t: 'Инновационные технологии', d: 'Вторичный дожиг, теплоаккумулятор, КПД до 85%. Экономия топлива до 40%.' },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 bg-coal relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
            <span className="w-8 h-px bg-fire" /> ПРЕИМУЩЕСТВА <span className="w-8 h-px bg-fire" />
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white">
            Почему выбирают <span className="text-fire-gradient">нас</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.t}
              style={{ animationDelay: `${i * 80}ms` }}
              className="card-hover group relative bg-coal-mid rounded-2xl p-7 border border-coal-light overflow-hidden animate-fade-in-up"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-fire/5 blur-2xl group-hover:bg-fire/15 transition" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fire/20 to-ember/10 border border-fire/30 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon name={it.icon} size={24} className="text-fire" />
                </div>
                <h3 className="font-oswald text-xl text-white mb-2">{it.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
