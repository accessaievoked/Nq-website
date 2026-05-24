import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from '../context/RouterContext';

const logoSrc = 'https://www.figma.com/api/mcp/asset/599fa2e4-e7b4-4c12-a7a9-118f2564973d';

const PAGES = [
  { id: 'home',    label: 'Homepage' },
  { id: 'services',label: 'Services' },
  { id: 'about',   label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Sun icon
function SunIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
// Moon icon
function MoonIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { page, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (id) => { navigate(id); setMobileOpen(false); };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px,7vw,100px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          {/* Logo */}
          <button onClick={() => handleNav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0 }}>
            <img src={logoSrc} alt="Next Quarter" style={{ height: 46, width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter)' }} />
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,36px)' }} className="hidden-mobile">
            {PAGES.map(p => (
              <button key={p.id} className={`nav-link ${page === p.id ? 'active' : ''}`} onClick={() => handleNav(p.id)}>
                {p.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <div className="theme-toggle-thumb">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </div>
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="show-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <div className="theme-toggle-thumb">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </div>
            </button>
            <button onClick={() => setMobileOpen(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-primary)', transition: 'all .3s', transform: mobileOpen ? 'rotate(45deg) translateY(4.5px)' : 'none' }} />
              <span style={{ display: 'block', width: mobileOpen ? 22 : 15, height: 1.5, background: 'var(--text-primary)', transition: 'all .3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-primary)', transition: 'all .3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {PAGES.map(p => (
          <button key={p.id} onClick={() => handleNav(p.id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 28, fontWeight: 500, color: page === p.id ? 'var(--text-primary)' : 'var(--text-secondary)', opacity: page === p.id ? 1 : 0.5, transition: 'opacity .2s' }}>
            {p.label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 768px) { .show-mobile  { display: none !important; } }
      `}</style>
    </>
  );
}
