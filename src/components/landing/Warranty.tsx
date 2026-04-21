import Icon from '@/components/ui/icon';

const certs = [
  { t: 'ТР ТС 016/2011', d: 'Безопасность аппаратов на газообразном топливе' },
  { t: 'ГОСТ Р 53321-2009', d: 'Аппараты теплогенерирующие' },
  { t: 'ISO 9001:2015', d: 'Система менеджмента качества' },
  { t: 'Пожарный сертификат', d: 'Соответствие нормам пожарной безопасности' },
];

const Warranty = () => {
  return (
    <section id="warranty" className="py-24 bg-coal-mid relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
              <span className="w-8 h-px bg-fire" /> ГАРАНТИЯ И СЕРТИФИКАЦИЯ
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-6">
              Уверенность <span className="text-fire-gradient">в документах</span>
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-coal rounded-2xl border border-coal-light">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-oswald text-2xl text-fire-gradient font-bold">10 лет</div>
                  <div className="text-white font-medium mb-1">на корпус и сварные швы</div>
                  <div className="text-white/60 text-sm">Расширенная гарантия при соблюдении правил эксплуатации</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-coal rounded-2xl border border-coal-light">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ember to-fire flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" size={26} className="text-coal" />
                </div>
                <div>
                  <div className="font-oswald text-2xl text-fire-gradient font-bold">14 дней</div>
                  <div className="text-white font-medium mb-1">на возврат без объяснения причин</div>
                  <div className="text-white/60 text-sm">По закону о защите прав потребителей</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-coal rounded-2xl border border-coal-light">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-steel to-coal-light flex items-center justify-center flex-shrink-0">
                  <Icon name="FileCheck" size={26} className="text-fire" />
                </div>
                <div>
                  <div className="font-oswald text-2xl text-fire-gradient font-bold">100%</div>
                  <div className="text-white font-medium mb-1">пакет документов в комплекте</div>
                  <div className="text-white/60 text-sm">Паспорт, сертификаты, инструкция, гарантийный талон</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((c) => (
              <div
                key={c.t}
                className="card-hover bg-coal rounded-2xl p-6 border border-coal-light hover:border-fire/40"
              >
                <div className="w-12 h-12 rounded-xl bg-fire/10 border border-fire/30 flex items-center justify-center mb-4">
                  <Icon name="Award" size={22} className="text-fire" />
                </div>
                <div className="font-oswald text-lg text-white mb-1">{c.t}</div>
                <div className="text-white/60 text-sm">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
