import React from 'react';

const About = ({ setActivePage }) => {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1A1208 0%, #2C1E0A 100%)',
        padding: '64px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '10%', left: '5%', width: 200, height: 200,
          borderRadius: '50%', border: '1px solid rgba(201,148,58,0.1)'
        }}/>
        <div style={{
          position: 'absolute', bottom: '-20%', right: '8%', width: 280, height: 280,
          borderRadius: '50%', border: '1px solid rgba(201,148,58,0.08)'
        }}/>
        <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white' }}>
          About Us
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: '1.05rem' }}>
          Your trusted food supply partner in Lagos
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        {/* Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', marginBottom: 20, borderRadius: 2 }}/>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1A1208', lineHeight: 1.3 }}>
              Supplying Lagos Events with Excellence
            </h2>
            <p style={{ color: '#6B5B3E', marginTop: 20, lineHeight: 1.9, fontSize: '1rem' }}>
              Ola Event Management Services was founded with one purpose: to make sure every event in Lagos — from intimate family gatherings to large corporate celebrations — has access to premium quality food supplies without the stress.
            </p>
            <p style={{ color: '#6B5B3E', marginTop: 16, lineHeight: 1.9, fontSize: '1rem' }}>
              Based in the heart of Agege, we source the finest rice, oils, pasta, condiments and beverages so you can focus on what matters most — creating unforgettable memories.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { number: '500+', desc: 'Events successfully supplied' },
              { number: '7+', desc: 'Premium product categories' },
              { number: '100%', desc: 'Quality guaranteed on every order' },
              { number: '2', desc: 'Contact lines — always reachable' },
            ].map((s, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? '#1A1208' : 'white',
                border: '1px solid rgba(201,148,58,0.2)',
                borderRadius: 12, padding: '28px 20px', textAlign: 'center'
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700,
                  color: '#C9943A', marginBottom: 8
                }}>{s.number}</div>
                <div style={{ color: i % 2 === 0 ? 'rgba(255,255,255,0.6)' : '#6B5B3E', fontSize: '0.82rem', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Products Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #C9943A 0%, #8B6520 100%)',
          borderRadius: 16, padding: '48px 48px', marginBottom: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24
        }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: 8 }}>
              Wholesale & Retail Available
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, maxWidth: 500 }}>
              Whether you need a single bag of rice or a full event supply order, we cater to all scales. Competitive bulk pricing for events and caterers.
            </p>
          </div>
          <button onClick={() => setActivePage('Order')} style={{
            background: 'white', border: 'none', color: '#8B6520',
            padding: '14px 32px', fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', borderRadius: 8,
            flexShrink: 0
          }}>
            Place Order →
          </button>
        </div>

        {/* Values */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#1A1208' }}>
            Our Commitments
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { icon: '🌟', title: 'Quality First', body: 'We only stock brands we trust. Every product is vetted for quality before it reaches your hands.' },
            { icon: '🚀', title: 'Prompt Delivery', body: 'We understand events have timelines. We move fast so you are never left waiting.' },
            { icon: '💎', title: 'Premium Imports', body: 'From UK brands like Heinz and Simply (Tesco) to trusted local staples — we source the best.' },
            { icon: '🤝', title: 'Relationship-Driven', body: 'We build long-term relationships with our clients. Your success is our business.' },
          ].map((v, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 12, padding: '32px 24px',
              border: '1px solid rgba(201,148,58,0.12)',
              boxShadow: '0 2px 16px rgba(26,18,8,0.04)'
            }}>
              <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{v.icon}</div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1A1208', fontSize: '1.1rem', marginBottom: 10 }}>
                {v.title}
              </h4>
              <p style={{ color: '#6B5B3E', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){ .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};

export default About;
