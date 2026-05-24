import React from 'react';
import { useRouter } from '../context/RouterContext';

const services = [
  {
    id:'01', title:'CRO Audit & Revenue Diagnosis',
    desc:'We start with a deep-dive CRO audit to uncover exactly where your store is losing conversions and revenue. By analysing user behaviour, session recordings, funnel drop-offs, and key touchpoints, we diagnose every gap and build a prioritised action plan.',
    deliverables:['Full store audit report','Heatmap & session analysis','Prioritised action roadmap','Quick-win recommendations'],
    icon:'🔍',
  },
  {
    id:'02', title:'A/B Testing & Experimentation',
    desc:'We design and run data-backed A/B tests across your product pages, checkout flows, and landing pages to identify what actually converts. Every experiment is tracked, measured, and used to build a compounding advantage over time.',
    deliverables:['Test hypothesis & design','Implementation & QA','Statistical analysis','Iteration strategy'],
    icon:'⚗️',
  },
  {
    id:'03', title:'Shopify Store Design & Development',
    desc:'We build and redesign Shopify stores with a conversion-first mindset. Every layout, component, and interaction is crafted to reduce friction, increase trust, and guide customers toward purchase.',
    deliverables:['UX/UI design','Custom Shopify development','Speed optimisation','Mobile-first build'],
    icon:'🎨',
  },
  {
    id:'04', title:'Platform Migration to Shopify',
    desc:'Moving from WooCommerce, Magento, or another platform? We handle the full migration — products, orders, customer data, SEO equity, and custom functionality — without disrupting your business operations.',
    deliverables:['Full data migration','SEO preservation','Custom feature rebuild','Post-migration QA'],
    icon:'🚀',
  },
  {
    id:'05', title:'SEO for Shopify',
    desc:'We optimise your Shopify store for organic search with technical SEO, content strategy, structured data, and link building. More visibility, more qualified traffic, more revenue.',
    deliverables:['Technical SEO audit','On-page optimisation','Content strategy','Monthly reporting'],
    icon:'📈',
  },
];

export default function ServicesPage() {
  const { navigate } = useRouter();

  return (
    <div className="page-enter" style={{ paddingTop: 80, background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,7vw,100px)', maxWidth: 1440, margin: '0 auto' }}>
        <p className="section-label reveal" style={{ marginBottom: 20 }}>002 | OUR SERVICES</p>
        <h1 className="reveal d1" style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.003em', marginBottom: 24, maxWidth: 700 }}>
          Everything your store needs to <span style={{ color: 'var(--accent-blue)' }}>grow</span>.
        </h1>
        <p className="reveal d2" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: '28px', maxWidth: 600, marginBottom: 48 }}>
          We offer a focused set of services built around one goal: turning your Shopify store into a high-converting revenue machine.
        </p>
        <button className="btn-primary reveal d3" onClick={() => navigate('contact')}>
          Get a free audit
          <span className="btn-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </section>

      {/* Services list */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px) clamp(60px,8vw,120px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} delay={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ s, delay }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      className={`reveal d${(delay % 4) + 1}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        borderRadius: 12, padding: 'clamp(28px,4vw,48px)',
        border: `1px solid ${hov ? 'var(--accent-blue)' : 'var(--border-light)'}`,
        transition: 'border-color .3s, background .3s',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>{s.icon}</span>
            <div>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.12px', fontWeight: 600 }}>/ {s.id}</p>
              <h3 style={{ fontSize: 'clamp(18px,2vw,24px)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: '32px', marginTop: 2 }}>{s.title}</h3>
            </div>
          </div>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: '24px', maxWidth: 640, marginBottom: 24 }}>{s.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {s.deliverables.map(d => (
              <span key={d} style={{ fontSize: 12, color: 'var(--text-secondary)', background: 'var(--bg-primary)', padding: '6px 14px', borderRadius: 100, border: '1px solid var(--border-color)' }}>{d}</span>
            ))}
          </div>
        </div>
        <span style={{ fontSize: 36, fontWeight: 200, color: 'var(--text-muted)', lineHeight: 1, flexShrink: 0 }}>{s.id}</span>
      </div>
    </div>
  );
}
