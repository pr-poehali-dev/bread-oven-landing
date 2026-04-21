import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const items = [
  { q: 'Как быстро вы доставляете печь?', a: 'Срок доставки 3–7 рабочих дней по России в зависимости от региона. Отгружаем со склада в течение 24 часов после оплаты.' },
  { q: 'Можно ли посмотреть печь вживую перед покупкой?', a: 'Да, в нашем шоуруме в Челябинске представлены все модели. Также работают партнёрские точки в 42 городах.' },
  { q: 'Устанавливаете ли вы печь после доставки?', a: 'Да, сертифицированная бригада приезжает на объект, делает монтаж, пусконаладку и первую растопку. Монтаж рассчитывается индивидуально.' },
  { q: 'Какие способы оплаты доступны?', a: 'Принимаем наличные, безналичную оплату, банковские карты, рассрочку 0-0-12 от партнёрских банков, лизинг для юрлиц.' },
  { q: 'Что входит в гарантию 10 лет?', a: 'Гарантия покрывает целостность корпуса и сварных швов при условии соблюдения правил эксплуатации. На чугунные элементы гарантия 5 лет, на фурнитуру — 3 года.' },
  { q: 'Обновляется ли каталог автоматически?', a: 'Да, цены и наличие на сайте подтягиваются из нашего XML-фида с интервалом 10 минут. Вы всегда видите актуальные данные.' },
  { q: 'Делаете ли вы печи под заказ?', a: 'Да, наше КБ разрабатывает индивидуальные проекты для промышленных объектов, коттеджей и бань нестандартной площади.' },
  { q: 'Как работает сервисное обслуживание?', a: 'В первый год ТО бесплатно. Далее — по договору. Запчасти держим на складе минимум 5 лет после снятия модели с производства.' },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-coal relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fire/10 blur-[140px]" />
      <div className="container relative max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
            <span className="w-8 h-px bg-fire" /> ВОПРОСЫ И ОТВЕТЫ <span className="w-8 h-px bg-fire" />
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white">
            Часто <span className="text-fire-gradient">спрашивают</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              className="bg-coal-mid border border-coal-light rounded-2xl px-6 data-[state=open]:border-fire/40 transition"
            >
              <AccordionTrigger className="text-white hover:text-fire text-left font-oswald text-lg py-5">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-5">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
