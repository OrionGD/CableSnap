import React from 'react';
import './ProblemSection.css';
import { AlertTriangle } from 'lucide-react';

const ProblemSection = () => (
  <section className="section" id="problem">
    <div className="container">
      <div className="text-center" style={{ marginBottom: '70px' }}>
        <div className="section-label"><AlertTriangle size={14} /> The Silent Killer</div>
        <h2 className="section-title">The <span className="orange-text">60%</span> Problem.</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Did you know over 60% of users charge their phones overnight? This leads to "Battery Stress,"
          constant trickle-charging, and dangerous overheating.
        </p>
      </div>

      <div className="problem-grid">
        <div>
          <img
            src="/phone_overheating_heatmap_1778656797359.png"
            alt="Smartphone overheating heat-map at 3 AM"
            className="problem-img"
          />
        </div>

        <div>
          <div className="problem-stat-big">60%</div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '1.1rem' }}>
            of smartphone users charge overnight
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            keeping batteries pinned at 100% for 6–8 hours, creating sustained heat stress that permanently degrades capacity.
          </p>

          <div className="problem-quote">
            <p>
              "Lithium-ion batteries degrade 2× faster when kept at 100% charge for hours on end."
            </p>
            <span>— Battery University</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
