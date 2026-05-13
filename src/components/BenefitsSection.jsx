import React from 'react';
import { ShieldCheck, MapPin, Award } from 'lucide-react';

const BenefitsSection = () => (
  <section className="section" id="trust">
    <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '80px 60px',
            textAlign: 'center',
          }}
        >
          <div className="section-label" style={{ margin: '0 auto 28px' }}>
            <MapPin size={14} /> Made in India
          </div>
          <h2 className="section-title">Designed for the Indian Market.</h2>
          <p
            className="section-subtitle"
            style={{ margin: '0 auto 56px' }}
          >
            From Tiruchirapalli to the world. We understand the high-usage habits of Indian students
            and professionals—and we built CableSnap specifically to solve their problems.
          </p>

          {/* Credibility badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              background: 'rgba(37, 49, 54, 0.4)',
              border: '1px solid var(--neon-accent)',
              borderRadius: '0',
              padding: '28px 40px',
              boxShadow: 'inset 0 0 10px rgba(0, 243, 255, 0.05)',
              clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)',
            }}
          >
            <ShieldCheck size={48} color="var(--neon-accent)" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 10px var(--neon-glow))' }} />
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--neon-accent)',
                  textShadow: '0 0 10px var(--neon-glow)',
                }}
              >
                86.66%
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Venture Viability Index
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px', fontFamily: 'var(--font-ui)' }}>
                A Wadhwani Foundation Supported Project
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              marginTop: '56px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: '2×', label: 'Faster battery degradation at 100%' },
              { num: '₹3,420', label: 'Launch price — fraction of battery replacement' },
              { num: '100%', label: 'Physical disconnect — zero trickle charge' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: 'var(--neon-accent)',
                    lineHeight: 1,
                    marginBottom: '8px',
                    textShadow: '0 0 15px var(--neon-glow)',
                  }}
                >
                  {s.num}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '160px', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  </section>
);

export default BenefitsSection;
