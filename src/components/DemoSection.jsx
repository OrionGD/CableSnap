import { Play } from 'lucide-react';
import './DemoSection.css';

export default function DemoSection() {
  return (
    <section className="section demo-section" id="demo">
      <div className="container">
        <div className="text-center">
          <div className="section-label">
            <Play size={12} fill="currentColor" /> Live Demo
          </div>
          <h2 className="section-title">
            See <span className="gradient-text">CABLESNAP</span> in Action
          </h2>
          <p className="section-subtitle">
            Watch how CABLESNAP automatically disconnects your charger at the preset time —
            protecting your battery while you sleep.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="demo-wrapper">
          <div className="demo-frame">
            {/* Glow rings around the video */}
            <div className="demo-glow demo-glow--blue" />
            <div className="demo-glow demo-glow--green" />

            <div className="demo-video-container">
              <iframe
                src="https://drive.google.com/file/d/1N3K8rM8hj6P4iCAUWKrWN5rNcs4TrBz4/preview"
                className="demo-iframe"
                allow="autoplay"
                title="CABLESNAP Demo Video"
                allowFullScreen
              />
            </div>
          </div>

          {/* Side indicators */}
          <div className="demo-indicators">
            {[
              { num: '1', title: 'Set Timer', desc: 'Dial your desired charge duration' },
              { num: '2', title: 'Plug In', desc: 'Connect your charger as usual' },
              { num: '3', title: 'Sleep Easy', desc: 'CABLESNAP cuts power automatically' },
            ].map((item) => (
              <div key={item.num} className="demo-indicator glass-card">
                <div className="demo-indicator__num">{item.num}</div>
                <div>
                  <div className="demo-indicator__title">{item.title}</div>
                  <div className="demo-indicator__desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
