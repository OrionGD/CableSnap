import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? '#007BFF' : '#00FF9C',
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={particlesRef} className="hero__particles" />

      {/* Glow blobs */}
      <div className="hero__blob hero__blob--blue" />
      <div className="hero__blob hero__blob--green" />

      <div className="container hero__inner">
        {/* Badge */}
        <div className="hero__badge">
          <Zap size={14} />
          <span>Smart Charging Technology</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          Stop Overcharging.<br />
          <span className="gradient-text">Start Smart Charging.</span>
        </h1>

        <p className="hero__sub">
          A smart plug-and-use device that automatically disconnects your charger
          at the perfect time — protecting your battery and saving electricity.
        </p>

        {/* Stats row */}
        <div className="hero__stats">
          {[
            { value: '40%', label: 'Longer Battery Life' },
            { value: '↓30%', label: 'Less Energy Used' },
            { value: '100%', label: 'Universal Compatible' },
          ].map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hero__ctas">
          <a href="#cta" className="btn btn-primary">
            Get Early Access <ArrowRight size={18} />
          </a>
          <a href="#demo" className="btn btn-outline">
            <span className="hero__play-btn">
              <Play size={12} fill="currentColor" />
            </span>
            Watch Demo
          </a>
        </div>

        {/* Device visual */}
        <div className="hero__device-wrapper">
          <div className="hero__device">
            <div className="hero__device-ring hero__device-ring--1" />
            <div className="hero__device-ring hero__device-ring--2" />
            <div className="hero__device-ring hero__device-ring--3" />
            <div className="hero__device-core">
              <Zap size={40} className="hero__device-icon" />
              <span className="hero__device-label">AUTO OFF</span>
            </div>
            <div className="hero__device-dot hero__device-dot--1" />
            <div className="hero__device-dot hero__device-dot--2" />
            <div className="hero__device-dot hero__device-dot--3" />
          </div>

          <div className="hero__floating hero__floating--1">
            <span className="hero__floating-icon">🔋</span>
            <span>Battery Protected</span>
          </div>
          <div className="hero__floating hero__floating--2">
            <span className="hero__floating-icon">⚡</span>
            <span>Energy Saved</span>
          </div>
          <div className="hero__floating hero__floating--3">
            <span className="hero__floating-icon">🌿</span>
            <span>Eco Friendly</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
