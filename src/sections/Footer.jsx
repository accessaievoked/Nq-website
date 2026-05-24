import React from 'react';
import { useRouter } from '../context/RouterContext';

const arrowSrc = 'https://www.figma.com/api/mcp/asset/8f05b885-81c1-41ec-b96e-18525f89bc73';

export default function Footer() {
  const { navigate } = useRouter();
  return (
    <footer id="contact" style={{ position:'relative', background:'var(--bg-primary)', overflow:'hidden' }}>
      <div style={{ background:'var(--bg-footer)', position:'absolute', inset:0, pointerEvents:'none' }} />
      <div style={{ position:'relative', zIndex:2 }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'clamp(48px,7vw,80px) clamp(20px,7vw,100px)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'clamp(40px,6vw,80px)', alignItems:'start' }}>
            {/* Brand */}
            <div className="reveal">
              <h2 style={{ fontSize:'clamp(32px,5vw,48px)', fontWeight:500, color:'var(--text-primary)', lineHeight:'56px', letterSpacing:'-0.005em', marginBottom:8 }}>Next Quarter</h2>
              <p style={{ fontSize:16, color:'var(--text-primary)', lineHeight:'24px' }}>Shopify CRO Agency</p>
            </div>
            {/* CTA */}
            <div className="reveal d2">
              <h3 style={{ fontSize:'clamp(20px,2.5vw,28px)', fontWeight:400, color:'var(--text-primary)', lineHeight:'36px', letterSpacing:'-0.002em', marginBottom:8 }}>We are just a message away</h3>
              <p style={{ fontSize:16, color:'var(--text-body)', lineHeight:'24px', marginBottom:28 }}>We'll get back to you in one business day.</p>
              <a href="mailto:hello@nextquarter.co" className="btn-primary">
                Contact Us
                <span className="btn-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div style={{ overflow:'hidden', paddingBottom:8 }}>
          <p style={{ fontSize:'clamp(50px,13vw,180px)', fontWeight:500, color:'var(--text-primary)', opacity:0.015, letterSpacing:'0.002em', whiteSpace:'nowrap', lineHeight:1, padding:'0 clamp(20px,5vw,60px)' }}>NEXT QUARTER</p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid var(--border-light)', maxWidth:1440, margin:'0 auto', padding:'20px clamp(20px,7vw,100px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:12, color:'var(--text-muted)', lineHeight:'16px' }}>© {new Date().getFullYear()} Next Quarter. All rights reserved.</p>
          <div style={{ display:'flex', gap:24 }}>
            {['Privacy Policy','Terms of Service'].map(t => (
              <a key={t} href="#" style={{ fontSize:12, color:'var(--text-muted)', textDecoration:'none', lineHeight:'16px', transition:'color .2s', ':hover':{ color:'var(--text-secondary)' } }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
