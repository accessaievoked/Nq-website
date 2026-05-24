import React from 'react';
import { useRouter } from '../context/RouterContext';

const orbL = 'https://www.figma.com/api/mcp/asset/6ba72fa3-1f6b-436b-84b3-5d91018de591';

const values = [
  { title: 'Data over opinions', desc: 'Every recommendation we make is backed by evidence — user data, session recordings, and real conversion metrics. We don\'t guess; we test.' },
  { title: 'Transparency always', desc: 'You always know what we\'re doing, why we\'re doing it, and what impact it had. Monthly reports, clear metrics, no jargon.' },
  { title: 'Revenue is the metric', desc: 'We don\'t celebrate vanity metrics. If a change doesn\'t move revenue, it doesn\'t matter. That\'s the only number we optimise for.' },
  { title: 'Long-term partnership', desc: 'CRO is a continuous process. We build compounding advantages over time — not one-time quick fixes that fade.' },
];

const team = [
  { name: 'Aarav Mehta', role: 'CRO Strategist & Founder', emoji: '👨‍💻' },
  { name: 'Priya Sharma', role: 'UX Designer', emoji: '🎨' },
  { name: 'Dev Kapoor', role: 'Shopify Developer', emoji: '⚙️' },
  { name: 'Sia Rathi', role: 'Analytics & Experimentation', emoji: '📊' },
];

export default function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="page-enter" style={{ paddingTop: 80, background: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>

      {/* Orb */}
      <div style={{ position: 'absolute', left: -198, top: 100, width: 932, height: 878, pointerEvents: 'none', opacity: 'var(--orb-opacity)', transform: 'rotate(-143deg)', zIndex: 0 }}>
        <img src={orbL} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px,8vw,120px) clamp(20px,7vw,100px) clamp(40px,5vw,60px)' }}>
        <p className="section-label reveal" style={{ marginBottom: 20 }}>001 | ABOUT US</p>
        <h1 className="reveal d1" style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.003em', marginBottom: 24, maxWidth: 800 }}>
          We exist to make Shopify stores <span style={{ color: 'var(--accent-blue)' }}>convert better</span>.
        </h1>
        <p className="reveal d2" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: '28px', maxWidth: 640, marginBottom: 48 }}>
          Next Quarter is a focused CRO growth partner for Shopify brands. We turn data and insights into measurable revenue — not reports nobody reads.
        </p>
      </section>

      {/* Mission */}
      <section style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px) clamp(60px,8vw,100px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 48, padding: 'clamp(32px,4vw,56px)', background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border-light)' }}>
          <div className="reveal">
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</p>
            <p style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: '36px', letterSpacing: '-0.002em' }}>
              To help Shopify brands unlock revenue that's already there — hidden in friction, poor UX, and untested assumptions.
            </p>
          </div>
          <div className="reveal d2">
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase', marginBottom: 16 }}>Our Approach</p>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: '24px' }}>
              We embed ourselves in your business, study your data, and run structured experiments. No fluff, no retainer padding, no mystery — just clear hypotheses, clean tests, and compounding results.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px) clamp(60px,8vw,100px)' }}>
        <p className="section-label reveal" style={{ marginBottom: 32 }}>What we stand for</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {values.map((v, i) => (
            <div key={v.title} className={`reveal d${i % 4 + 1}`} style={{ padding: 'clamp(20px,3vw,32px)', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: 'var(--accent-blue)', marginBottom: 12 }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: '20px' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px) clamp(60px,8vw,100px)' }}>
        <p className="section-label reveal" style={{ marginBottom: 32 }}>The team</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
          {team.map((m, i) => (
            <div key={m.name} className={`reveal d${i % 4 + 1}`} style={{ padding: 'clamp(20px,3vw,32px)', background: 'var(--bg-card)', borderRadius: 12, border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{m.emoji}</div>
              <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>{m.name}</p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px) clamp(60px,8vw,100px)', textAlign: 'center' }}>
        <div className="reveal" style={{ padding: 'clamp(40px,6vw,80px)', background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border-light)' }}>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: '44px', marginBottom: 16 }}>
            Ready to grow your store?
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: '24px', maxWidth: 480, margin: '0 auto 32px' }}>
            Start with a free audit — no commitment, no pitch. Just a clear picture of where your revenue is hiding.
          </p>
          <button className="btn-primary" onClick={() => navigate('contact')}>
            Book your free audit
            <span className="btn-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
