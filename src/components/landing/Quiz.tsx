import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Option = { label: string; icon: string };
type Question = { id: string; q: string; options: Option[] };

const questions: Question[] = [
  {
    id: 'purpose',
    q: 'Для чего нужна печь?',
    options: [
      { label: 'Баня / сауна', icon: 'Droplets' },
      { label: 'Отопление дома', icon: 'Home' },
      { label: 'Камин для гостиной', icon: 'Flame' },
      { label: 'Производство / цех', icon: 'Factory' },
    ],
  },
  {
    id: 'area',
    q: 'Какая площадь отопления?',
    options: [
      { label: 'До 50 м²', icon: 'Square' },
      { label: '50–100 м²', icon: 'SquareStack' },
      { label: '100–200 м²', icon: 'Grid2x2' },
      { label: 'Более 200 м²', icon: 'Grid3x3' },
    ],
  },
  {
    id: 'fuel',
    q: 'Какое топливо предпочитаете?',
    options: [
      { label: 'Дрова', icon: 'TreePine' },
      { label: 'Уголь', icon: 'Mountain' },
      { label: 'Газ', icon: 'Zap' },
      { label: 'Комбинированное', icon: 'Combine' },
    ],
  },
  {
    id: 'budget',
    q: 'Ориентировочный бюджет?',
    options: [
      { label: 'До 50 000 ₽', icon: 'Wallet' },
      { label: '50 000 – 100 000 ₽', icon: 'CreditCard' },
      { label: '100 000 – 200 000 ₽', icon: 'Banknote' },
      { label: 'Более 200 000 ₽', icon: 'Gem' },
    ],
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const progress = ((step + (done ? 1 : 0)) / (questions.length + 1)) * 100;

  const choose = (val: string) => {
    const next = { ...answers, [questions[step].id]: val };
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 250);
    } else {
      setTimeout(() => setDone(true), 250);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
    setSent(false);
    setPhone('');
    setName('');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="quiz" className="py-24 bg-coal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-fire/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-ember/15 blur-[120px]" />

      <div className="container relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
            <span className="w-8 h-px bg-fire" /> КВИЗ ПОДБОРА <span className="w-8 h-px bg-fire" />
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white">
            Подберём печь <span className="text-fire-gradient">за 60 секунд</span>
          </h2>
          <p className="text-white/60 mt-3">Ответьте на 4 вопроса — получите персональную подборку и скидку 7%.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-coal-mid border border-coal-light rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-fire to-ember transition-all duration-500" style={{ width: `${progress}%` }} />

          {!done && (
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-white/50">
                  Шаг {step + 1} из {questions.length}
                </span>
                <span className="text-sm text-fire-gradient font-bold">{Math.round(progress)}%</span>
              </div>
              <h3 className="font-oswald text-2xl md:text-3xl text-white mb-8">{questions[step].q}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o.label)}
                    className="group text-left flex items-center gap-4 p-5 rounded-xl bg-coal border border-coal-light hover:border-fire transition"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fire/20 to-ember/10 border border-fire/20 flex items-center justify-center group-hover:from-fire/40 group-hover:to-fire/20 transition">
                      <Icon name={o.icon} size={20} className="text-fire" />
                    </div>
                    <span className="text-white font-medium flex-1">{o.label}</span>
                    <Icon name="ChevronRight" size={18} className="text-white/30 group-hover:text-fire group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-sm text-white/50 hover:text-fire flex items-center gap-1"
                >
                  <Icon name="ArrowLeft" size={14} /> Назад
                </button>
              )}
            </div>
          )}

          {done && !sent && (
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fire to-ember mx-auto mb-5 flex items-center justify-center animate-pulse-glow">
                <Icon name="Check" size={28} className="text-coal" />
              </div>
              <h3 className="font-oswald text-2xl md:text-3xl text-white text-center mb-2">Отлично, подборка готова!</h3>
              <p className="text-white/60 text-center mb-6">Оставьте контакты — пришлём 3 модели под ваш запрос и скидку 7%.</p>

              <form onSubmit={submit} className="max-w-md mx-auto space-y-3">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full bg-coal border border-coal-light focus:border-fire rounded-xl px-4 py-3 text-white outline-none transition"
                />
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-coal border border-coal-light focus:border-fire rounded-xl px-4 py-3 text-white outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-fire to-fire-dark text-white font-semibold hover:shadow-lg hover:shadow-fire/40 transition flex items-center justify-center gap-2"
                >
                  Получить подборку <Icon name="ArrowRight" size={18} />
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="w-full text-sm text-white/40 hover:text-fire"
                >
                  Пройти заново
                </button>
              </form>
            </div>
          )}

          {sent && (
            <div className="animate-fade-in-up text-center py-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fire to-ember mx-auto mb-5 flex items-center justify-center animate-pulse-glow">
                <Icon name="PartyPopper" size={32} className="text-coal" />
              </div>
              <h3 className="font-oswald text-3xl text-white mb-2">Заявка принята!</h3>
              <p className="text-white/60 mb-6">Менеджер перезвонит в течение 15 минут и пришлёт подборку.</p>
              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl border border-coal-light text-white hover:border-fire transition"
              >
                Пройти ещё раз
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
