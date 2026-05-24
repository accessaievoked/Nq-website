import React from 'react';

const logos = [
  { src:'https://www.figma.com/api/mcp/asset/c6929630-1282-4905-902c-94f4c861e98e', alt:'Client 1' },
  { src:'https://www.figma.com/api/mcp/asset/a1ccd1c3-6183-491c-a884-1b7777d7a9f3', alt:'Client 2' },
  { src:'https://www.figma.com/api/mcp/asset/8e154b43-1765-4371-b763-843791802080', alt:'Client 3' },
  { src:'https://www.figma.com/api/mcp/asset/0f8cd040-5523-4d21-b079-4fa1a4f80ed0', alt:'Client 4' },
  { src:'https://www.figma.com/api/mcp/asset/c11f09d7-5d39-4d9a-b136-1f3431a6bbbb', alt:'Client 5' },
  { src:'https://www.figma.com/api/mcp/asset/dcff6294-1d9b-4094-8759-8f5d8a7d5187', alt:'Client 6' },
  { src:'https://www.figma.com/api/mcp/asset/8589bc3c-f047-4f9a-8f7c-f3938cb7fcee', alt:'Client 7' },
];
const all = [...logos, ...logos];

export default function LogoTicker() {
  return (
    <section style={{ position:'relative', padding:'56px 0', borderTop:'1px solid var(--border-color)', overflow:'hidden', background:'var(--bg-primary)' }}>
      {/* Fades */}
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:'linear-gradient(to right, var(--bg-primary), transparent)', zIndex:10, pointerEvents:'none' }} />
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:'linear-gradient(to left, var(--bg-primary), transparent)', zIndex:10, pointerEvents:'none' }} />

      <div className="ticker-wrapper">
        <div className="ticker-inner">
          {all.map((logo, i) => (
            <div key={i} style={{ margin:'0 40px', display:'flex', alignItems:'center', flexShrink:0 }}>
              <img src={logo.src} alt={logo.alt} style={{ height:38, width:'auto', objectFit:'contain', opacity:0.6, mixBlendMode:'var(--ticker-blend)', filter:'var(--logo-filter)' }} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
