import { CheckCircle } from 'lucide-react';
import './SolutionSection.css';

const steps = [
  {
    step: '01',
    title: 'Set Your Timer',
    desc: 'Dial in your desired charge duration — from 30 minutes to 8 hours. One simple knob, total control.',
    icon: '⏱️',
  },
  {
    step: '02',
    title: 'Plug In & Forget',
    desc: 'Connect your charger to CABLESNAP, then plug your phone in as usual. No app, no pairing, no fuss.',
    icon: '🔌',
  },
  {
    step: '03',
    title: 'Auto Disconnects',
    desc: 'When time is up, CABLESNAP cuts the power automatically — protecting your battery while you sleep.',
    icon: '✅',
  },
];

const highlights = [
  'Works with any smartphone brand',
  'No app or Wi-Fi required',
  'Plug-and-use — zero setup',
  'Works with any standard charger',
  'Safe, certified circuitry',
  'Compact & travel-friendly',
];

export default function SolutionSection() {
  return (
    <section className="section solution-section" id="solution">
      <div className="container">
        <div className="solution-inner">
          {/* Left: text */}
          <div className="solution-left">
            <div className="section-label">✅ The Solution</div>
            <h2 className="section-title">
              Smart Charging,<br />
              <span className="gradient-text">Simplified.</span>
            </h2>
            <p className="section-subtitle">
              CABLESNAP works with any phone, any charger — no software, no syncing.
              Just hardware-grade intelligence in a compact plug.
            </p>

            <ul className="solution-highlights">
              {highlights.map((h) => (
                <li key={h} className="solution-highlight">
                  <CheckCircle size={16} className="solution-highlight__icon" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: steps */}
          <div className="solution-steps">
            {steps.map((s, i) => (
              <div key={s.step} className="solution-step glass-card">
                <div className="solution-step__number">{s.step}</div>
                <div className="solution-step__content">
                  <div className="solution-step__emoji">{s.icon}</div>
                  <div>
                    <h3 className="solution-step__title">{s.title}</h3>
                    <p className="solution-step__desc">{s.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="solution-step__connector">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
