"use client";

import React, { useEffect, useRef } from "react";

export function HeroWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    // Config for the Elysium-like fluid contour wave ribbons
    const layers = [
      { speed: 0.007, amplitude: 55, wavelength: 0.0018, baseYRatio: 0.78, opacity: 0.35, color: "rgba(100, 116, 139, " },
      { speed: 0.009, amplitude: 70, wavelength: 0.0014, baseYRatio: 0.82, opacity: 0.28, color: "rgba(148, 163, 184, " },
      { speed: 0.006, amplitude: 85, wavelength: 0.0010, baseYRatio: 0.86, opacity: 0.22, color: "rgba(180, 83, 9, " },
      { speed: 0.011, amplitude: 60, wavelength: 0.0022, baseYRatio: 0.89, opacity: 0.30, color: "rgba(198, 164, 74, " },
      { speed: 0.008, amplitude: 95, wavelength: 0.0012, baseYRatio: 0.93, opacity: 0.18, color: "rgba(255, 90, 0, " },
      { speed: 0.005, amplitude: 110, wavelength: 0.0008, baseYRatio: 0.96, opacity: 0.25, color: "rgba(15, 23, 42, " },
    ];

    const render = () => {
      time += 1;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const mouseInfluenceX = (mouseX / width - 0.5) * 40;
      const mouseInfluenceY = (mouseY / height - 0.5) * 30;

      ctx.clearRect(0, 0, width, height);

      // Render each contour wave ribbon
      layers.forEach((layer, idx) => {
        ctx.beginPath();
        const baseY = height * layer.baseYRatio + mouseInfluenceY * (idx * 0.3 + 0.5);

        // Draw smooth curve across the screen width
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        const step = 8;
        for (let x = 0; x <= width + step; x += step) {
          const t = time * layer.speed;
          const xOffset = x + mouseInfluenceX * (idx * 0.4 + 0.6);

          // Combination of sine harmonics for natural undulating terrain
          const wave1 = Math.sin(xOffset * layer.wavelength + t);
          const wave2 = Math.cos(xOffset * layer.wavelength * 0.6 - t * 0.8) * 0.5;
          const wave3 = Math.sin(xOffset * layer.wavelength * 1.8 + t * 1.2) * 0.25;

          // Sinusoidal curve multiplier like Elysium's radians(p.x / 720.0 * 90.0)
          const centerFactor = Math.sin((x / width) * Math.PI);
          const y = baseY + (wave1 + wave2 + wave3) * layer.amplitude * (0.6 + centerFactor * 0.7);

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Create linear gradient from wave peak to bottom with soft fade
        const gradient = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, height);
        gradient.addColorStop(0, `${layer.color}${layer.opacity})`);
        gradient.addColorStop(0.5, `${layer.color}${layer.opacity * 0.5})`);
        gradient.addColorStop(1, `${layer.color}0)`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Delicate luminous stroke on top crest of wave
        ctx.strokeStyle = `${layer.color}${layer.opacity * 1.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Atmospheric perimeter radial vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(9, 9, 9, 0.5) 75%, rgba(9, 9, 9, 0.95) 100%)",
        }}
      />
      {/* Subtle bottom mist blend into subsequent section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent pointer-events-none" />
    </div>
  );
}
