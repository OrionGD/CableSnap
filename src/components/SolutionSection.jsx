import React, { useEffect, useRef } from 'react';
import './SolutionSection.css';
import { Power, Wifi, Sliders, Shield, Cable } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Power size={22} />,
    title: 'Physical Ejection (The "Snap")',
    desc: 'A custom servo-actuator gently disconnects the cable so no electricity flows. No more trickle charging.',
  },
  {
    icon: <Wifi size={22} />,
    title: 'IoT Intelligence',
    desc: "Powered by an ESP32 microcontroller and Wi-Fi, sync your phone's battery health directly to the hardware.",
  },
  {
    icon: <Sliders size={22} />,
    title: 'Custom Cut-off Limits',
    desc: 'Use the CableSnap App to set your charging ceiling (e.g., 80% or 90%) to maximise long-term battery health.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Fire Safety',
    desc: 'Built-in relays and MOSFETs prevent overcurrent and reduce the risk of charging-related fires.',
  },
];

const SolutionSection = () => {
  const cableRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Snap cable animation on scroll
      gsap.to(cableRef.current, {
        width: 10,
        duration: 0.6,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Staggered cards
      gsap.fromTo(
        '.sol-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sol-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section solution-bg" ref={sectionRef} id="solution">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <div className="section-label"><Cable size={14} /> Intelligent Protection</div>
          <h2 className="section-title">Smart Monitoring Meets Physical Action.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            CableSnap is the only device that combines real-time IoT battery monitoring with a
            physical servo ejection mechanism—automating what you keep forgetting to do.
          </p>
        </div>

        {/* Scroll-Trigger Cable Animation */}
        <div className="cable-demo" ref={sectionRef}>
          <div className="phone-mock">
            <div className="phone-screen-text">100%</div>
            <div className="phone-screen-sub">Charged ✓</div>
            <div className="phone-port"></div>
          </div>
          <div
            ref={cableRef}
            className="cable-wire"
            style={{ width: '140px' }}
          ></div>
          <div className="cable-device-icon">
            <Cable size={28} color="var(--text-primary)" />
          </div>
        </div>
        <p className="snap-label">↑ Scroll to watch the cable snap back automatically</p>

        {/* Features */}
        <div
          className="sol-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
            marginTop: '80px',
          }}
        >
          {features.map((f, i) => (
            <div key={i} className="glass-card sol-card" style={{ opacity: 0 }}>
              <div className="spec-icon" style={{ marginBottom: '20px' }}>{f.icon}</div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontFamily: 'Rajdhani', fontSize: '1.25rem', fontWeight: 700 }}>
                {f.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
