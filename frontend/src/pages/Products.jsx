import React, { useState } from 'react';

const products = [
  {
    id: 1, image: 'rice.jpeg', name: 'Bag of Rice', brand: 'White Pearl',
    category: 'staples', featured: true,
    description: 'Premium quality long-grain white rice. Perfect for jollof, fried rice, or plain. Stacked in large quantities, ideal for events and bulk buyers.',
    variants: ['5kg', '10kg', '25kg', '50kg'],
    badge: 'Bestseller'
  },
  {
    id: 2, image: 'oil.jpeg', name: 'Sunflower Vegetable Oil', brand: 'Pura Refined',
    category: 'oils', featured: true,
    description: 'High-quality refined sunflower oil, 5 litre bottles. High in polyunsaturates. Ideal for frying, shallow cooking, salad dressings and marinades.',
    variants: ['5L bottle'],
    badge: 'Popular'
  },
  {
    id: 3, image: 'spaghetti.jpeg', name: 'Foreign Spaghetti', brand: 'Simply (Tesco)',
    category: 'pasta', featured: true,
    description: 'Premium imported spaghetti from the UK. 500g packs, available per pack or full carton (20 packs). Smooth texture, cooks perfectly every time.',
    variants: ['500g pack', 'Carton (20 packs)'],
    badge: 'Imported'
  },
  {
    id: 4, image: 'quaker oat.webp', name: 'Quaker Oats', brand: 'Quaker',
    category: 'breakfast', featured: false,
    description: 'Wholesome rolled oats for a nutritious breakfast or catering. Great for porridge, smoothies, and healthy snacking at events.',
    variants: ['500g', '1kg'],
    badge: null
  },
  {
    id: 5, image: 'salad.jpeg', name: 'Heinz Salad Cream', brand: 'Heinz',
    category: 'condiments', featured: false,
    description: 'Original deliciously zingy salad cream established since 1869. The perfect condiment for salads, sandwiches and catering spreads.',
    variants: ['Standard bottle'],
    badge: 'UK Brand'
  },
  {
    id: 6, image: 'mayonnise.jpeg', name: 'Heinz Mayonnaise', brand: 'Heinz',
    category: 'condiments', featured: false,
    description: 'Creamy and smooth mayonnaise made with free range eggs. Rich, indulgent taste for salads, sandwiches and event catering.',
    variants: ['Standard bottle'],
    badge: 'UK Brand'
  },
  {
    id: 7, image: 'wine.jpeg', name: 'Light Live Alcohol-Free Wine', brand: 'Light Live',
    category: 'beverages', featured: false,
    description: 'Premium alcohol-free wine. Perfect for events, weddings and celebrations where a sophisticated non-alcoholic option is needed.',
    variants: ['Cabernet Sauvignon (Red)', 'Chardonnay (White)', 'Rosé'],
    badge: 'Halal Friendly'
  }
];

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'staples', label: 'Staples' },
  { key: 'oils', label: 'Oils' },
  { key: 'pasta', label: 'Pasta' },
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'condiments', label: 'Condiments' },
  { key: 'beverages', label: 'Beverages' },
];

