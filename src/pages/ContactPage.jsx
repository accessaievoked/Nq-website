import React, { useState } from 'react';

const orbR = 'https://www.figma.com/api/mcp/asset/0edf02b4-8c7e-4caa-9b00-73c1a9dd6862';

const faqs = [
  { q: 'What does the free audit include?', a: 'We review your store\'s conversion funnel, UX, checkout flow, page speed, and mobile experience. You\'ll get a prioritised list of issues and opportunities within 3–5 business days.' },
  { q: 'How long does engagement typically last?', a: 'Most clients work with us on a 3–6 month retainer. CRO is a compounding process — the longer we run experiments, the better your results get.' },
  { q: 'Do I need a large store to benefit?', a: 'You need enough traffic for statistical significance in tests — typically 10,000+ monthly visitors. We\'ll let you know during the audit if you\'re ready.' },
  { q: 'How do you measure success?', a: 'We track conversion rate, revenue per visitor, average order value, and checkout completion rate. Monthly reports show exactly what changed and why.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '1px solid var(--border-color)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', lineHeight: '24px', paddingRight: 24 }}>{q}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, transition: 'transform .3s', transform: open ? 'rotate(45deg)' : 'none' }}>
          <path d="M10 4v12M4 10h12" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', opacity: open ? 1 : 0, transition: 'max-height .4s ease, opacity .3s ease' }}>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: '20px', paddingBottom: 20, maxWidth: 600 }}>{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', store: '', message: '', budget: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.store.trim()) e.store = 'Store URL is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSent(true);
  };

  const field = (name, placeholder, type = 'text', required = false) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase' }}>
        {placeholder}{required && <span style={{ color: 'var(--accent-teal)' }}> *</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
        placeholder={placeholder}
        style={{
          background: 'var(--bg-card)', border: `1px solid ${errors[name] ? 'var(--accent-teal)' : 'var(--border-color)'}`,
          borderRadius: 8, padding: '14px 16px', fontSize: 15, color: 'var(--text-primary)',
          outline: 'none', transition: 'border-color .2s',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
        onBlur={e => e.target.style.borderColor = errors[name] ? 'var(--accent-teal)' : 'var(--border-color)'}
      />
      {errors[name] && <p style={{ fontSize: 12, color: 'var(--accent-teal)', marginTop: 2 }}>{errors[name]}</p>}
    </div>
  );

  return (
    <div className="page-enter" style={{ paddingTop: 80, background: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>

      {/* Orb */}
      <div style={{ position: 'absolute', right: -64, top: 200, width: 772, height: 524, pointerEvents: 'none', opacity: 'var(--orb-opacity)', zIndex: 0 }}>
        <img src={orbR} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px,8vw,100px) clamp(20px,7vw,100px)' }}>

        {/* Header */}
        <p className="section-label reveal" style={{ marginBottom: 20 }}>GET IN TOUCH</p>
        <h1 className="reveal d1" style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15, letterSpacing: '-0.003em', marginBottom: 16, maxWidth: 700 }}>
          We are just a <span style={{ color: 'var(--accent-blue)' }}>message away</span>.
        </h1>
        <p className="reveal d2" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: '28px', marginBottom: 64 }}>
          We'll get back to you in one business day.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>

          {/* Form */}
          {sent ? (
            <div className="reveal" style={{ padding: 'clamp(32px,5vw,56px)', background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
              <h3 style={{ fontSize: 24, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 12 }}>Message sent!</h3>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: '24px' }}>
                Thanks for reaching out. We'll review your store and be in touch within one business day.
              </p>
            </div>
          ) : (
            <form className="reveal" onSubmit={handleSubmit} noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 'clamp(28px,4vw,48px)', background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>Book a free audit</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {field('name', 'Your name', 'text', true)}
                {field('email', 'Email address', 'email', true)}
              </div>
              {field('store', 'Shopify store URL', 'url', true)}

              {/* Budget select */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase' }}>Monthly revenue range</label>
                <select
                  value={form.budget}
                  onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, padding: '14px 16px', fontSize: 15, color: form.budget ? 'var(--text-primary)' : 'var(--text-muted)', outline: 'none' }}
                >
                  <option value="">Select range</option>
                  <option>Under $10k</option>
                  <option>$10k – $50k</option>
                  <option>$50k – $200k</option>
                  <option>$200k+</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase' }}>Tell us your biggest challenge</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  placeholder="e.g. Low conversion rate despite good traffic..."
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 8, padding: '14px 16px', fontSize: 15, color: 'var(--text-primary)', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                Send message
                <span className="btn-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          )}

          {/* Info + FAQ */}
          <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Contact info */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase', marginBottom: 16 }}>Direct contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Email', val: 'hello@nextquarter.co', href: 'mailto:hello@nextquarter.co' },
                  { label: 'Twitter / X', val: '@nextquartercro', href: '#' },
                  { label: 'LinkedIn', val: 'Next Quarter', href: '#' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{c.label}</span>
                    <a href={c.href} style={{ fontSize: 14, color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>{c.val}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12px', textTransform: 'uppercase', marginBottom: 8 }}>FAQ</p>
              {faqs.map(f => <FAQItem key={f.q} {...f} />)}
              <div style={{ borderTop: '1px solid var(--border-color)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
