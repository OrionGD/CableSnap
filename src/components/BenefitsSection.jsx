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
              { num: 'Health', label: 'Prolonged high-voltage charging accelerates wear' },
              { num: '₹3,420', label: 'Launch price — fraction of battery replacement' },
              { num: '100%', label: 'Physically disconnects to minimize trickle charging' },
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
