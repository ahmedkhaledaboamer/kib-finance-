"use client";
import React, { useEffect, useRef } from 'react';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}
function drawHexagon(
ctx: CanvasRenderingContext2D,
x: number,
y: number,
size: number,
rotation: number)
{
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i + rotation;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);else
    ctx.lineTo(px, py);
  }
  ctx.closePath();
}
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    let particles: Particle[] = [];
    const config = {
      number: 6,
      color: '#d1d3e3',
      opacity: 0.3,
      size: 19.73,
      speed: 8
    };
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    const initParticles = () => {
      particles = Array.from(
        {
          length: config.number
        },
        () => {
          const angle = Math.random() * Math.PI * 2;
          const speed = config.speed * 0.3 * (0.5 + Math.random() * 0.5);
          return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: config.size * (0.6 + Math.random() * 0.8),
            opacity: 0.1 + Math.random() * config.opacity,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.008
          };
        }
      );
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        // Wrap around edges
        if (p.x < -p.size * 2) p.x = canvas.width + p.size * 2;
        if (p.x > canvas.width + p.size * 2) p.x = -p.size * 2;
        if (p.y < -p.size * 2) p.y = canvas.height + p.size * 2;
        if (p.y > canvas.height + p.size * 2) p.y = -p.size * 2;
        ctx.save();
        drawHexagon(ctx, p.x, p.y, p.size, p.rotation);
        ctx.fillStyle = config.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();
      });
      animationId = requestAnimationFrame(animate);
    };
    resize();
    initParticles();
    animate();
    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0
      }} />);


}