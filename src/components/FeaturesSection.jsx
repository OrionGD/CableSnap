import React from 'react';
import './FeaturesSection.css';
import { Cpu, Settings2, Globe, Box, Activity } from 'lucide-react';

const features = [
  { icon: <Cpu size={24} />, label: 'Snap-Core Processor', value: 'ESP32 IoT Microcontroller for real-time monitoring.' },
  { icon: <Settings2 size={24} />, label: 'Ejection Mechanism', value: 'Precision high-torque servo for physical disconnect.' },
  { icon: <Globe size={24} />, label: 'Smart Connectivity', value: '2.4 GHz Wi-Fi with Android API integration.' },
  { icon: <Box size={24} />, label: 'Industrial Build', value: 'Sustainable high-grade protective housing.' },
  { icon: <Activity size={24} />, label: 'Visual Feedback', value: 'Multi-color LED charging status indicators.' },
];

const FeaturesSection = () => (
  <section className="section" id="features" style={{ background: 'var(--bg-primary)' }}>
    <div className="container">
      <div className="text-center" style={{ marginBottom: 'clamp(40px, 8vw, 70px)' }}>
        <h2 className="section-title">Built for Performance.</h2>
        <p className="section-subtitle" style={{ margin: '0 auto', color: 'var(--text-secondary)' }}>
          Premium hardware engineered for your smartphone's longevity.
        </p>
      </div>

      <div className="specs-wrapper">
        {features.map((f, i) => (
          <div key={i} className="spec-item">
            <div className="specs-icon">
              {React.cloneElement(f.icon, { color: 'var(--text-primary)' })}
            </div>
            <div className="spec-text">
              <h4>{f.label}</h4>
              <p>{f.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
