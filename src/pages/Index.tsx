import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BANNER1 = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/bucket/4832aba6-54ae-4346-9b3a-c9f488a70c13.jpg';
const BANNER2 = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/bucket/1daee218-d493-4925-a78d-64846103adc3.jpg';
const HOUSE = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/67de7b26-8499-4049-a3f2-620fa2db5445.jpg';
const INTERIOR = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/76dd767a-20d3-4f49-a903-280c8fa63b32.jpg';
const AERIAL = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/b0127b01-b77a-4352-8174-fe1c6787d7d7.jpg';

const NAV = [
  { id: 'about', label: 'О поселке' },
  { id: 'infra', label: 'Инфраструктура' },
  { id: 'gallery', label: 'Фотогалерея' },
  { id: 'docs', label: 'Документы' },
  { id: 'contacts', label: 'Контакты' },
];

const FEATURES = [
  { icon: 'Thermometer', title: 'Мини-бассейн', text: 'Подогрев до 38°C' },
  { icon: 'Flame', title: 'Собственная сауна', text: 'В каждом доме' },
  { icon: 'Tent', title: 'Костровая зона', text: 'Вечера у огня' },
  { icon: 'Trees', title: 'Тишина и природа', text: 'Уединение в лесу' },
];

const INFRA = [
  { icon: 'Thermometer', title: 'Подогреваемый бассейн', text: 'Собственный мини-бассейн с подогревом воды до 38°C — купание под открытым небом круглый год.' },
  { icon: 'Flame', title: 'Финская сауна', text: 'В каждом доме своя сауна с купелью — настоящий банный ритуал без соседей.' },
  { icon: 'Tent', title: 'Костровая зона', text: 'Уютная площадка с очагом и креслами для вечеров под звёздным небом.' },
  { icon: 'Utensils', title: 'Зона барбекю', text: 'Оборудованная терраса для ужинов на свежем воздухе с друзьями и семьёй.' },
  { icon: 'Wifi', title: 'Полный комфорт', text: 'Wi-Fi, тёплые полы, дизайнерская мебель и укомплектованная кухня.' },
  { icon: 'ShieldCheck', title: 'Приватность 24/7', text: 'Закрытая охраняемая территория и собственная парковка у дома.' },
];

const GALLERY = [BANNER1, INTERIOR, BANNER2, HOUSE, AERIAL, INTERIOR];

