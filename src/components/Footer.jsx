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
  <footer style={{ background: 'rgba(15, 17, 18, 0.4)', paddingTop: 'clamp(40px, 8vw, 80px)', borderTop: '1px solid var(--border-color)' }}>
    <div className="container">
      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: 'clamp(30px, 5vw, 60px)',
          marginBottom: 'clamp(40px, 8vw, 64px)',
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
            <Zap size={22} color="var(--neon-accent)" fill="var(--neon-accent)" style={{ filter: 'drop-shadow(0 0 5px var(--neon-glow))' }} />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                letterSpacing: '0.1em',
              }}
            >
              CABLE<span style={{ color: 'var(--neon-accent)' }}>SNAP</span>
            </span>
          </div>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '380px',
              lineHeight: 1.8,
              marginBottom: '28px',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-ui)',
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
                  background: 'rgba(37, 49, 54, 0.4)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition)',
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon-accent)'; e.currentTarget.style.borderColor = 'var(--neon-accent)'; e.currentTarget.style.background = 'var(--hover-surface)'; e.currentTarget.style.boxShadow = 'inset 0 0 10px rgba(0, 243, 255, 0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'rgba(37, 49, 54, 0.4)'; e.currentTarget.style.boxShadow = 'none'; }}
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
              fontFamily: 'var(--font-ui)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--neon-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              textShadow: '0 0 10px var(--neon-glow)',
            }}
          >
            The Team
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-ui)' }}>
            {team.map((name, i) => (
              <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{name}</li>
            ))}
          </ul>
          <div
            style={{
              marginTop: '24px',
              fontSize: '0.8rem',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Wadhwani Foundation ✦ Trichy
          </div>
        </div>

        {/* Links */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--neon-accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              textShadow: '0 0 10px var(--neon-glow)',
            }}
          >
            Resources
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-ui)' }}>
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.95rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
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
          borderTop: '1px solid var(--border-color)',
          paddingTop: '32px',
          paddingBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontFamily: 'var(--font-ui)' }}>
          &copy; {new Date().getFullYear()} CableSnap. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontFamily: 'var(--font-ui)' }}>
          Made with ⚡ in Tiruchirapalli, India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
