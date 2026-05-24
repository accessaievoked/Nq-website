import React, { useState } from 'react';

const services = [
  { id:'001', title:'CRO Audit & Revenue Diagnosis', desc:'We start with a CRO audit to uncover where your store is losing conversions and revenue. By analyzing user behavior, funnels, and key touchpoints, we diagnose the gaps and identify what needs to change to drive measurable growth.' },
  { id:'002', title:'A/B Testing & Experimentation', desc:'We design and run data-backed A/B tests across your product pages, checkout, and landing pages to identify what actually converts. Every experiment is tracked, measured, and used to build a compounding advantage.' },
  { id:'003', title:'Shopify Store Design & Development', desc:'We build and redesign Shopify stores with a conversion-first mindset. Every layout, component, and interaction is crafted to reduce friction, increase trust, and guide customers toward purchase.' },
  { id:'004', title:'Platform Migration to Shopify', desc:'Moving from WooCommerce, Magento, or another platform? We handle the full migration — products, orders, SEO equity, and custom functionality — without disrupting your business.' },
  { id:'005', title:'SEO for Shopify', desc:'We optimise your Shopify store for organic search with technical SEO, content strategy, and structured data. More visibility, more qualified traffic, more revenue.' },
];

const bars = [
  { h:74,  c:'var(--accent-teal)' },
  { h:101, c:'var(--accent-slate)' },
  { h:50,  c:'var(--accent-blue)' },
  { h:85,  c:'var(--accent-teal)' },
  { h:30,  c:'var(--accent-blue)' },
  { h:124, c:'var(--accent-slate)' },
];

export default function ServicesSection() {
  const [open, setOpen] = useState('001');

  return (
    <section id="services" style={{ padding:'clamp(60px,8vw,120px) 0', background:'var(--bg-primary)' }}>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 clamp(20px,7vw,100px)' }}>

        {/* Header row */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, marginBottom:40, flexWrap:'wrap' }}>
          <div>
            <p className="section-label reveal" style={{ marginBottom:16 }}>002 | OUR SERVICES</p>
            <h2 className="section-heading reveal d1">What Do We Do?</h2>
          </div>
          {/* Bar chart */}
          <div className="reveal d2" style={{ display:'flex', alignItems:'flex-end', gap:10, height:140, flexShrink:0 }}>
            {bars.map((b, i) => (
              <div key={i} style={{ width:20, height:b.h, background:b.c, borderRadius:100, transition:'height .4s ease' }} />
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="reveal d2">
          {services.map(s => (
            <div key={s.id}>
              <div style={{ borderTop:'1px solid var(--border-color)' }} />
              <button className="service-row" onClick={() => setOpen(open === s.id ? null : s.id)}>
                <div style={{ display:'flex', alignItems:'center', gap:'clamp(16px,4vw,56px)' }}>
                  <span style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:'20px', minWidth:36, display:'none' }} className="show-num">/ {s.id}</span>
                  <span style={{ fontSize:'clamp(17px,2vw,22px)', color:'var(--text-primary)', lineHeight:'20px', letterSpacing:'-0.001em' }}>{s.title}</span>
                </div>
                <span style={{ width:30, height:30, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transition:'transform .3s', transform: open===s.id ? 'rotate(45deg)' : 'none' }}>
                    <path d="M10 4v12M4 10h12" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className={`service-content ${open===s.id ? 'open' : ''}`} style={{ paddingLeft:'clamp(0px,12vw,152px)', paddingRight:16 }}>
                <p style={{ fontSize:16, color:'var(--text-body)', lineHeight:'24px', maxWidth:606 }}>{s.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop:'1px solid var(--border-color)' }} />
        </div>
      </div>
      <style>{`@media(min-width:640px){ .show-num{ display:block !important; } }`}</style>
    </section>
  );
}
