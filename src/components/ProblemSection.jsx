import { BatteryWarning, Zap, Leaf } from 'lucide-react';
import './ProblemSection.css';

const problems = [
  {
    icon: <BatteryWarning size={36} />,
    emoji: '🔋',
    title: 'Battery Damage',
    desc: 'Leaving your phone plugged in overnight causes chronic overcharging that silently degrades your battery — costing you hundreds in replacements.',
    stat: '80%',
    statLabel: 'of smartphone users overcharge nightly',
    color: '#FF4757',
  },
  {
    icon: <Zap size={36} />,
    emoji: '⚡',
    title: 'Wasted Energy',
    desc: 'A charger left plugged in after full charge still draws power. Multiply that across millions of households and the waste is staggering.',
    stat: '$30+',
    statLabel: 'wasted per household every year',
    color: '#FFA502',
  },
  {
    icon: <Leaf size={36} />,
    emoji: '🌍',
    title: 'Environmental Impact',
    desc: 'Unnecessary phantom power consumption increases carbon footprints. Small changes in charging habits can significantly reduce emissions.',
    stat: '50M',
    statLabel: 'tons of e-waste from degraded batteries yearly',
    color: '#2ED573',
  },
];

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <div className="text-center">
          <div className="section-label">⚠️ The Problem</div>
          <h2 className="section-title">
            Your Charging Habit Is <span className="gradient-text">Hurting You</span>
          </h2>
          <p className="section-subtitle">
            Most people charge overnight without thinking twice. But this everyday habit
            is silently destroying your battery and draining your wallet.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.title} className="problem-card glass-card">
              <div className="problem-card__icon" style={{ '--card-color': p.color }}>
                {p.emoji}
              </div>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__desc">{p.desc}</p>
              <div className="problem-card__stat">
                <span className="problem-card__stat-value" style={{ color: p.color }}>
                  {p.stat}
                </span>
                <span className="problem-card__stat-label">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
