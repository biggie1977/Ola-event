import React, { useEffect, useState } from 'react';

const Home = ({ setActivePage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: '500+', label: 'Events Served' },
    { value: '7+', label: 'Product Lines' },
    { value: '100%', label: 'Quality Assured' },
    { value: 'Lagos', label: 'Based & Trusted' },
  ];

  const featured = [
    { image: '/image/rice.jpeg', name: 'Bag of Rice', sub: 'White Pearl — 5kg to 50kg' },
    { image: '/image/oil.jpeg', name: 'Sunflower Oil', sub: 'Pura Refined — 5L bottles' },
    { image: '/image/spaghetti.jpeg', name: 'Foreign Spaghetti', sub: 'Simply (Tesco) — 500g packs' },
    { image: '/image/quaker%20oat.webp', name: 'Quaker Oats', sub: 'Nutritious breakfast staple' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(201,148,58,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(45,80,22,0.12) 0%, transparent 50%),
          linear-gradient(160deg, #1A1208 0%, #2C1E0A 50%, #1A1208 100%)
        `,
        display: 'flex', alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Decorative pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(
            45deg, transparent, transparent 40px,
            rgba(201,148,58,0.03) 40px, rgba(201,148,58,0.03) 41px
          )`,
          pointerEvents: 'none'
        }}/>

        {/* Floating shapes */}
        <div style={{
          position: 'absolute', top: '15%', right: '10%',
          width: 300, height: 300, borderRadius: '50%',
          border: '1px solid rgba(201,148,58,0.12)',
          animation: 'float 6s ease-in-out infinite'
        }}/>
        <div style={{
          position: 'absolute', top: '25%', right: '15%',
          width: 180, height: 180, borderRadius: '50%',
          border: '1px solid rgba(201,148,58,0.08)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}/>

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease'
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(201,148,58,0.12)', border: '1px solid rgba(201,148,58,0.3)',
              borderRadius: 100, padding: '8px 20px', marginBottom: 32
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4A7A26', display: 'block' }}/>
              <span style={{ color: '#E8B86D', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '1px' }}>
                SERVING LAGOS WITH PRIDE
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900, color: 'white', lineHeight: 1.1,
              maxWidth: 750, marginBottom: 12
            }}>
              Your Event,
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #C9943A, #E8B86D, #C9943A)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Our Provisions.
              </span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              maxWidth: 560, marginBottom: 48, lineHeight: 1.8,
              transition: 'all 1s ease 0.3s', opacity: visible ? 1 : 0
            }}>
              Premium food supplies for weddings, birthdays, parties and corporate events.
              Based in Agege, Lagos — delivering quality you can count on.
            </p>

            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap',
              opacity: visible ? 1 : 0, transition: 'all 1s ease 0.5s'
            }}>
              <button onClick={() => setActivePage('Products')} className="btn-primary" style={{
                background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                border: 'none', color: 'white', padding: '16px 36px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 600,
                cursor: 'pointer', borderRadius: 4,
                boxShadow: '0 6px 24px rgba(201,148,58,0.4)',
                transition: 'all 0.3s', letterSpacing: '0.3px'
              }}>
                🛒 Browse Products
              </button>
              <button onClick={() => setActivePage('Order')} style={{
                background: 'transparent', border: '2px solid rgba(201,148,58,0.5)',
                color: '#E8B86D', padding: '16px 36px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 600,
                cursor: 'pointer', borderRadius: 4, transition: 'all 0.3s'
              }}>
                📞 Place an Order
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 1, marginTop: 80,
            opacity: visible ? 1 : 0, transition: 'all 1s ease 0.8s'
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,148,58,0.15)',
                padding: '28px 20px', textAlign: 'center',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === 3 ? '0 8px 8px 0' : 0
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 700, color: '#C9943A'
                }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, letterSpacing: '0.5px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section style={{ background: 'var(--cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#1A1208' }}>
              What We Supply
            </h2>
            <p style={{ color: '#6B5B3E', marginTop: 12, fontSize: '1.05rem' }}>
              Quality products sourced for your events and everyday needs
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {featured.map((item, i) => (
              <div key={i} onClick={() => setActivePage('Products')} style={{
                background: 'white', borderRadius: 12, padding: '36px 28px',
                border: '1px solid rgba(201,148,58,0.15)',
                boxShadow: '0 4px 20px rgba(26,18,8,0.06)',
                cursor: 'pointer', transition: 'all 0.3s',
                animationDelay: `${i * 0.1}s`
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,148,58,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(201,148,58,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,18,8,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(201,148,58,0.15)';
                }}
              >
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', marginBottom: 20 }} />
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontWeight: 700,
                  fontSize: '1.25rem', color: '#1A1208', marginBottom: 8
                }}>{item.name}</h3>
                <p style={{ color: '#6B5B3E', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.sub}</p>
                <div style={{
                  marginTop: 20, fontSize: '0.8rem', fontWeight: 600,
                  color: '#C9943A', letterSpacing: '0.5px'
                }}>VIEW DETAILS →</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button onClick={() => setActivePage('Products')} style={{
              background: 'none', border: '2px solid #C9943A', color: '#C9943A',
              padding: '14px 40px', fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
              borderRadius: 4, transition: 'all 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C9943A'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#C9943A'; }}
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#1A1208', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', marginBottom: 20, borderRadius: 2 }}/>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                Why Lagos Chooses Ola Events
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 20, lineHeight: 1.8, fontSize: '1.02rem' }}>
                From intimate family gatherings to large corporate functions, we supply premium food products that make your event memorable.
              </p>
              <button onClick={() => setActivePage('About')} style={{
                marginTop: 32, background: 'none', border: '2px solid rgba(201,148,58,0.5)',
                color: '#E8B86D', padding: '12px 28px', fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', borderRadius: 4, transition: 'all 0.3s'
              }}>
                Our Story →
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '✅', title: 'Quality Guaranteed', desc: 'Only premium, trusted brands.' },
                { icon: '⚡', title: 'Fast Delivery', desc: 'We move when you need us.' },
                { icon: '💰', title: 'Bulk Pricing', desc: 'Great rates for event orders.' },
                { icon: '🤝', title: 'Trusted Service', desc: 'Hundreds of happy clients.' },
              ].map((f, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,148,58,0.15)',
                  borderRadius: 12, padding: '24px 20px'
                }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{f.icon}</div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: 'white', fontSize: '1rem', marginBottom: 6 }}>{f.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #C9943A 0%, #8B6520 50%, #C9943A 100%)',
        padding: '60px 24px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 700, color: 'white', marginBottom: 16
          }}>
            Ready to Stock Your Event?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: 36 }}>
            Call us now or place your order online. We deliver across Lagos.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:08035568223" style={{
              background: 'white', color: '#8B6520', padding: '14px 32px',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem',
              borderRadius: 4, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8
            }}>
              📞 Call 08035568223
            </a>
            <button onClick={() => setActivePage('Order')} style={{
              background: 'transparent', border: '2px solid white', color: 'white',
              padding: '14px 32px', fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', borderRadius: 4
            }}>
              Order Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
