import { Zap, Mail, Heart } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
import './Footer.css';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Pre-order', href: '#cta' },
  ],
  Company: [
    { label: 'About', href: '#hero' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <Zap size={20} />
            <span>CABLE<span className="footer__logo-snap">SNAP</span></span>
          </a>
          <p className="footer__tagline">
            The smart charger disconnect that protects your battery
            and saves energy — automatically.
          </p>
          <div className="footer__socials">
            <a
              href="mailto:cablesnap@gmail.com"
              className="footer__social-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://instagram.com/cablesnap_official"
              target="_blank"
              rel="noreferrer"
              className="footer__social-btn"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links-grid">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__link-group">
              <h4 className="footer__link-heading">{group}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">
            © {new Date().getFullYear()} CABLESNAP. All rights reserved.
          </span>
          <span className="footer__made">
            Made with <Heart size={12} className="footer__heart" /> for smarter charging
          </span>
        </div>
      </div>
    </footer>
  );
}
