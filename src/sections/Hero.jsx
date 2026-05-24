import React, { useEffect, useRef } from 'react';

const orbTL = 'https://www.figma.com/api/mcp/asset/db4892e9-cde0-4854-980b-10409f7b44d4';
const orbTR = 'https://www.figma.com/api/mcp/asset/84ea93f8-b49b-4ce5-84d7-4c4153b4b78f';
const arrowSrc = 'https://www.figma.com/api/mcp/asset/8f05b885-81c1-41ec-b96e-18525f89bc73';

export default function Hero({ onCTA }) {
  const elems = useRef([]);
  useEffect(() => {
    elems.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 180 + i * 140);
    });
  }, []);

  const ref = i => el => { elems.current[i] = el; };

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'var(--bg-primary)' }}>

      {/* Orbs */}
      <div style={{ position:'absolute', top:-46, left:-64, width:772, height:524, pointerEvents:'none', opacity:'var(--orb-opacity)', zIndex:0 }}>
        <img src={orbTL} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>
      <div style={{ position:'absolute', top:512, right:-64, width:772, height:524, pointerEvents:'none', opacity: 'calc(var(--orb-opacity)*0.85)', zIndex:0 }}>
        <img src={orbTR} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </div>

      {/* Subtle grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(var(--border-light) 1px,transparent 1px),linear-gradient(90deg,var(--border-light) 1px,transparent 1px)', backgroundSize:'80px 80px', pointerEvents:'none', zIndex:1 }} />

      {/* Content */}
      <div style={{ position:'relative', zIndex:2, textAlign:'center', padding:'0 clamp(20px,5vw,60px)', maxWidth:1100, width:'100%', paddingTop:80 }}>
        <h1
          ref={ref(0)}
          style={{ fontSize:'clamp(26px,4vw,48px)', lineHeight:1.2, letterSpacing:'-0.003em', color:'var(--text-primary)', marginBottom:24, opacity:0, transform:'translateY(28px)', transition:'opacity .7s ease,transform .7s ease' }}
        >
          <span style={{ fontWeight:500 }}>Performance-driven </span>
          <span style={{ fontFamily:'Georgia,serif', color:'var(--accent-blue)', fontSize:'clamp(30px,5vw,58px)', letterSpacing:'-0.003em', fontStyle:'italic' }}>growth</span>
          <span style={{ fontWeight:500 }}> for your Shopify store.</span>
        </h1>

        <p
          ref={ref(1)}
          style={{ fontSize:'clamp(15px,1.5vw,18px)', color:'var(--text-primary)', opacity:0, lineHeight:'28px', maxWidth:797, margin:'0 auto 48px', transform:'translateY(28px)', transition:'opacity .7s ease,transform .7s ease' }}
        >
          We partner with you to identify gaps, fix them, and keep improving what drives your revenue.
        </p>

        <div ref={ref(2)} style={{ opacity:0, transform:'translateY(28px)', transition:'opacity .7s ease,transform .7s ease' }}>
          <button className="btn-primary" onClick={onCTA}>
            Book a free audit
            <span className="btn-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={ref(3)} style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:0, transition:'opacity .7s ease' }}>
        <span style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', fontWeight:500 }}>Scroll</span>
        <div style={{ width:1, height:32, background:'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
      </div>
    </section>
  );
}
