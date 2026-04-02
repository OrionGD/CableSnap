import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      {/* Gold border top line */}
      <div className="cta-section__gold-line" />

      <div className="container cta-inner">
        {/* Background glow */}
        <div className="cta-blob cta-blob--gold" />
        <div className="cta-blob cta-blob--blue" />

        <div className="cta-content">
          <div className="section-label" style={{ color: 'var(--gold)', background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)'}}>
            🔥 Limited Early Access
          </div>
          <h2 className="cta-headline">
            Upgrade the Way<br />
            <span className="gold-text">You Charge.</span>
          </h2>
          <p className="cta-sub">
            Join hundreds of early adopters protecting their batteries and saving energy today.
            Secure your CABLESNAP unit before we sell out.
          </p>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-gold">
              Pre-order Now <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn btn-outline">
              <Calendar size={18} /> Book a Demo
            </a>
            <a href="#contact" className="btn btn-outline">
              <MessageCircle size={18} /> Contact Us
            </a>
          </div>

          {/* Social proof */}
          <div className="cta-proof">
            <div className="cta-proof__avatars">
              {['👤', '👤', '👤', '👤'].map((a, i) => (
                <span key={i} className="cta-proof__avatar">{a}</span>
              ))}
            </div>
            <span className="cta-proof__text">
              <strong>200+ people</strong> already on the waitlist
            </span>
          </div>
        </div>
      </div>

      {/* Gold border bottom line */}
      <div className="cta-section__gold-line" />
    </section>
  );
}
