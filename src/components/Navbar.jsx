import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Specs', href: '#specs' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <Zap size={22} className="navbar__logo-icon" />
          <span>CABLE<span className="navbar__logo-snap">SNAP</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="btn btn-primary navbar__cta">
          Pre-order Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="navbar__drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#cta" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Pre-order Now
        </a>
      </div>
    </header>
  );
}
