import React, { useState } from 'react';

const testimonials = [
  { id:1, quote:"Before working with them, our conversion rate was stuck at 0.9% for almost a year. We always thought the issue was traffic. But within 2–3 months, they fixed key checkout problems we didn't even notice. Now we're at 2.4%.", client:'COVERA' },
  { id:2, quote:"The monthly reports are very clear and helpful. We now understand what is working, what is not, and what actions are being taken. It's rare to see this level of transparency from an agency.", client:'QUE UNIVERSE' },
  { id:3, quote:"They didn't start with selling their service. First, they did a proper audit and showed us where we were losing money. After bad experiences with other agencies, this felt very genuine and different.", client:'MEDFA' },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);

  return (
    <section style={{ padding:'clamp(60px,8vw,120px) 0', background:'var(--bg-primary)' }}>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,7vw,100px)' }}>

        <p className="section-label reveal" style={{ marginBottom:16 }}>004 | TESTIMONIALS</p>
        <h2 className="section-heading reveal d1" style={{ marginBottom:48 }}>WHAT PEOPLE HAVE TO SAY</h2>

        {/* Cards */}
        <div className="reveal d2" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
          {testimonials.map((t, i) => (
            <div key={t.id} className={active===i ? 'testimonial-card' : 'testimonial-card-dim'} onClick={() => setActive(i)}>
              <p style={{ fontSize:17, lineHeight:'26px', color:'var(--text-primary)', marginBottom:28 }}>"{t.quote}"</p>
              <p style={{ fontSize:13, color:'var(--text-secondary)', letterSpacing:'0.026px' }}>{t.client}</p>
            </div>
          ))}
        </div>

        {/* Dot nav */}
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:28 }}>
          {testimonials.map((_,i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ height:8, width: active===i ? 24 : 8, borderRadius:100, background: active===i ? 'var(--text-primary)' : 'var(--text-muted)', border:'none', cursor:'pointer', transition:'all .3s ease' }}
              aria-label={`Testimonial ${i+1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
