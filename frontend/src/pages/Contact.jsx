import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Address',
      lines: ['Lagos Water Corporation Yard,', 'Opp. Odo Eran Bus Stop,', 'Akilo, Agege, Lagos.']
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      lines: ['08035568223', '07085294933'],
      isPhone: true
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      lines: ['Monday – Saturday: 8am – 7pm', 'Sunday: 10am – 4pm']
    },
  ];

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1A1208 0%, #2C1E0A 100%)',
        padding: '64px 24px 80px', textAlign: 'center'
      }}>
        <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white' }}>
          Contact Us
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: '1.05rem' }}>
          We're here to help. Reach out anytime.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
          {/* Info Cards */}
          <div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', marginBottom: 20, borderRadius: 2 }}/>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#1A1208' }}>
                Get in Touch
              </h2>
              <p style={{ color: '#6B5B3E', marginTop: 12, lineHeight: 1.7 }}>
                Have a question about our products or want to discuss a large order? We'd love to hear from you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contactInfo.map((info, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: 12, padding: '24px',
                  border: '1px solid rgba(201,148,58,0.15)',
                  boxShadow: '0 2px 12px rgba(26,18,8,0.05)'
                }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0
                    }}>{info.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1A1208', fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.3px' }}>
                        {info.title}
                      </div>
                      {info.lines.map((line, j) => (
                        info.isPhone ? (
                          <a key={j} href={`tel:${line}`} style={{
                            display: 'block', color: '#C9943A', fontFamily: 'Playfair Display, serif',
                            fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none',
                            lineHeight: 1.6
                          }}>
                            {line}
                          </a>
                        ) : (
                          <div key={j} style={{ color: '#6B5B3E', fontSize: '0.88rem', lineHeight: 1.7 }}>{line}</div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* TikTok */}
              <div style={{
                background: 'linear-gradient(135deg, #010101, #1a1a2e)',
                borderRadius: 12, padding: '24px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f2ea, #ff0050)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0
                  }}>🎵</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem', marginBottom: 4 }}>TikTok</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Coming soon — follow us!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'white', borderRadius: 16, padding: '40px',
            border: '1px solid rgba(201,148,58,0.15)',
            boxShadow: '0 8px 40px rgba(26,18,8,0.08)'
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>💌</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#1A1208', marginBottom: 12 }}>
                  Message Received!
                </h3>
                <p style={{ color: '#6B5B3E', lineHeight: 1.7 }}>
                  Thank you, <strong>{form.name}</strong>! We will get back to you soon.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', message: '' }); }} style={{
                  marginTop: 24, background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                  border: 'none', color: 'white', padding: '12px 28px',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, cursor: 'pointer', borderRadius: 6
                }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#1A1208', marginBottom: 28 }}>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { label: 'Your Name *', key: 'name', placeholder: 'Full name', type: 'text' },
                      { label: 'Phone Number', key: 'phone', placeholder: '080...', type: 'tel' },
                    ].map(field => (
                      <div key={field.key}>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: '#1A1208', marginBottom: 6 }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          value={form[field.key]}
                          onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                          placeholder={field.placeholder}
                          style={{
                            width: '100%', padding: '11px 14px', borderRadius: 6,
                            border: '1.5px solid rgba(201,148,58,0.25)',
                            fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem',
                            color: '#1A1208', outline: 'none'
                          }}
                          onFocus={e => e.target.style.borderColor = '#C9943A'}
                          onBlur={e => e.target.style.borderColor = 'rgba(201,148,58,0.25)'}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: '#1A1208', marginBottom: 6 }}>Email Address</label>
                    <input
                      type="email" value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="Optional"
                      style={{
                        width: '100%', padding: '11px 14px', borderRadius: 6,
                        border: '1.5px solid rgba(201,148,58,0.25)',
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: '#1A1208', outline: 'none'
                      }}
                      onFocus={e => e.target.style.borderColor = '#C9943A'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,148,58,0.25)'}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.82rem', color: '#1A1208', marginBottom: 6 }}>Message *</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="How can we help you?"
                      rows={5}
                      style={{
                        width: '100%', padding: '11px 14px', borderRadius: 6,
                        border: '1.5px solid rgba(201,148,58,0.25)',
                        fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem',
                        color: '#1A1208', resize: 'vertical', outline: 'none'
                      }}
                      onFocus={e => e.target.style.borderColor = '#C9943A'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,148,58,0.25)'}
                    />
                  </div>
                  <button type="submit" disabled={loading} style={{
                    width: '100%', background: loading ? '#ccc' : 'linear-gradient(135deg, #C9943A, #8B6520)',
                    border: 'none', color: 'white', padding: '14px',
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem',
                    cursor: loading ? 'not-allowed' : 'pointer', borderRadius: 8,
                    boxShadow: loading ? 'none' : '0 6px 20px rgba(201,148,58,0.3)'
                  }}>
                    {loading ? '⏳ Sending...' : '✉️ Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
