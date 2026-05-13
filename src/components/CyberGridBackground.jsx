import React, { useEffect, useRef } from 'react';
import './CyberGridBackground.css';

const CyberGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Palette Colors
    const colors = {
      base: '#010101',
      dark: '#0F1112',
      panel: '#1B1F22',
      accent: '#253136',
      highlight: '#3E4D51',
      text: '#8494A0',
      neon: '#00f3ff'
    };

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // Mouse tracking
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles (floating translucent squares)
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    // Grid configuration
    const gridSize = 80;
    
    // Light streaks
    const streaks = [];
    const maxStreaks = 20;

    class Streak {
      constructor() {
        this.reset(true);
      }
      
      reset(randomize = false) {
        this.isHorizontal = Math.random() > 0.5;
        this.speed = (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
        this.length = Math.random() * 200 + 100;
        this.opacity = Math.random() * 0.4 + 0.1;
        
        if (this.isHorizontal) {
          this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
          if (randomize) {
            this.x = Math.random() * width;
          } else {
            this.x = this.speed > 0 ? -this.length : width + this.length;
          }
        } else {
          this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
          if (randomize) {
            this.y = Math.random() * height;
          } else {
            this.y = this.speed > 0 ? -this.length : height + this.length;
          }
        }
      }

      update() {
        if (this.isHorizontal) {
          this.x += this.speed;
          if ((this.speed > 0 && this.x > width + this.length) || (this.speed < 0 && this.x < -this.length)) {
            this.reset();
          }
        } else {
          this.y += this.speed;
          if ((this.speed > 0 && this.y > height + this.length) || (this.speed < 0 && this.y < -this.length)) {
            this.reset();
          }
        }
      }

      draw(ctx) {
        ctx.beginPath();
        if (this.isHorizontal) {
          const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.length * Math.sign(this.speed), this.y);
          grad.addColorStop(0, `rgba(0, 243, 255, ${this.opacity})`);
          grad.addColorStop(1, 'rgba(0, 243, 255, 0)');
          ctx.strokeStyle = grad;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - this.length * Math.sign(this.speed), this.y);
        } else {
          const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y - this.length * Math.sign(this.speed));
          grad.addColorStop(0, `rgba(0, 243, 255, ${this.opacity})`);
          grad.addColorStop(1, 'rgba(0, 243, 255, 0)');
          ctx.strokeStyle = grad;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y - this.length * Math.sign(this.speed));
        }
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    for (let i = 0; i < maxStreaks; i++) {
      streaks.push(new Streak());
    }

    let time = 0;

    const drawGrid = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw background with subtle trail fade for motion blur
      ctx.fillStyle = `rgba(1, 1, 1, 0.2)`;
      ctx.fillRect(0, 0, width, height);

      time += 0.01;

      // Draw floating particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(0, 243, 255, ${p.opacity * (0.5 + Math.sin(time + p.x) * 0.5)})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      // Draw Grid
      for (let y = 0; y <= height; y += gridSize) {
        for (let x = 0; x <= width; x += gridSize) {
          const dist = Math.hypot(x - mouse.x, y - mouse.y);
          const mouseInfluence = Math.max(0, 1 - dist / 300);
          
          // Breathing effect mixed with mouse proximity
          const baseGlow = 0.02 + Math.sin((x + y) * 0.01 + time) * 0.015;
          const totalGlow = baseGlow + mouseInfluence * 0.3;

          // Draw Line Right
          if (x < width) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + gridSize, y);
            ctx.strokeStyle = `rgba(0, 243, 255, ${totalGlow})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Draw Line Down
          if (y < height) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + gridSize);
            ctx.strokeStyle = `rgba(0, 243, 255, ${totalGlow})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Draw Node at intersection
          const nodeOpacity = 0.05 + mouseInfluence * 0.8;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 243, 255, ${nodeOpacity})`;
          ctx.fill();

          if (mouseInfluence > 0.4) {
            ctx.shadowBlur = 10 * mouseInfluence;
            ctx.shadowColor = colors.neon;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Connect nearby nodes to cursor
            if (Math.random() > 0.8 && dist < 150) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(0, 243, 255, ${mouseInfluence * 0.2})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw streaks
      streaks.forEach(streak => {
        streak.update();
        streak.draw(ctx);
      });

      // Mouse ripple/glow
      if (mouse.x > 0 && mouse.y > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        grad.addColorStop(0, 'rgba(0, 243, 255, 0.05)');
        grad.addColorStop(1, 'rgba(0, 243, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(mouse.x - 250, mouse.y - 250, 500, 500);
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    // Initial clear
    ctx.fillStyle = colors.base;
    ctx.fillRect(0, 0, width, height);
    drawGrid();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cyber-grid-bg" />;
};

export default CyberGridBackground;
