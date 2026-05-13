import React from 'react';
import { Zap } from 'lucide-react';

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
        'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(179, 192, 203, 0.05) 0%, transparent 70%)',
    }}
  >
    <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '60px',
            textAlign: 'center',
            background: 'var(--bg-surface)',
            border: '1px solid var(--neon-accent)',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(0, 243, 255, 0.05)',
            clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 10%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, var(--neon-accent), transparent)',
              boxShadow: '0 0 15px var(--neon-glow)',
            }}
          ></div>

          <h3
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--neon-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '16px',
              textShadow: '0 0 10px var(--neon-glow)',
            }}
          >
            Early Access Edition
          </h3>

          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-ui)',
                textShadow: '0 0 20px rgba(132, 148, 160, 0.2)',
              }}
            >
              ₹3,420
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginLeft: '8px', fontFamily: 'var(--font-ui)' }}>
              / unit
            </span>
          </div>

          <ul
            style={{
              textAlign: 'left',
              display: 'inline-block',
              marginBottom: '40px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-ui)',
            }}
          >
            {[
              'Syncs with Android Battery API',
              'Custom Physical Ejection Unit',
              'Mobile App Access (Beta)',
              '1-Year Replacement Warranty',
            ].map((perk, i) => (
              <li
                key={i}
                style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <Zap size={16} color="var(--neon-accent)" fill="var(--neon-accent)" style={{ filter: 'drop-shadow(0 0 5px var(--neon-glow))' }} /> {perk}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Reserve My CableSnap
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-ui)' }}>
              * Limited initial run of 500 units.
            </p>
          </div>
        </div>
    </div>
  </section>
);

export default CTASection;
