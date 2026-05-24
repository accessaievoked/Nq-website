import React from 'react';

const laptopImg = 'https://www.figma.com/api/mcp/asset/4c402786-f9a5-443a-9bb1-d30ead2419da';
const dotNav    = 'https://www.figma.com/api/mcp/asset/bea31aa5-fe38-4567-9d27-353583a3d61f';

export default function CaseStudy() {
  return (
    <section style={{ padding:'clamp(40px,6vw,80px) 0', background:'var(--bg-primary)' }}>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,7vw,100px)' }}>

        {/* Marquee lines */}
        <div className="reveal" style={{ marginBottom:'clamp(40px,6vw,80px)' }}>
          <p style={{ fontSize:'clamp(18px,3vw,36px)', fontWeight:400, color:'var(--accent-blue)', lineHeight:'44px', letterSpacing:'-0.003em', textTransform:'uppercase', marginBottom:4 }}>
            Find what's costing you YOUR sales...
          </p>
          <p style={{ fontSize:'clamp(18px,3vw,36px)', fontWeight:400, color:'var(--text-primary)', lineHeight:'44px', letterSpacing:'-0.003em', textTransform:'uppercase', textAlign:'right', textShadow:'0 0 4px rgba(128,128,128,0.2)' }}>
            AND Start growing what converts
          </p>
        </div>

        {/* Laptop mockup */}
        <div className="reveal d1" style={{ borderRadius:12, overflow:'hidden', background:'var(--bg-card)', border:'1px solid var(--border-light)' }}>
          <img src={laptopImg} alt="QUE Universe store mockup" style={{ width:'100%', display:'block', objectFit:'cover' }} loading="lazy" />
        </div>

        {/* Dots */}
        <div className="reveal d2" style={{ display:'flex', justifyContent:'center', marginTop:20 }}>
          <img src={dotNav} alt="" style={{ height:6 }} />
        </div>

        {/* Case study info */}
        <div className="reveal d2" style={{ marginTop:40, textAlign:'center' }}>
          <div style={{ position:'relative', marginBottom:24 }}>
            <div style={{ borderTop:'1px solid var(--border-color)', position:'absolute', top:'50%', left:0, right:0 }} />
            <span style={{ position:'relative', background:'var(--bg-primary)', padding:'0 16px', fontSize:18, fontWeight:500, color:'var(--text-primary)' }}>QUE UNIVERSE</span>
          </div>
          <p style={{ fontSize:12, color:'var(--text-secondary)', lineHeight:'16px', letterSpacing:'0.024px', maxWidth:520, margin:'0 auto 24px' }}>
            A lifestyle brand created in collaboration with Shikhar Dhawan, where style meets purpose. It brings together curated trends, premium eyewear, and a touch of sustainable elegance.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            {['Design','Development'].map(t => (
              <span key={t} style={{ padding:'10px 24px', borderRadius:100, background:'var(--bg-card)', fontSize:12, color:'var(--text-primary)', letterSpacing:'0.024px' }}>{t}</span>
            ))}
            <span style={{ padding:'10px 24px', borderRadius:100, background:'var(--bg-highlight)', fontSize:12, color:'var(--text-primary)', letterSpacing:'0.024px' }}>CRO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
