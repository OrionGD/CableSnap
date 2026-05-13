import React from 'react';
import { ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';

const perks = [
  'Physical cable ejection when fully charged',
  'Custom cut-off limit via CableSnap App',
  'Built-in fire-safety relays & MOSFETs',
  'Free Android app — always in your pocket',
  'Lifetime firmware updates over Wi-Fi',
];

const CTASection = () => (
  <section className="section" id="pricing"
    style={{
      background:
        'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,53,0.06) 0%, transparent 70%)',
    }}
  >
    <div className="container">
      <div
        className="glass-card"
        style={{
          padding: '80px 60px',
          textAlign: 'center',
          border: '2px solid rgba(91,192,190,0.35)',
        }}
      >
        <h2 className="section-title">
          Ready to <span className="gradient-text">Save Your Battery</span>?
        </h2>

        {/* Price block */}
        <div style={{ margin: '32px 0' }}>
          <span
            style={{
              fontSize: '1.3rem',
              color: 'var(--muted)',
              textDecoration: 'line-through',
              marginRight: '16px',
            }}
          >
            ₹4,999
          </span>
          <span
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '5rem',
              fontWeight: 900,
              color: 'var(--white)',
              lineHeight: 1,
            }}
          >
            ₹3,420
          </span>
          <div
            style={{
              display: 'inline-block',
              background: 'var(--orange)',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 700,
              padding: '4px 14px',
              borderRadius: '100px',
              marginLeft: '16px',
              verticalAlign: 'middle',
            }}
          >
            31% OFF
          </div>
          <p style={{ color: 'var(--orange)', fontWeight: 700, marginTop: '12px' }}>
            Limited Launch Price
          </p>
        </div>

        <p
          className="section-subtitle"
          style={{ margin: '0 auto 40px', maxWidth: '480px' }}
        >
          "Pays for itself by skipping a single out-of-warranty battery replacement."
        </p>

        {/* Perks */}
        <ul
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'left',
            marginBottom: '48px',
          }}
        >
          {perks.map((p, i) => (
            <li
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text)' }}
            >
              <CheckCircle size={18} color="var(--cyan)" />
              {p}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="preorder-btn"
            className="btn btn-primary"
            style={{ padding: '20px 52px', fontSize: '1.1rem' }}
          >
            <ShoppingCart size={20} /> Pre-Order Now — ₹3,420
          </button>
          <button
            id="waitlist-btn"
            className="btn btn-outline"
            style={{ padding: '20px 40px', fontSize: '1.1rem' }}
          >
            Get Early Access <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
