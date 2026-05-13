import { Battery, Zap, Shield, Cpu } from 'lucide-react';
import './SpecsSection.css';

const specs = [
  {
    icon: <Zap size={24} />,
    label: "Power Delivery",
    value: "Smartphone Optimized",
    desc: "Compatible with standard USB charging adapters."
  },
  {
    icon: <Shield size={24} />,
    label: "Safety Rating",
    value: "Safety Focused",
    desc: "Designed with safety-focused architecture and flame-retardant materials."
  },
  {
    icon: <Battery size={24} />,
    label: "Battery Health",
    value: "Health Protection",
    desc: "Designed to help improve long-term battery health and reduce degradation."
  },
  {
    icon: <Cpu size={24} />,
    label: "Control Chip",
    value: "Snap-Core V2",
    desc: "Ultra-low power consumption when in standby mode."
  }
];

export default function SpecsSection() {
  return (
    <section className="section specs-section" id="specs">
      <div className="container">
        <div className="specs-grid">
          <div className="specs-content">
            <div className="section-label">Technical Details</div>
            <h2 className="section-title">
              Built for <span className="gradient-text">PERFORMANCE</span>
            </h2>
            <p className="section-subtitle">
              CABLESNAP isn't just a timer — it's a precision-engineered charging regulator designed to meet modern standards.
            </p>
            
            <div className="specs-list">
              {specs.map((spec, i) => (
                <div key={i} className="spec-item-v2">
                  <div className="spec-icon-v2">{spec.icon}</div>
                  <div className="spec-info-v2">
                    <div className="spec-header-v2">
                      <span className="spec-label-v2">{spec.label}</span>
                      <span className="spec-value-v2">{spec.value}</span>
                    </div>
                    <p className="spec-desc-v2">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="specs-visual">
            <div className="specs-visual-card glass-card">
              <div className="visual-core">
                <div className="pulse-ring ring-1"></div>
                <div className="pulse-ring ring-2"></div>
                <div className="pulse-ring ring-3"></div>
                <Zap size={60} className="visual-icon" />
              </div>
              <div className="visual-stats">
                <div className="v-stat">
                  <span>Efficiency</span>
                  <div className="v-bar"><div className="v-progress" style={{width: '98%'}}></div></div>
                </div>
                <div className="v-stat">
                  <span>Reliability</span>
                  <div className="v-bar"><div className="v-progress" style={{width: '99.9%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