const DOCS = [
  { title: 'Правила проживания', size: 'PDF · 240 КБ' },
  { title: 'Договор краткосрочного найма', size: 'PDF · 180 КБ' },
  { title: 'Прайс-лист 2026', size: 'PDF · 95 КБ' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', dates: '', comment: '' });
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Home" size={22} className="text-accent" />
            <span className="font-display text-xl tracking-[0.18em]">ФРИДОМ <span className="text-accent">ВИЛАДЖ</span></span>
          </button>
          <nav className="hidden lg:flex items-center gap-9 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-accent transition-colors">{n.label}</button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('order')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] px-6">
            Забронировать
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
        <img src={BANNER1} alt="Фридом Виладж" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <div className="mb-8 animate-fade-up flex flex-col items-start leading-none" style={{ animationDelay: '0.1s' }}>
              <Icon name="Home" size={20} className="text-accent mb-1" />
              <span className="font-display text-2xl tracking-[0.12em]">ФРИДОМ</span>
              <span className="text-[10px] tracking-[0.4em] text-accent mt-0.5">ВИЛАДЖ</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.92] mb-6 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              ОТДЫХ,<br />КОТОРЫЙ<br /><span className="text-accent">ПЕРЕЗАГРУЖАЕТ</span>
            </h1>
            <p className="text-foreground/80 text-lg font-light mb-10 max-w-md animate-fade-up" style={{ animationDelay: '0.45s' }}>
              Отключитесь от города. Подключитесь к себе. Сеть арендных домов в тишине соснового леса.
            </p>
            <div className="flex flex-wrap items-center gap-8 mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="font-display text-4xl md:text-5xl">
                от <span className="text-accent">9 980</span> <span className="text-2xl text-muted-foreground">₽/сутки</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.75s' }}>
              <Button onClick={() => scrollTo('order')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] px-9 h-12">
                Забронировать дом
              </Button>
              <Button onClick={() => scrollTo('gallery')} variant="outline" className="rounded-none border-foreground/40 bg-transparent text-foreground hover:bg-foreground hover:text-background uppercase text-xs tracking-[0.18em] px-9 h-12">
                Смотреть фото
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center py-10 px-4">
              <Icon name={f.icon} size={30} className="text-accent mb-4" />
              <div className="font-display text-lg uppercase tracking-[0.1em]">{f.title}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.14em] mt-1">{f.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={BANNER2} alt="Бассейн под звёздами" className="w-full h-[560px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-8 py-6 font-display text-2xl uppercase tracking-wide">
              Ваше место силы
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">О поселке</p>
            <h2 className="font-display text-5xl leading-tight mb-7 uppercase">Место, где время<br />замедляется</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Фридом Виладж — это сеть премиальных арендных домов для краткосрочного отдыха. Природа, приватность и безупречный комфорт в одном месте.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-9">
              Каждый дом продуман до мелочей: панорамные окна, собственная сауна, подогреваемый мини-бассейн и терраса с видом на сосновый лес.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[['38°C', 'бассейн'], ['24/7', 'приватность'], ['5★', 'сервис']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-accent">{n}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section id="infra" className="py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Инфраструктура</p>
            <h2 className="font-display text-5xl uppercase">Всё для идеального отдыха</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {INFRA.map((it) => (
              <div key={it.title} className="bg-background p-10 hover-lift">
                <Icon name={it.icon} size={32} className="text-accent mb-6" />
                <h3 className="font-display text-2xl mb-3 uppercase tracking-wide">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-luxe text-xs mb-5">Фотогалерея</p>
          <h2 className="font-display text-5xl uppercase">Атмосфера Фридом Виладж</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <div key={i} className={`overflow-hidden ${i === 0 ? 'col-span-2 lg:row-span-2' : ''}`}>
              <img src={src} alt={`Фото ${i + 1}`} className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-full min-h-[300px]' : 'h-64'}`} />
            </div>
          ))}
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" className="py-28 bg-secondary/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Документы</p>
            <h2 className="font-display text-5xl uppercase">Полная прозрачность</h2>
          </div>
          <div className="space-y-3">
            {DOCS.map((d) => (
              <button key={d.title} className="w-full flex items-center justify-between bg-background border border-border p-6 hover:border-accent transition-colors group text-left">
                <div className="flex items-center gap-5">
                  <Icon name="FileText" size={26} className="text-accent" />
                  <div>
                    <div className="font-medium">{d.title}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.12em] mt-0.5">{d.size}</div>
                  </div>
                </div>
                <Icon name="Download" size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER + CONTACTS */}
      <section id="order" className="relative py-28 overflow-hidden">
        <img src={AERIAL} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
        <div id="contacts" className="relative z-10 container grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Форма заказа</p>
            <h2 className="font-display text-5xl mb-7 uppercase">Забронируйте<br />свой дом</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Оставьте заявку — мы подберём дом под ваши даты и расскажем об условиях проживания.
            </p>
            <div className="space-y-5">
              <a href="tel:+74950000000" className="flex items-center gap-4 hover:text-accent transition-colors">
                <Icon name="Phone" size={20} className="text-accent" /> +7 (495) 000-00-00
              </a>
              <a href="mailto:hello@freedomvilage.ru" className="flex items-center gap-4 hover:text-accent transition-colors">
                <Icon name="Mail" size={20} className="text-accent" /> hello@freedomvilage.ru
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Icon name="MapPin" size={20} className="text-accent" /> Московская область, 60 км от МКАД
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"><Icon name="Send" size={18} /></a>
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"><Icon name="Instagram" size={18} /></a>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-card border border-border p-8 md:p-10">
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="rounded-none h-12 bg-background" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="rounded-none h-12 bg-background" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Даты заезда</label>
                <Input value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} placeholder="Например, 12–15 июля" className="rounded-none h-12 bg-background" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Комментарий</label>
                <Textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Количество гостей, пожелания" className="rounded-none min-h-[90px] bg-background" />
              </div>
              <Button type="submit" className="w-full rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] h-12">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={18} className="text-accent" />
            <span className="font-display text-lg tracking-[0.16em] text-foreground">ФРИДОМ <span className="text-accent">ВИЛАДЖ</span></span>
          </div>
          <p>© 2026 Фридом Виладж. Природа. Комфорт. Уединение.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
