import React from 'react';

const orb = 'https://www.figma.com/api/mcp/asset/6ba72fa3-1f6b-436b-84b3-5d91018de591';

const stats = [
  { num:'04', label:'Core Conversion Drivers Optimized' },
  { num:'03', label:'Stage Funnel Engine Built' },
  { num:'02', label:'Times Faster Checkout Flow' },
  { num:'01', label:'Unified Experience Across All Devices' },
];

export default function About() {
  return (
    <section id="about" style={{ position:'relative', padding:'clamp(60px,8vw,120px) 0', background:'var(--bg-primary)', overflow:'hidden' }}>
      {/* Orb */}
      <div style={{ position:'absolute', left:-198, top:-80, width:932, height:878, pointerEvents:'none', opacity:'var(--orb-opacity)', transform:'rotate(-143deg)' }}>
        <img src={orb} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,7vw,100px)', position:'relative', zIndex:2 }}>
        {/* Label */}
        <p className="section-label reveal" style={{ marginBottom:36 }}>001 | ABOUT US</p>

        {/* Two-col header */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'clamp(24px,4vw,80px)', marginBottom:72 }}>
          <h2 className="section-heading reveal d1">
            Unlock Your <span style={{ color:'var(--accent-blue)' }}>Shopify </span>Store's Full Potential With Us.
          </h2>
          <p className="reveal d2" style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', textAlign:'justify', alignSelf:'start', paddingTop: 8 }}>
            We're a focused CRO growth partner that turns insights into measurable revenue by auditing your store, identifying what's costing you sales, and fixing it with thoughtful design, clean development, and proven UX. We continuously test and optimize every change so it's backed by real data and built to drive long-term growth.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'clamp(28px,4vw,48px)' }}>
          {stats.map((s, i) => (
            <div key={s.num} className={`reveal d${i+1}`}>
              <div style={{ width:1, height:105, background:'var(--border-color)', marginBottom:12 }} />
              <p style={{ fontSize:'clamp(40px,5vw,64px)', fontWeight:300, color:'var(--text-primary)', lineHeight:1, letterSpacing:'0.003em' }}>{s.num}</p>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', marginTop:12, maxWidth:230 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
