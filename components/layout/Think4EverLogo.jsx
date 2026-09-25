"use client";

import { useEffect, useState, useMemo } from "react";

/**
 * Think4Ever Animated Logo — Reversed (dark bg) lockup
 *
 * Living Blueprint motion rules (slide 031):
 *  Stage 1 — They arrive:    each bar enters from its own side
 *  Stage 2 — They close in:  bars move toward each other
 *  Stage 3 — They line up:   system settles
 *  Stage 4 — Dots light up:  dots appear AFTER bars are settled
 *  Stage 5 — Name lands:     wordmark slides in, "4" in orange
 *
 * Total duration: ~2 seconds
 *
 * Colors (Reversed lockup — dark/ink background):
 *  Top bar    → #FFFFFF (white)
 *  Bottom bar → #3A5690 (deep blue)
 *  Orange dot → #FF7A1A
 *  Dark dot   → #0B1B3A (ink)
 *  think/ever → #FFFFFF
 *  4          → #FF7A1A (DM Sans Black — always orange)
 */

// Animation stage schedule (ms from mount)
const STAGE_SCHEDULE = [
  [1, 60],    // bars start entering immediately
  [2, 380],   // close in
  [3, 680],   // settle
  [4, 950],   // dots light up
  [5, 1250],  // wordmark lands
];

const BAR_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
const DOT_EASING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
const FONT = "var(--font-dm-sans), 'DM Sans', sans-serif";

export default function Think4EverLogo({
  height = 36,
  animate = true,
  className = "",
}) {
  // stage 0 = hidden, 1–5 = animation stages
  const [stage, setStage] = useState(animate ? 0 : 5);

  useEffect(() => {
    if (!animate) return;
    const timers = STAGE_SCHEDULE.map(([s, delay]) =>
      setTimeout(() => setStage(s), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [animate]);

  // All proportions derived from x = bar height (Living Blueprint slide 009)
  const dims = useMemo(() => {
    const x = height * 0.41;
    const barW = x * 3.16;
    const barH = x;
    const offsetX = x * 0.92;
    const gapY = x * 0.32;
    const dotD = x * 0.40;
    const ringD = x * 0.64;
    const rFlat = x * 0.16;
    const rPill = barH / 2;

    return {
      x, barW, barH, offsetX, gapY, dotD, ringD, rFlat, rPill,
      symW: barW + offsetX,
      symH: barH + gapY + barH,
      topX: offsetX, topY: 0,
      botX: 0,       botY: barH + gapY,
      topDotCX: offsetX + barW - rPill,
      topDotCY: barH / 2,
      botDotCX: barW - rPill,
      botDotCY: barH + gapY + barH / 2,
      wordGap: x * 0.63,
      wordFS: x * 1.56,
    };
  }, [height]);

  const {
    barW, barH, offsetX, dotD, ringD, rFlat, rPill,
    symW, symH, topX, topY, botX, botY,
    topDotCX, topDotCY, botDotCX, botDotCY,
    wordGap, wordFS,
  } = dims;

  const topSlide = stage < 3 ? (stage < 1 ? -(barW + offsetX) : -barW * 0.35) : 0;
  const botSlide = stage < 3 ? (stage < 1 ? barW + offsetX : barW * 0.35) : 0;
  const dotsVisible = stage >= 4;
  const wordmarkVisible = stage >= 5;

  // Longer duration for the settling move (stage 2→3) vs. arrive (0→1)
  const barDuration = stage <= 2 ? "0.32s" : "0.36s";
  const barTransition = `transform ${barDuration} ${BAR_EASING}`;

  const wordmarkStyle = {
    fontFamily: FONT,
    fontSize: wordFS,
    letterSpacing: "-0.01em",
    lineHeight: 1,
  };

  return (
    <div
      className={`flex items-center select-none ${className}`}
      style={{ height, overflow: "visible" }}
      role="img"
      aria-label="Think4Ever"
    >
      {/* ── Symbol SVG ─────────────────────────────────────────────────────── */}
      <svg
        width={symW}
        height={symH}
        viewBox={`0 0 ${symW} ${symH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: "visible", flexShrink: 0 }}
      >
        {/* Top bar — white, arrives from LEFT */}
        <g style={{ transform: `translateX(${topSlide}px)`, transition: barTransition }}>
          {/* Full pill */}
          <rect x={topX} y={topY} width={barW} height={barH} rx={rPill} ry={rPill} fill="#FFFFFF" />
          {/* Left-end flat override (small radius) */}
          <rect x={topX} y={topY} width={rPill + rFlat} height={barH} rx={rFlat} ry={rFlat} fill="#FFFFFF" />
          {/* White ring around dot */}
          <circle
            cx={topDotCX} cy={topDotCY} r={ringD / 2}
            fill="#FFFFFF"
            style={{ opacity: dotsVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
          />
          {/* Orange dot */}
          <circle
            cx={topDotCX} cy={topDotCY} r={dotD / 2}
            fill="#FF7A1A"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transform: dotsVisible ? "scale(1)" : "scale(0)",
              transformOrigin: `${topDotCX}px ${topDotCY}px`,
              transition: `opacity 0.25s ease 0.05s, transform 0.3s ${DOT_EASING} 0.05s`,
            }}
          />
        </g>

        {/* Bottom bar — deep blue, arrives from RIGHT */}
        <g style={{ transform: `translateX(${botSlide}px)`, transition: barTransition }}>
          {/* Full pill */}
          <rect x={botX} y={botY} width={barW} height={barH} rx={rPill} ry={rPill} fill="#3A5690" />
          {/* Left-end flat override */}
          <rect x={botX} y={botY} width={rPill + rFlat} height={barH} rx={rFlat} ry={rFlat} fill="#3A5690" />
          {/* Ink ring (creates "air" effect on dark bar) */}
          <circle
            cx={botDotCX} cy={botDotCY} r={ringD / 2}
            fill="#0B1B3A"
            style={{ opacity: dotsVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
          />
          {/* Ink dot */}
          <circle
            cx={botDotCX} cy={botDotCY} r={dotD / 2}
            fill="#0B1B3A"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transform: dotsVisible ? "scale(1)" : "scale(0)",
              transformOrigin: `${botDotCX}px ${botDotCY}px`,
              transition: `opacity 0.25s ease 0.08s, transform 0.3s ${DOT_EASING} 0.08s`,
            }}
          />
        </g>
      </svg>

      {/* ── Wordmark ────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          marginLeft: wordGap,
          opacity: wordmarkVisible ? 1 : 0,
          transform: wordmarkVisible ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          alignItems: "baseline",
          flexShrink: 0,
        }}
      >
        <span style={{ ...wordmarkStyle, fontWeight: 400, color: "#FFFFFF" }}>think</span>
        <span style={{ ...wordmarkStyle, fontWeight: 900, color: "#FF7A1A" }}>4</span>
        <span style={{ ...wordmarkStyle, fontWeight: 400, color: "#FFFFFF" }}>ever</span>
      </div>
    </div>
  );
}
