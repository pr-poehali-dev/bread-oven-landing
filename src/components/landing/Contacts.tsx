import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 bg-coal-mid relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-fire/30 blur-[140px]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
              <span className="w-8 h-px bg-fire" /> КОНТАКТЫ
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-6">
              Разожжём <span className="text-fire-gradient">разговор</span>
            </h2>
            <p className="text-white/70 mb-8">
              Ответим на вопросы, подберём модель, рассчитаем доставку и монтаж. Средняя скорость ответа — 15 минут.
            </p>

            <div className="space-y-4">
              <a href="tel:+78001234567" className="flex items-center gap-4 bg-coal rounded-2xl p-5 border border-coal-light hover:border-fire/40 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center group-hover:scale-110 transition">
                  <Icon name="Phone" size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Телефон</div>
                  <div className="font-oswald text-xl text-white">+7 (800) 123-45-67</div>
                </div>
              </a>

              <a href="mailto:sales@pechipro.ru" className="flex items-center gap-4 bg-coal rounded-2xl p-5 border border-coal-light hover:border-fire/40 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ember to-fire flex items-center justify-center group-hover:scale-110 transition">
                  <Icon name="Mail" size={22} className="text-coal" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Email</div>
                  <div className="font-oswald text-xl text-white">sales@pechipro.ru</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-coal rounded-2xl p-5 border border-coal-light">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-steel to-coal-light flex items-center justify-center">
                  <Icon name="MapPin" size={22} className="text-fire" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Адрес производства</div>
                  <div className="font-oswald text-xl text-white">г. Челябинск, ул. Промышленная, 14</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {[
                  { i: 'MessageCircle', h: '#' },
                  { i: 'Send', h: '#' },
                  { i: 'Youtube', h: '#' },
                  { i: 'Instagram', h: '#' },
                ].map((s) => (
                  <a
                    key={s.i}
                    href={s.h}
                    className="w-11 h-11 rounded-xl bg-coal border border-coal-light flex items-center justify-center text-white/70 hover:text-fire hover:border-fire/40 transition"
                  >
                    <Icon name={s.i} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-coal rounded-3xl p-8 border border-coal-light">
            {!sent ? (
              <>
                <h3 className="font-oswald text-2xl text-white mb-2">Оставить заявку</h3>
                <p className="text-white/60 text-sm mb-6">Перезвоним в течение 15 минут</p>
                <form onSubmit={submit} className="space-y-4">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full bg-coal-mid border border-coal-light focus:border-fire rounded-xl px-4 py-3 text-white outline-none"
                  />
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-coal-mid border border-coal-light focus:border-fire rounded-xl px-4 py-3 text-white outline-none"
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, какая печь нужна"
                    rows={4}
                    className="w-full bg-coal-mid border border-coal-light focus:border-fire rounded-xl px-4 py-3 text-white outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-fire to-fire-dark text-white font-semibold hover:shadow-lg hover:shadow-fire/40 transition flex items-center justify-center gap-2"
                  >
                    Отправить заявку <Icon name="Send" size={18} />
                  </button>
                  <p className="text-xs text-white/40 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fire to-ember mx-auto mb-5 flex items-center justify-center animate-pulse-glow">
                  <Icon name="CheckCheck" size={32} className="text-coal" />
                </div>
                <h3 className="font-oswald text-2xl text-white mb-2">Заявка отправлена!</h3>
                <p className="text-white/60">Менеджер свяжется с вами в течение 15 минут</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
