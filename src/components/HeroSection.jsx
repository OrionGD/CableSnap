import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { Zap, ArrowRight, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <span className="navbar-logo">CABLE<span style={{color:'var(--white)'}}>SNAP</span></span>
        <div className="navbar-links">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#specs">Specs</a>
          <a href="#trust">About</a>
          <a href="#pricing">Pricing</a>
        </div>
        <button className="btn btn-primary" style={{padding:'12px 28px'}}>
          <ShoppingCart size={16} /> Pre-Order
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Content */}
            <div>
              <div className="hero-badge">
                <Zap size={14} fill="currentColor" /> World's First Smart Cable Ejector
              </div>
              <h1 className="hero-headline">
                Stop Killing Your<br />
                <span className="gradient-text">Battery</span> While You Sleep.
              </h1>
              <p className="hero-sub">
                The world's first smart charging system that physically disconnects your cable when your phone is full.
                Protect your battery health, reduce overheating, and extend your device's life—automatically.
              </p>
              <div className="hero-btns">
                <button className="btn btn-primary">
                  Pre-Order Now for ₹3,420 <ArrowRight size={18} />
                </button>
                <button className="btn btn-outline">
                  Get Early Access
                </button>
              </div>
              <div className="led-strip">
                <div className="led led-green" title="Charged"></div>
                <div className="led led-cyan"  title="Monitoring"></div>
                <div className="led led-orange" title="Alert"></div>
                <span style={{fontSize:'0.8rem', color:'var(--muted)', marginLeft:'8px', alignSelf:'center'}}>Multi-LED Status Indicators</span>
              </div>
            </div>

            {/* Visual */}
            <div className="hero-visual">
              <div className="hero-glow"></div>
              <img
                src="/cablesnap_hero_device_1778656769196.png"
                alt="CableSnap Device — 3D Render with Glowing LED Indicators"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
