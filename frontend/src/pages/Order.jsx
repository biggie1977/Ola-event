import React, { useState } from 'react';

const productOptions = [
  'Bag of Rice (White Pearl)',
  'Sunflower Oil 5L (Pura Refined)',
  'Foreign Spaghetti (Simply/Tesco)',
  'Quaker Oats',
  'Heinz Salad Cream',
  'Heinz Mayonnaise',
  'Light Live Alcohol-Free Wine',
];

const Order = () => {
  const [form, setForm] = useState({
    customerName: '', phone: '', email: '', deliveryAddress: '',
    selectedItems: [], message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggle = (item) => {
    setForm(prev => ({
      ...prev,
      selectedItems: prev.selectedItems.includes(item)
        ? prev.selectedItems.filter(i => i !== item)
        : [...prev.selectedItems, item]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customerName || !form.phone || form.selectedItems.length === 0) {
      setError('Please fill in your name, phone number and select at least one product.');
      return;
    }
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const id = `OLA-${Date.now()}`;
      setOrderId(id);
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px' }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: '4rem', marginBottom: 24, animation: 'float 3s ease-in-out infinite' }}>✅</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#1A1208', marginBottom: 12 }}>
            Order Received!
          </h2>
          <p style={{ color: '#6B5B3E', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 8 }}>
            Thank you, <strong>{form.customerName}</strong>! We have received your enquiry.
          </p>
          <div style={{
            background: 'rgba(201,148,58,0.1)', border: '1px solid rgba(201,148,58,0.3)',
            borderRadius: 8, padding: '16px 24px', margin: '20px 0', display: 'inline-block'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#6B5B3E', marginBottom: 4 }}>ORDER REFERENCE</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.3rem', color: '#C9943A' }}>{orderId}</div>
          </div>
          <p style={{ color: '#6B5B3E', fontSize: '0.95rem', lineHeight: 1.8 }}>
            We will contact you at <strong>{form.phone}</strong> shortly to confirm your order and arrange delivery.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={() => { setSubmitted(false); setForm({ customerName: '', phone: '', email: '', deliveryAddress: '', selectedItems: [], message: '' }); }} style={{
              background: 'linear-gradient(135deg, #C9943A, #8B6520)', border: 'none',
              color: 'white', padding: '14px 28px', fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600, cursor: 'pointer', borderRadius: 6
            }}>
              Place Another Order
            </button>
            <a href="tel:08035568223" style={{
              background: '#1A1208', color: 'white', padding: '14px 28px',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600, borderRadius: 6,
              textDecoration: 'none'
            }}>
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>
      <div style={{
        background: 'linear-gradient(135deg, #1A1208 0%, #2C1E0A 100%)',
        padding: '64px 24px 80px', textAlign: 'center'
      }}>
        <div style={{ width: 50, height: 3, background: 'linear-gradient(90deg, #C9943A, #E8B86D)', margin: '0 auto 20px', borderRadius: 2 }}/>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'white' }}>
          Place an Order
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: '1.05rem' }}>
          Fill in the form below and we'll get back to you promptly
        </p>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
        {/* Quick Contact */}
        <div style={{
          background: 'white', borderRadius: 12, padding: '28px 32px', marginBottom: 40,
          border: '1px solid rgba(201,148,58,0.2)',
          display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center',
          boxShadow: '0 4px 20px rgba(26,18,8,0.06)'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1px', marginBottom: 4 }}>PREFER TO CALL?</div>
            <a href="tel:08035568223" style={{ color: '#1A1208', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.3rem', textDecoration: 'none' }}>
              0803 556 8223
            </a>
          </div>
          <div style={{ width: 1, height: 40, background: 'rgba(201,148,58,0.2)' }}/>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#C9943A', fontWeight: 600, letterSpacing: '1px', marginBottom: 4 }}>OR REACH US ON</div>
            <a href="tel:07085294933" style={{ color: '#1A1208', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.3rem', textDecoration: 'none' }}>
              0708 529 4933
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            {[
              { label: 'Full Name *', key: 'customerName', placeholder: 'e.g. Amaka Johnson', type: 'text' },
              { label: 'Phone Number *', key: 'phone', placeholder: 'e.g. 08012345678', type: 'tel' },
              { label: 'Email Address', key: 'email', placeholder: 'Optional', type: 'email' },
              { label: 'Delivery Address', key: 'deliveryAddress', placeholder: 'Your delivery location', type: 'text' },
            ].map(field => (
              <div key={field.key} style={{ gridColumn: field.key === 'deliveryAddress' || field.key === 'email' ? 'auto' : 'auto' }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#1A1208', marginBottom: 6, letterSpacing: '0.3px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 6,
                    border: '1.5px solid rgba(201,148,58,0.25)', fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.95rem', background: 'white', color: '#1A1208',
                    outline: 'none', transition: 'border 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#C9943A'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,148,58,0.25)'}
                />
              </div>
            ))}
          </div>

          {/* Product Selection */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#1A1208', marginBottom: 12, letterSpacing: '0.3px' }}>
              Select Products * (choose all that apply)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 10 }}>
              {productOptions.map(item => (
                <label key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: form.selectedItems.includes(item) ? 'rgba(201,148,58,0.1)' : 'white',
                  border: form.selectedItems.includes(item) ? '1.5px solid #C9943A' : '1.5px solid rgba(201,148,58,0.2)',
                  borderRadius: 8, padding: '12px 16px', cursor: 'pointer', transition: 'all 0.2s'
                }}>
                  <input
                    type="checkbox"
                    checked={form.selectedItems.includes(item)}
                    onChange={() => toggle(item)}
                    style={{ accentColor: '#C9943A', width: 16, height: 16 }}
                  />
                  <span style={{ fontSize: '0.88rem', fontWeight: form.selectedItems.includes(item) ? 600 : 400, color: '#1A1208' }}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#1A1208', marginBottom: 6 }}>
              Additional Notes / Quantities
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              placeholder="e.g. I need 10 bags of 50kg rice, 20 cartons of spaghetti... Please include quantities."
              rows={4}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 6,
                border: '1.5px solid rgba(201,148,58,0.25)',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
                resize: 'vertical', background: 'white', color: '#1A1208', outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = '#C9943A'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,148,58,0.25)'}
            />
          </div>

          {error && (
            <div style={{
              background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: 6,
              padding: '12px 16px', marginBottom: 20, color: '#991B1B', fontSize: '0.9rem'
            }}>
              ⚠️ {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            width: '100%', background: loading ? '#ccc' : 'linear-gradient(135deg, #C9943A, #8B6520)',
            border: 'none', color: 'white', padding: '16px',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer', borderRadius: 8,
            boxShadow: loading ? 'none' : '0 6px 24px rgba(201,148,58,0.35)',
            transition: 'all 0.3s'
          }}>
            {loading ? '⏳ Sending Order...' : '🛒 Submit Order Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
