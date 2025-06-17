import { useEffect, useRef } from "react";
import './BinaryRain.css'

export default function BinarySnowfall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      constructor(x, y, speed, char, fontSize) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.char = char;
        this.fontSize = fontSize;

        this.maxY = window.innerHeight * (0.3 + Math.random() * 0.7);
        this.alpha = 1;
      }

      update(height) {
        this.y += this.speed;

        const fadeStartY = this.maxY * 0.5;
        if (this.y > fadeStartY) {
          const fadeProgress = (this.y - fadeStartY) / (this.maxY - fadeStartY);
          this.alpha = Math.max(1 - fadeProgress, 0);
        }

        if (this.y > this.maxY || this.alpha <= 0) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = -this.fontSize;
        this.speed = 0.3 + Math.random() * 0.4;
        this.char = Math.random() > 0.5 ? "0" : "1";
        this.fontSize = 14 + Math.random() * 4;
        this.maxY = window.innerHeight * (0.3 + Math.random() * 0.7);
        this.alpha = 1;
      }

      draw(ctx) {
        ctx.shadowColor = `rgba(57, 255, 20, ${this.alpha})`;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(57, 255, 20, ${this.alpha})`;
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const speed = 0.3 + Math.random() * 0.6;
      const char = Math.random() > 0.5 ? "0" : "1";
      const fontSize = 14 + Math.random() * 4;
      particles.push(new Particle(x, y, speed, char, fontSize));
    }

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0.0, '#010e06');
      gradient.addColorStop(0.8, '#041d0d');
      gradient.addColorStop(1.0, '#00220e');  // 00220e or 072d16 ??

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let particle of particles) {
        particle.update();
        particle.draw(ctx);
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ background: "black" }}
    />
  );
}
