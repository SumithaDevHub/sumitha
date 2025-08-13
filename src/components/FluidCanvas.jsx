import React, { useRef, useEffect, useState } from "react";

export default function FluidCanvas() {
  const canvasRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let pulsePhase = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      pulsePhase += 0.05;
      const pulse = 0.5 + 0.5 * Math.sin(pulsePhase);

      if (hovering) {
        ripples.current.forEach((ripple, i) => {
          ripple.radius += 0.3;
          ripple.alpha *= 0.98;

          if (ripple.alpha <= 0.02 || ripple.radius > ripple.maxRadius) {
            ripples.current.splice(i, 1);
            return;
          }

          const alpha = ripple.alpha * pulse;

          const gradient = ctx.createRadialGradient(
            ripple.x,
            ripple.y,
            ripple.radius * 0.3,
            ripple.x,
            ripple.y,
            ripple.radius
          );
          gradient.addColorStop(0, `rgba(0, 255, 136, ${alpha})`);
          gradient.addColorStop(1, "rgba(0, 255, 136, 0)");

          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.shadowColor = `rgba(0, 255, 136, ${alpha})`;
          ctx.shadowBlur = 15;
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    let animationFrameId = requestAnimationFrame(animate);

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, [hovering]);

  function handleMouseMove(e) {
    if (hovering) {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 0.7,
        maxRadius: 250,
      });
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "auto",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
    />
  );
}
