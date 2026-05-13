import React from 'react';
import './FeaturesSection.css';
import { Cpu, Settings2, Globe, Box, Activity } from 'lucide-react';

const specs = [
  { icon: <Cpu size={22} />, label: 'Processor',     value: 'ESP32 IoT Microcontroller' },
  { icon: <Settings2 size={22} />, label: 'Mechanism', value: 'Precision High-Torque Servo Actuator' },
  { icon: <Globe size={22} />, label: 'Connectivity', value: '2.4 GHz Wi-Fi & Android API Integration' },
  { icon: <Box size={22} />,  label: 'Build',         value: 'Sustainable 3D-Printed Protective Housing' },
  { icon: <Activity size={22} />, label: 'Feedback',  value: 'Multi-color LED Charging Status Indicators' },
];

const FeaturesSection = () => (
  <section className="section" id="specs"
    style={{ background: 'linear-gradient(180deg, var(--bg) 0%, rgba(6,10,23,0.8) 100%)' }}
  >
    <div className="container">
      <div className="text-center" style={{ marginBottom: '70px' }}>
        <h2 className="section-title">Built for Performance.</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Premium hardware engineered for your smartphone's longevity.
        </p>
      </div>

      <div className="specs-wrapper">
        {specs.map((s, i) => (
          <div key={i} className="spec-item reveal">
            <div className="spec-icon">{s.icon}</div>
            <div className="spec-text">
              <h4>{s.label}</h4>
              <p>{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
