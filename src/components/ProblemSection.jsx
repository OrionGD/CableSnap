import React from 'react';
import './ProblemSection.css';
import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => (
  <section className="section problem-section" id="problem">
    <div className="scanline-overlay"></div>
    <div className="grid-overlay"></div>
    
    <div className="container">
      <div className="problem-header text-center">
        <h2 className="problem-title">THE PROBLEM.</h2>
        <p className="problem-intro">
          DID YOU KNOW OVER <span className="neon-text">60%</span> OF USERS CHARGE THEIR PHONES OVERNIGHT? 
          THIS LEADS TO <span className="glow-text">"BATTERY STRESS,"</span> CONSTANT TRICKLE-CHARGING, AND EXCESS HEAT BUILDUP.
        </p>
      </div>

      <div className="thermal-map-container">
        <img
          src="/phone_overheating_heatmap_1778656797359.png"
          alt="Thermal map showing phone battery stress"
          className="thermal-map-img"
        />
        <div className="thermal-labels">
          <div className="label-item core-heat">INTENSE CORE HEAT (&gt;46°C)</div>
          <div className="label-item charging-spot">CHARGING ZONE HOT SPOT</div>
          <div className="label-item cable-heat">CABLE CONNECTION HEAT</div>
          <div className="label-item ambient-temp">AMBIENT ROOM TEMP: 21°C</div>
        </div>
      </div>

      <div className="problem-stats-grid">
        <div className="stat-main">
          <div className="problem-stat-number">60%</div>
          <p className="stat-description">OF SMARTPHONE USERS CHARGE OVERNIGHT</p>
          <p className="stat-detail">
            KEEPING BATTERIES PINNED AT 100% FOR 6–8 HOURS, CREATING SUSTAINED HEAT STRESS THAT PERMANENTLY DEGRADES CAPACITY.
          </p>
        </div>

        <div className="problem-footer">
          <div className="problem-quote-v2">
            <p>"Lithium-ion batteries degrade 2× faster when kept at 100% charge for hours on end."</p>
            <span className="quote-author">— BATTERY UNIVERSITY</span>
          </div>
          <div className="intelligent-protection-badge">
            <span className="badge-icon">⚡</span> INTELLIGENT PROTECTION
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
