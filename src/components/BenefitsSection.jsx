import './BenefitsSection.css';

const benefits = [
  {
    emoji: '🔋',
    title: 'Extend Battery Life',
    desc: 'Lithium-ion batteries last significantly longer when kept below 90% charge. CABLESNAP does this automatically.',
    highlight: 'Up to 2× longer battery lifespan',
    color: '#00FF9C',
  },
  {
    emoji: '😴',
    title: 'Peace of Mind',
    desc: 'Go to sleep knowing your phone will stop charging at the right time. No more midnight unplug reminders.',
    highlight: 'Zero charging anxiety',
    color: '#007BFF',
  },
  {
    emoji: '💡',
    title: 'Reduce Electricity Usage',
    desc: 'Cut down on wasted standby power. CABLESNAP pays for itself through electricity savings within months.',
    highlight: 'Lower utility bills every month',
    color: '#FFD700',
  },
  {
    emoji: '🌿',
    title: 'Eco-Friendly Choice',
    desc: 'Fewer battery replacements means less e-waste. Reduced power draw means a smaller carbon footprint.',
    highlight: 'Join the conscious charging movement',
    color: '#2ED573',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="text-center">
          <div className="section-label">🌟 Benefits</div>
          <h2 className="section-title">
            Why <span className="gradient-text">Smart Charging</span> Matters
          </h2>
          <p className="section-subtitle">
            CABLESNAP isn't just a device — it's a smarter relationship with your technology and the planet.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card glass-card">
              <div className="benefit-card__top">
                <div className="benefit-card__emoji">{b.emoji}</div>
                <div
                  className="benefit-card__pill"
                  style={{ '--b-color': b.color }}
                >
                  {b.highlight}
                </div>
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
              <div
                className="benefit-card__bar"
                style={{ '--b-color': b.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
