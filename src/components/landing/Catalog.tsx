import { useEffect, useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';
import func2url from '../../../backend/func2url.json';

type Product = {
  id: string;
  name: string;
  vendor: string;
  price: string;
  currency: string;
  url: string;
  description: string;
  picture: string;
  category: string;
  available: boolean;
  params: Record<string, string>;
};

const PLACEHOLDER = 'https://cdn.poehali.dev/projects/dd4f9dfb-21af-43ef-9911-ef437189e13f/files/c1ea403c-627b-4ade-9eed-225abbe3518b.jpg';

const Catalog = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCat, setActiveCat] = useState('Все');
  const [source, setSource] = useState<'feed' | 'sample'>('sample');

  useEffect(() => {
    setLoading(true);
    fetch(func2url.catalog)
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setSource(data.source || 'sample');
        setLoading(false);
      })
      .catch(() => {
        setError('Не удалось загрузить каталог');
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => i.category && set.add(i.category));
    return ['Все', ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(
    () => (activeCat === 'Все' ? items : items.filter((i) => i.category === activeCat)),
    [items, activeCat]
  );

  return (
    <section id="catalog" className="relative py-24 bg-coal-mid overflow-hidden">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-fire/10 blur-[120px]" />
      <div className="container relative">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-fire text-sm font-semibold mb-3">
              <span className="w-8 h-px bg-fire" /> КАТАЛОГ
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white">
              Актуальные модели <span className="text-fire-gradient">в наличии</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-2xl">
              Каталог обновляется автоматически из XML-фида. Цены и остатки — всегда актуальные.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className={`w-2 h-2 rounded-full ${source === 'feed' ? 'bg-green-400' : 'bg-ember'} animate-pulse`} />
            {source === 'feed' ? 'Данные из фида' : 'Демо-каталог'}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeCat === c
                  ? 'bg-gradient-to-r from-fire to-fire-dark text-white border-transparent shadow-lg shadow-fire/30'
                  : 'bg-coal text-white/70 border-coal-light hover:border-fire/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-coal rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        )}

        {error && <div className="text-fire">{error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                style={{ animationDelay: `${i * 60}ms` }}
                className="card-hover group bg-coal rounded-2xl overflow-hidden border border-coal-light animate-fade-in-up"
              >
                <div className="relative h-56 overflow-hidden bg-coal-light">
                  <img
                    src={p.picture || PLACEHOLDER}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
                    }}
                  />
                  {p.available && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-green-500/90 text-white text-xs font-medium">
                      В наличии
                    </span>
                  )}
                  {p.category && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-coal/80 backdrop-blur border border-fire/30 text-white text-xs">
                      {p.category}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-oswald text-xl text-white mb-1 line-clamp-1">{p.name}</h3>
                  <p className="text-sm text-white/60 mb-4 line-clamp-2 min-h-[2.5rem]">
                    {p.description || 'Профессиональная печь с гарантией производителя'}
                  </p>

                  {Object.keys(p.params).length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(p.params).slice(0, 4).map(([k, v]) => (
                        <div key={k} className="bg-coal-mid rounded-lg p-2">
                          <div className="text-[10px] text-white/50 uppercase">{k}</div>
                          <div className="text-xs text-white truncate">{v}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-coal-light">
                    <div>
                      <div className="text-xs text-white/50">Цена</div>
                      <div className="font-oswald text-2xl font-bold text-fire-gradient">
                        {Number(p.price || 0).toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <a
                      href={p.url !== '#' ? p.url : '#contacts'}
                      target={p.url !== '#' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-fire to-fire-dark flex items-center justify-center text-white hover:scale-110 transition"
                    >
                      <Icon name="ArrowUpRight" size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
