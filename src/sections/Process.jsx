import React from 'react';

const orbR = 'https://www.figma.com/api/mcp/asset/84ea93f8-b49b-4ce5-84d7-4c4153b4b78f';

const steps = [
  { id:'001', title:'AUDIT',   desc:'We audit your store to uncover conversion leaks and missed revenue opportunities.', active:false },
  { id:'002', title:'PLAN',    desc:'We plan a clear strategy to fix gaps and improve performance.',                      active:false },
  { id:'003', title:'EXECUTE', desc:'We execute with focused design, development, and UX improvements.',                  active:true  },
  { id:'004', title:'MEASURE', desc:'We measure results continuously to ensure every change drives growth.',              active:false },
];

export default function Process() {
  return (
    <section style={{ position:'relative', padding:'clamp(60px,8vw,120px) 0', background:'var(--bg-primary)', overflow:'hidden' }}>
      {/* Orb */}
      <div style={{ position:'absolute', right:-64, top:0, width:772, height:524, pointerEvents:'none', opacity:'var(--orb-opacity)' }}>
        <img src={orbR} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,7vw,100px)', position:'relative', zIndex:2 }}>

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'clamp(24px,4vw,80px)', marginBottom:56 }}>
          <div>
            <p className="section-label reveal" style={{ marginBottom:16 }}>003 | OUR PROCESS</p>
            <h2 className="section-heading reveal d1">
              Follow Us On a <span style={{ color:'var(--accent-blue)' }}>Journey</span> To a Successful Store.
            </h2>
          </div>
          <p className="reveal d2" style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', textAlign:'justify', alignSelf:'start', paddingTop:8 }}>
            We take a structured, data-first approach to growth by auditing your store to identify friction across the customer journey. Based on these insights, we build and execute a focused optimization plan. Through continuous testing and performance tracking, we refine every touchpoint to create a seamless, high-converting experience.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'clamp(16px,3vw,28px)' }}>
          {steps.map((s, i) => (
            <div key={s.id} className={`process-card reveal d${i+1}`}>
              <div style={{ borderRadius:8, padding:20, height:92, background: s.active ? 'var(--bg-highlight)' : 'var(--bg-card)', transition:'background .3s' }}>
                <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', marginBottom:12 }}>/ {s.id}</p>
                <p style={{ fontSize:22, color:'var(--text-primary)', lineHeight:'20px', letterSpacing:'-0.001em' }}>{s.title}</p>
              </div>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', marginTop:16, paddingLeft:4 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
