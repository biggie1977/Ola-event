import React, { useState, useEffect } from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Products', 'About', 'Order', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(26,18,8,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,148,58,0.2)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 24px'
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? '64px' : '80px', transition: 'height 0.3s ease'
      }}>
        {/* Logo */}
        <div
          onClick={() => setActivePage('Home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'linear-gradient(135deg, #C9943A, #8B6520)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 900, color: 'white',
            fontFamily: 'Playfair Display, serif',
            flexShrink: 0
          }}>O</div>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: '1rem', color: 'white', lineHeight: 1.2
            }}>Ola Event</div>
            <div style={{ fontSize: '0.68rem', color: '#C9943A', letterSpacing: '1.5px', fontWeight: 500 }}>
              MANAGEMENT SERVICES
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <button key={link} onClick={() => setActivePage(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              fontSize: '0.9rem', padding: '8px 16px',
              color: activePage === link ? '#C9943A' : 'rgba(255,255,255,0.85)',
              borderBottom: activePage === link ? '2px solid #C9943A' : '2px solid transparent',
              transition: 'all 0.2s', letterSpacing: '0.3px'
            }}>
              {link}
            </button>
          ))}
          <button onClick={() => setActivePage('Order')} style={{
            background: 'linear-gradient(135deg, #C9943A, #8B6520)',
            border: 'none', color: 'white', padding: '10px 22px',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            fontSize: '0.88rem', cursor: 'pointer', borderRadius: 4,
            marginLeft: 8, transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(201,148,58,0.3)'
          }}>
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          padding: 8, flexDirection: 'column', gap: 5
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: '#C9943A', borderRadius: 2,
              transition: 'all 0.3s'
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(26,18,8,0.98)', padding: '16px 24px 24px',
          borderTop: '1px solid rgba(201,148,58,0.2)'
        }}>
          {links.map(link => (
            <button key={link} onClick={() => { setActivePage(link); setMenuOpen(false); }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500,
              fontSize: '1rem', padding: '12px 0',
              color: activePage === link ? '#C9943A' : 'rgba(255,255,255,0.85)',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
