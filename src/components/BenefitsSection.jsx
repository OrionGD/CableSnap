import React from 'react';
import { ShieldCheck, MapPin, Award } from 'lucide-react';

const BenefitsSection = () => (
  <section className="section" id="trust">
    <div className="container">
      <div
        className="glass-card"
        style={{
          padding: '80px 60px',
          background: 'linear-gradient(135deg, rgba(91,192,190,0.08) 0%, rgba(11,19,43,0.6) 100%)',
          border: '1px solid rgba(91,192,190,0.3)',
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
            background: 'rgba(91,192,190,0.06)',
            border: '1px solid rgba(91,192,190,0.2)',
            borderRadius: '16px',
            padding: '28px 40px',
          }}
        >
          <ShieldCheck size={48} color="var(--cyan)" strokeWidth={1.5} />
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--white)',
              }}
            >
              86.66%
            </div>
            <div style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '1.05rem' }}>
              Venture Viability Index
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '4px' }}>
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
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: 'var(--orange)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {s.num}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '160px' }}>
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
