import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/67de7b26-8499-4049-a3f2-620fa2db5445.jpg';
const INTERIOR = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/76dd767a-20d3-4f49-a903-280c8fa63b32.jpg';
const AERIAL = 'https://cdn.poehali.dev/projects/26001968-dbd9-4c66-acc0-1592f3e658b4/files/b0127b01-b77a-4352-8174-fe1c6787d7d7.jpg';

const NAV = [
  { id: 'about', label: 'О поселке' },
  { id: 'infra', label: 'Инфраструктура' },
  { id: 'gallery', label: 'Фотогалерея' },
  { id: 'docs', label: 'Документы' },
  { id: 'contacts', label: 'Контакты' },
];

const INFRA = [
  { icon: 'Trees', title: 'Сосновый лес', text: 'Дома стоят среди вековых сосен в тишине заповедной природы.' },
  { icon: 'Waves', title: 'Озеро и пляж', text: 'Чистое озеро в шаговой доступности с собственным пирсом.' },
  { icon: 'Flame', title: 'Баня и СПА', text: 'Финская сауна, купель и зона релакса для гостей поселка.' },
  { icon: 'Utensils', title: 'Летняя кухня', text: 'Оборудованные зоны барбекю и террасы для ужинов на природе.' },
  { icon: 'Car', title: 'Парковка', text: 'Закрытая охраняемая территория с местом для авто у каждого дома.' },
  { icon: 'Wifi', title: 'Все удобства', text: 'Wi-Fi, тёплые полы, полностью укомплектованные кухни.' },
];

const GALLERY = [HERO, INTERIOR, AERIAL, INTERIOR, HERO, AERIAL];

const DOCS = [
  { title: 'Правила проживания', size: 'PDF · 240 КБ' },
  { title: 'Договор краткосрочного найма', size: 'PDF · 180 КБ' },
  { title: 'Прайс-лист на 2026 год', size: 'PDF · 95 КБ' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', dates: '', comment: '' });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="font-display text-2xl tracking-wide">
            Freedom <span className="text-accent">Village</span>
          </button>
          <nav className="hidden lg:flex items-center gap-9 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-accent transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('order')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] px-6">
            Забронировать
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <img src={HERO} alt="Freedom Village" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-white/80 uppercase tracking-luxe text-xs mb-7 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Загородные дома · краткосрочный найм
          </p>
          <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 animate-fade-up text-balance" style={{ animationDelay: '0.25s' }}>
            Уединение в&nbsp;тишине<br />соснового леса
          </h1>
          <p className="text-white/85 text-lg font-light mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.45s' }}>
            Элегантные дома с панорамными окнами, баней и видом на озеро — для отдыха, который хочется повторить.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button onClick={() => scrollTo('order')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] px-9 h-12">
              Забронировать дом
            </Button>
            <Button onClick={() => scrollTo('gallery')} variant="outline" className="rounded-none border-white/60 bg-transparent text-white hover:bg-white hover:text-foreground uppercase text-xs tracking-[0.18em] px-9 h-12">
              Смотреть фото
            </Button>
          </div>
        </div>
        <button onClick={() => scrollTo('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-10 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <Icon name="ChevronDown" size={28} className="animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">О поселке</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-7">
              Место, где время&nbsp;замедляется
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Freedom Village — это камерный поселок премиальных домов для краткосрочной аренды.
              Мы создали пространство, в котором сочетаются природа, приватность и безупречный комфорт.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-9">
              Каждый дом продуман до мелочей: дизайнерская мебель, натуральные материалы,
              панорамное остекление и собственная терраса с видом на лес.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[['8', 'домов'], ['24/7', 'охрана'], ['5★', 'сервис']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-accent">{n}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={INTERIOR} alt="Интерьер дома" className="w-full h-[560px] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-accent text-accent-foreground px-8 py-6 font-display text-2xl">
              от 12 000 ₽ / ночь
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section id="infra" className="py-28 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Инфраструктура</p>
            <h2 className="font-display text-4xl md:text-5xl">Всё для идеального отдыха</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {INFRA.map((it) => (
              <div key={it.title} className="bg-background p-10 hover-lift">
                <Icon name={it.icon} size={32} className="text-accent mb-6" />
                <h3 className="font-display text-2xl mb-3">{it.title}</h3>
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
          <h2 className="font-display text-4xl md:text-5xl">Атмосфера Freedom Village</h2>
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
      <section id="docs" className="py-28 bg-secondary/50">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Документы</p>
            <h2 className="font-display text-4xl md:text-5xl">Полная прозрачность</h2>
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
        <div className="absolute inset-0 bg-foreground/85" />
        <div id="contacts" className="relative z-10 container grid lg:grid-cols-2 gap-16">
          <div className="text-background">
            <p className="text-accent uppercase tracking-luxe text-xs mb-5">Форма заказа</p>
            <h2 className="font-display text-4xl md:text-5xl mb-7 text-background">Забронируйте свой дом</h2>
            <p className="text-background/70 leading-relaxed mb-10 max-w-md">
              Оставьте заявку — мы подберём дом под ваши даты и расскажем об условиях проживания.
            </p>
            <div className="space-y-5 text-background/90">
              <a href="tel:+74950000000" className="flex items-center gap-4 hover:text-accent transition-colors">
                <Icon name="Phone" size={20} className="text-accent" /> +7 (495) 000-00-00
              </a>
              <a href="mailto:hello@freedomvilage.ru" className="flex items-center gap-4 hover:text-accent transition-colors">
                <Icon name="Mail" size={20} className="text-accent" /> hello@freedomvilage.ru
              </a>
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={20} className="text-accent" /> Московская область, 60 км от МКАД
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"><Icon name="Send" size={18} /></a>
                <a href="#" className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"><Icon name="Instagram" size={18} /></a>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-background p-8 md:p-10">
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="rounded-none border-border h-12" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="rounded-none border-border h-12" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Даты заезда</label>
                <Input value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} placeholder="Например, 12–15 июля" className="rounded-none border-border h-12" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Комментарий</label>
                <Textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} placeholder="Количество гостей, пожелания" className="rounded-none border-border min-h-[90px]" />
              </div>
              <Button type="submit" className="w-full rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase text-xs tracking-[0.18em] h-12">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/60 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-display text-xl text-background">Freedom <span className="text-accent">Village</span></div>
          <p>© 2026 Freedom Village. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
