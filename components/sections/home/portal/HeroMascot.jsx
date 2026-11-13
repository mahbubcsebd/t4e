"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 78;
const FPS = 15;
const MASK =
  "radial-gradient(ellipse 54% 56% at 50% 50%, #000 45%, transparent 100%)";
const CANVAS_MASK =
  "radial-gradient(ellipse 62% 66% at 50% 50%, #000 72%, transparent 100%)";

export const SCENES = [
  "sistema",
  "uxui",
  "codigo",
  "plano",
  "construir",
  "auditar",
];

const framePath = (n) => `/hero/mascot/f_${String(n).padStart(4, "0")}.webp`;

// Brain mascot: 78-frame webp sequence painted on a canvas at 15fps, over
// crossfading scene backdrops that follow the typed phrase.
export default function HeroMascot({
  sceneIndex = 0,
  isListening = false,
  isTyping = false,
  isReducedMotion = false,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const frames = [];
    let current = 0;
    let lastDrawn = null;
    let intervalId = null;
    let isVisible = true;

    const draw = (img) => {
      if (!img || !img.complete || img.naturalWidth === 0 || img === lastDrawn) return;
      lastDrawn = img;
      if (canvas.width !== img.naturalWidth) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.drawImage(img, 0, 0);
    };

    const load = () => {
      for (let n = 1; n <= FRAME_COUNT; n += 1) {
        const img = new Image();
        img.decoding = "async";
        img.src = framePath(n);
        frames.push(img);
      }
      frames[0].onload = () => draw(frames[0]);
      draw(frames[0]);
      if (isReducedMotion) return;
      intervalId = setInterval(() => {
        if (!isVisible || document.hidden) return;
        current = (current + 1) % FRAME_COUNT;
        draw(frames[current]);
      }, 1000 / FPS);
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
          })
        : null;
    observer?.observe(canvas);

    load();
    return () => {
      clearInterval(intervalId);
      observer?.disconnect();
    };
  }, [isReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={`relative ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      <div className="absolute inset-0">
        {SCENES.map((name, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={name}
            src={`/hero/scenes/${name}.webp`}
            alt=""
            decoding="async"
            loading={i === 0 ? "eager" : "lazy"}
            className={[
              "hero-motion absolute inset-0 h-full w-full object-cover mix-blend-multiply",
              "transition-[opacity,transform] duration-[900ms,3200ms] ease-out",
              i === sceneIndex % SCENES.length
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.04]",
            ].join(" ")}
            style={{ maskImage: MASK, WebkitMaskImage: MASK }}
          />
        ))}
      </div>
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className={[
          "hero-motion relative block h-full w-full mix-blend-multiply",
          "transition-transform duration-200",
          isListening && !isTyping
            ? "animate-[hero-mascot-listen_1.3s_ease-in-out_infinite]"
            : "",
        ].join(" ")}
        style={{
          maskImage: CANVAS_MASK,
          WebkitMaskImage: CANVAS_MASK,
          transform: isTyping ? "scale(0.84)" : "scale(0.78)",
        }}
      />
    </div>
  );
}
