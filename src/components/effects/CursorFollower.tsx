"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
}

export function CursorFollower() {
  const reducedMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // References for direct 60/120fps DOM transforms (bypassing React re-render lag)
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Motion physics refs
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isClickingRef = useRef(false);
  const isVisibleRef = useRef(false);
  const cursorTextRef = useRef<string | null>(null);

  // Particles
  const sparksRef = useRef<SparkParticle[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fineMedia = window.matchMedia("(pointer: fine)");
    setIsFinePointer(fineMedia.matches);

    const onMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    fineMedia.addEventListener("change", onMediaChange);

    return () => fineMedia.removeEventListener("change", onMediaChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    // Resize canvas
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }

      // Check distance moved to spawn subtle glowing amber micro-sparks
      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 12 && sparksRef.current.length < 24) {
        prevMousePos.current.x = e.clientX;
        prevMousePos.current.y = e.clientY;

        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.3,
          size: Math.random() * 2 + 1.2,
          alpha: 0.7,
          decay: Math.random() * 0.035 + 0.025,
        });
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor-hover='true']");

      if (interactive) {
        isHoveredRef.current = true;
        const textTarget = target.closest("[data-cursor-text]") as HTMLElement | null;
        const label = textTarget?.getAttribute("data-cursor-text") || null;
        cursorTextRef.current = label;
        setCursorText(label);
      } else {
        isHoveredRef.current = false;
        cursorTextRef.current = null;
        setCursorText(null);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Animation Frame Loop for 120 FPS Fluid Magnetic Cursor
    let animId: number;

    const render = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Smooth lerp for outer fluid ring
      const lerpFactor = 0.18;
      ringPos.current.x += (targetX - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (targetY - ringPos.current.y) * lerpFactor;

      const rx = ringPos.current.x;
      const ry = ringPos.current.y;

      // Calculate velocity for organic dynamic squash & stretch
      const vx = targetX - rx;
      const vy = targetY - ry;
      const speed = Math.hypot(vx, vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      const stretch = Math.min(speed * 0.012, 0.4);

      const isHovered = isHoveredRef.current;
      const isClicking = isClickingRef.current;
      const isVisible = isVisibleRef.current && targetX > 0 && targetY > 0;
      const hasText = Boolean(cursorTextRef.current);

      // 1. Update Core Center Dot
      if (dotRef.current) {
        dotRef.current.style.opacity = isVisible ? "1" : "0";
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${
          isHovered ? (hasText ? 0 : 0.5) : isClicking ? 0.75 : 1
        })`;
      }

      // 2. Update Outer Fluid Magnetic Ring
      if (ringRef.current) {
        ringRef.current.style.opacity = isVisible ? "1" : "0";

        let scale = 1;
        if (hasText) {
          scale = 1.9;
        } else if (isHovered) {
          scale = 1.6;
        }
        if (isClicking) {
          scale *= 0.85;
        }

        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${
          scale * (1 + stretch)
        }, ${scale * (1 - stretch * 0.6)})`;
      }

      // 3. Render Canvas Digital Micro-Sparks
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const activeSparks: SparkParticle[] = [];
        for (let i = 0; i < sparksRef.current.length; i++) {
          const p = sparksRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          if (p.alpha > 0.02) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 90, 0, ${p.alpha})`;
            ctx.shadowColor = "#FF5A00";
            ctx.shadowBlur = 6;
            ctx.fill();
            activeSparks.push(p);
          }
        }
        sparksRef.current = activeSparks;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isFinePointer, reducedMotion]);

  if (!isFinePointer || reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {/* ── Background Subtle Stardust Sparks Canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9997] block"
      />

      {/* ── Outer Fluid Magnetic Ring / Aura ── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          willChange: "transform, opacity",
          transition: "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
        }}
        className={`pointer-events-none z-[9998] flex items-center justify-center rounded-full border transition-all duration-200 ${
          cursorText
            ? "h-12 w-24 border-[#FF5A00] bg-[#FF5A00]/20 backdrop-blur-md shadow-[0_0_24px_rgba(255,90,0,0.45)]"
            : "h-9 w-9 border-[#FF5A00]/40 bg-[#FF5A00]/[0.04] backdrop-blur-[1px] shadow-[0_0_16px_rgba(255,90,0,0.18)]"
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-semibold tracking-widest text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>

      {/* ── Ultra-Responsive Precision Center Dot ── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          willChange: "transform, opacity",
          transition: "transform 0.12s ease-out, opacity 0.15s ease",
        }}
        className="pointer-events-none z-[9999] h-2 w-2 rounded-full bg-[#FF5A00] shadow-[0_0_10px_#FF5A00]"
      />
    </div>
  );
}
