import React from 'react';

const Footer = ({ setActivePage }) => {
  const links = ['Home', 'Products', 'About', 'Order', 'Contact'];

  return (
    <footer style={{ background: '#0F0B05', borderTop: '1px solid rgba(201,148,58,0.15)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%',
                background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Playfair Display, serif', fontSize: '1.2rem',
                fontWeight: 900, color: 'white'
              }}>O</div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                  Ola Event Management Services
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 320 }}>
              Premium food supplies for events and everyday needs. Based in Agege, Lagos — serving with quality and pride.
            </p>
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: '0.72rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1.5px', marginBottom: 10 }}>
                CONTACT US
              </div>
              <a href="tel:08035568223" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.92rem', marginBottom: 4 }}>
                📞 08035568223
              </a>
              <a href="tel:07085294933" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.92rem' }}>
                📞 07085294933
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: '0.72rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1.5px', marginBottom: 20 }}>
              NAVIGATION
            </div>
            {links.map(link => (
              <button key={link} onClick={() => setActivePage(link)} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem', padding: '5px 0', transition: 'color 0.2s', textAlign: 'left'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9943A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Address */}
          <div>
            <div style={{ fontSize: '0.72rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1.5px', marginBottom: 20 }}>
              FIND US
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.9 }}>
              Lagos Water Corporation Yard,<br />
              Opp. Odo Eran Bus Stop,<br />
              Akilo, Agege,<br />
              Lagos State, Nigeria.
            </div>
            <div style={{ marginTop: 20, fontSize: '0.72rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1.5px', marginBottom: 10 }}>
              HOURS
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.7 }}>
              Mon – Sat: 8:00am – 7:00pm<br />
              Sunday: 10:00am – 4:00pm
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12
        }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Ola Event Management Services. All rights reserved.
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            Lagos, Nigeria 🇳🇬
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
    </footer>
  );
};

export default Footer;