const Products = ({ setActivePage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1A1208 0%, #2C1E0A 100%)',
        padding: '64px 24px 80px', textAlign: 'center'
      }}>
        <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white' }}>
          Our Products
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: '1.05rem' }}>
          Premium quality food supplies for every occasion
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        {/* Category Filter */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
          {categories.map(cat => (
            <button key={cat.key} onClick={() => setActiveCategory(cat.key)} style={{
              background: activeCategory === cat.key ? 'linear-gradient(135deg, #C9943A, #8B6520)' : 'white',
              color: activeCategory === cat.key ? 'white' : '#6B5B3E',
              border: activeCategory === cat.key ? 'none' : '1px solid rgba(201,148,58,0.3)',
              padding: '8px 20px', borderRadius: 100,
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.88rem',
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: activeCategory === cat.key ? '0 4px 12px rgba(201,148,58,0.3)' : 'none'
            }}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {filtered.map(product => (
            <div key={product.id}
              onClick={() => setSelected(product)}
              style={{
                background: 'white', borderRadius: 12,
                border: '1px solid rgba(201,148,58,0.12)',
                boxShadow: '0 2px 16px rgba(26,18,8,0.06)',
                cursor: 'pointer', transition: 'all 0.3s', overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,148,58,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(26,18,8,0.06)';
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #FAF5EC, #F0E6D0)',
                padding: '40px 24px', textAlign: 'center',
                borderBottom: '1px solid rgba(201,148,58,0.1)', position: 'relative'
              }}>
                {product.badge && (
                  <span style={{
                    position: 'absolute', top: 16, right: 16,
                    background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                    color: 'white', fontSize: '0.72rem', fontWeight: 600,
                    padding: '4px 12px', borderRadius: 100, letterSpacing: '0.5px'
                  }}>{product.badge}</span>
                )}
                <img src={product.image} alt={product.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1px', marginBottom: 6 }}>
                  {product.brand.toUpperCase()}
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif', fontWeight: 700,
                  fontSize: '1.2rem', color: '#1A1208', marginBottom: 10
                }}>{product.name}</h3>
                <p style={{ color: '#6B5B3E', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 16 }}>
                  {product.description.substring(0, 90)}...
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {product.variants.map(v => (
                    <span key={v} style={{
                      background: 'rgba(201,148,58,0.1)', color: '#8B6520',
                      fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: 100
                    }}>{v}</span>
                  ))}
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#C9943A', fontSize: '0.85rem', fontWeight: 600 }}>View Details →</span>
                  <button onClick={(e) => { e.stopPropagation(); setActivePage('Order'); }} style={{
                    background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                    border: 'none', color: 'white', padding: '8px 20px',
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                    cursor: 'pointer', borderRadius: 4
                  }}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(26,18,8,0.7)',
          zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24, backdropFilter: 'blur(4px)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'white', borderRadius: 16, maxWidth: 560, width: '100%',
            overflow: 'hidden', boxShadow: '0 24px 80px rgba(26,18,8,0.3)',
            animation: 'fadeUp 0.3s ease'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1A1208, #2C1E0A)',
              padding: '40px 32px', textAlign: 'center', position: 'relative'
            }}>
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)',
                border: 'none', color: 'white', width: 32, height: 32, borderRadius: '50%',
                cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>✕</button>
              <img src={selected.image} alt={selected.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginBottom: 12 }} />
              <div style={{ fontSize: '0.75rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1px', marginBottom: 6 }}>
                {selected.brand.toUpperCase()}
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: '1.6rem', fontWeight: 700 }}>
                {selected.name}
              </h2>
            </div>
            <div style={{ padding: '32px' }}>
              <p style={{ color: '#6B5B3E', lineHeight: 1.8, marginBottom: 24 }}>{selected.description}</p>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontWeight: 600, color: '#1A1208', marginBottom: 10, fontSize: '0.9rem' }}>Available In:</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {selected.variants.map(v => (
                    <span key={v} style={{
                      background: 'rgba(201,148,58,0.1)', color: '#8B6520',
                      padding: '6px 14px', borderRadius: 100, fontSize: '0.85rem', fontWeight: 600
                    }}>{v}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={() => { setSelected(null); setActivePage('Order'); }} style={{
                  flex: 1, background: 'linear-gradient(135deg, #C9943A, #8B6520)',
                  border: 'none', color: 'white', padding: '14px',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, cursor: 'pointer', borderRadius: 6
                }}>
                  Place Order
                </button>
                <a href="tel:08035568223" style={{
                  flex: 1, background: '#1A1208', color: 'white', padding: '14px',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 600, borderRadius: 6,
                  textDecoration: 'none', textAlign: 'center', fontSize: '0.9rem'
                }}>
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
