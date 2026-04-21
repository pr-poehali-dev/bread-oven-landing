import Icon from '@/components/ui/icon';

const steps = [
  { icon: 'ShoppingCart', t: 'Оформление заказа', d: 'Менеджер подтверждает наличие и комплектацию в течение 15 минут' },
  { icon: 'Package', t: 'Упаковка', d: 'Деревянная обрешётка + плёнка + защитные углы. Страхование груза' },
  { icon: 'Truck', t: 'Доставка', d: 'Транспортными компаниями или собственным автопарком в радиусе 500 км' },
  { icon: 'Wrench', t: 'Монтаж', d: 'Выезд сертифицированной бригады. Пусконаладка и первая растопка' },
  { icon: 'HeartHandshake', t: 'Сервис', d: 'Бесплатное ТО в первый год. Горячая линия 24/7' },
];

const Service = () => {
  return (
    <section id="service" className="py-24 bg-coal relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
            <span className="w-8 h-px bg-fire" /> СЕРВИС И ДОСТАВКА <span className="w-8 h-px bg-fire" />
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white">
            Ведём клиента <span className="text-fire-gradient">«под ключ»</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-fire via-ember to-fire-dark opacity-40" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.t}
                style={{ animationDelay: `${i * 100}ms` }}
                className="relative animate-fade-in-up"
              >
                <div className="relative bg-coal-mid rounded-2xl p-6 border border-coal-light hover:border-fire/40 transition h-full">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-fire to-fire-dark rounded-full blur-md opacity-50" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center">
                      <Icon name={s.icon} size={26} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-coal border-2 border-fire flex items-center justify-center text-xs font-bold text-fire-gradient">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-oswald text-lg text-white text-center mb-2">{s.t}</h3>
                  <p className="text-white/60 text-sm text-center">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { icon: 'MapPin', t: '42 города', d: 'сервисных центров' },
            { icon: 'Clock', t: '24/7', d: 'горячая линия' },
            { icon: 'Timer', t: '3–7 дней', d: 'срок доставки' },
          ].map((m) => (
            <div key={m.t} className="flex items-center gap-4 bg-coal-mid rounded-2xl p-5 border border-coal-light">
              <div className="w-12 h-12 rounded-xl bg-fire/10 border border-fire/30 flex items-center justify-center">
                <Icon name={m.icon} size={22} className="text-fire" />
              </div>
              <div>
                <div className="font-oswald text-xl text-white">{m.t}</div>
                <div className="text-white/60 text-sm">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
