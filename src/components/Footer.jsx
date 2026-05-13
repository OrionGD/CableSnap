import React from 'react';
import { Zap, ExternalLink, Globe, Link2 } from 'lucide-react';

const team = ['Kabileshsudhan SA', 'Godfrey T R', 'Hariprasath M'];
const links = [
  { label: 'Research', href: '#' },
  { label: 'FAQ',      href: '#' },
  { label: 'Support',  href: '#' },
  { label: 'Privacy',  href: '#' },
];

const Footer = () => (
  <footer style={{ background: '#060a17', paddingTop: '80px', borderTop: '1px solid rgba(91,192,190,0.12)' }}>
    <div className="container">
      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '60px',
          marginBottom: '64px',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <Zap size={22} color="var(--cyan)" fill="var(--cyan)" />
            <span
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--cyan)',
                letterSpacing: '0.05em',
              }}
            >
              CABLE<span style={{ color: 'var(--white)' }}>SNAP</span>
            </span>
          </div>
          <p
            style={{
              color: 'var(--muted)',
              maxWidth: '380px',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}
          >
            Developing innovative, customer-focused solutions to solve real-world problems.
            Protecting every charge, one snap at a time.
          </p>
          {/* Social */}
          <div style={{ display: 'flex', gap: '14px' }}>
            {[ExternalLink, Globe, Link2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(91,192,190,0.08)',
                  border: '1px solid rgba(91,192,190,0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  transition: 'color 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--cyan)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(91,192,190,0.2)'; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h4
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            The Team
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {team.map((name, i) => (
              <li key={i} style={{ color: 'var(--muted)' }}>{name}</li>
            ))}
          </ul>
          <div
            style={{
              marginTop: '24px',
              fontSize: '0.8rem',
              color: 'var(--cyan)',
              fontWeight: 600,
            }}
          >
            Wadhwani Foundation ✦ Trichy
          </div>
        </div>

        {/* Links */}
        <div>
          <h4
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Resources
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  style={{ color: 'var(--muted)', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '32px',
          paddingBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} CableSnap. All rights reserved.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
          Made with ⚡ in Tiruchirapalli, India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
