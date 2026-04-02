import { Timer, Plug, Shield, Zap, Star, Globe } from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: <Timer size={28} />,
    title: 'Auto-Disconnect Timer',
    desc: 'Set your desired charge window. CABLESNAP cuts power the moment it expires — every single time.',
    color: '#007BFF',
  },
  {
    icon: <Globe size={28} />,
    title: 'Universal Compatibility',
    desc: 'Works with iPhones, Androids, iPads, earbuds — any device that charges via a standard adapter.',
    color: '#00FF9C',
  },
  {
    icon: <Shield size={28} />,
    title: 'Battery Protection',
    desc: 'Prevents overcharging cycles that degrade lithium-ion cells. Keep your battery above 80% health for longer.',
    color: '#FFD700',
  },
  {
    icon: <Zap size={28} />,
    title: 'Energy Saving',
    desc: 'No more phantom loads pulling power overnight. Every watt counts — CABLESNAP makes sure none are wasted.',
    color: '#FF6B6B',
  },
  {
    icon: <Plug size={28} />,
    title: 'Plug-and-Use',
    desc: 'No app, no Bluetooth, no Wi-Fi. Just plug it in and let the hardware do the work — forever.',
    color: '#A29BFE',
  },
  {
    icon: <Star size={28} />,
    title: 'Premium Build Quality',
    desc: 'Flame-retardant housing, surge protection, and certified safe circuitry built to last for years.',
    color: '#FD79A8',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="text-center">
          <div className="section-label">⚡ Features</div>
          <h2 className="section-title">
            Everything You Need,<br />
            <span className="gradient-text">Nothing You Don't.</span>
          </h2>
          <p className="section-subtitle">
            CABLESNAP is engineered to do one thing perfectly —
            protect your battery and save energy, automatically.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card glass-card">
              <div
                className="feature-card__icon"
                style={{ '--feat-color': f.color }}
              >
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
