"use client";

import { useEffect, useState } from "react";

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

export default function Think4EverLogo({
  height = 36,
  animate = true,
  className = "",
}) {
  // stage 0 = hidden, 1-5 = animation stages, 5 = fully visible
  const [stage, setStage] = useState(animate ? 0 : 5);

  useEffect(() => {
    if (!animate) return;
    // Staggered stage advances (ms from mount)
    const schedule = [
      [1, 60],   // stage 1: bars start entering immediately
      [2, 380],  // stage 2: close in
      [3, 680],  // stage 3: settle
      [4, 950],  // stage 4: dots light up
      [5, 1250], // stage 5: wordmark lands
    ];
    const timers = schedule.map(([s, delay]) =>
      setTimeout(() => setStage(s), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [animate]);

  // ─── Proportion system (all derived from x = bar height) ───────────────────
  const x = height * 0.41;   // bar height
  const barW = x * 3.16;     // bar length
  const barH = x;
  const offsetX = x * 0.92;  // horizontal offset: bottom bar sits 0.92x to the left
  const gapY = x * 0.32;     // vertical gap between bars
  const dotD = x * 0.40;     // dot diameter
  const ringD = x * 0.64;    // white ring diameter
  const rFlat = x * 0.16;    // flat-end small corner radius
  const rPill = barH / 2;    // rounded-end full pill radius

  // Symbol bounding box: top bar is offset right by offsetX
  const symW = barW + offsetX;
  const symH = barH + gapY + barH;

  // Bar positions (top bar shifted right, bottom bar at left edge)
  const topX = offsetX;
  const topY = 0;
  const botX = 0;
  const botY = barH + gapY;

  // Dot centers on rounded (right) ends
  const topDotCX = topX + barW - rPill;
  const topDotCY = topY + barH / 2;
  const botDotCX = botX + barW - rPill;
  const botDotCY = botY + barH / 2;

  // ─── Animation state ────────────────────────────────────────────────────────
  // Bars arrive from opposite sides → stage 1 means "mid-travel", stage 3+ = settled
  const topSlide = stage < 3 ? (stage < 1 ? -barW - offsetX : -barW * 0.35) : 0;
  const botSlide = stage < 3 ? (stage < 1 ? barW + offsetX : barW * 0.35) : 0;
  const dotsVisible = stage >= 4;
  const wordmarkVisible = stage >= 5;

  const barEasing = "cubic-bezier(0.22, 1, 0.36, 1)";
  const barDur = stage === 1 ? "0.32s" : "0.36s";

  // Wordmark dimensions
  const wordGap = x * 0.63;  // space between symbol and name
  const wordFS = x * 1.56;   // font-size = wordmark height

  return (
    <div
      className={`flex items-center select-none ${className}`}
      style={{ height, overflow: "visible" }}
      aria-label="Think4Ever"
      role="img"
    >
      {/* ── Symbol ─────────────────────────────────────────────────────────── */}
      <svg
        width={symW}
        height={symH}
        viewBox={`0 0 ${symW} ${symH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", flexShrink: 0 }}
      >
        {/* Top bar group — white, slides in from LEFT */}
        <g
          style={{
            transform: `translateX(${topSlide}px)`,
            transition: `transform ${barDur} ${barEasing}`,
          }}
        >
          {/* Full pill rect */}
          <rect x={topX} y={topY} width={barW} height={barH} rx={rPill} ry={rPill} fill="#FFFFFF" />
          {/* Left-end flat override (small radius) */}
          <rect x={topX} y={topY} width={rPill + rFlat} height={barH} rx={rFlat} ry={rFlat} fill="#FFFFFF" />

          {/* White ring */}
          <circle
            cx={topDotCX} cy={topDotCY} r={ringD / 2}
            fill="#FFFFFF"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          />
          {/* Orange dot */}
          <circle
            cx={topDotCX} cy={topDotCY} r={dotD / 2}
            fill="#FF7A1A"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transform: dotsVisible ? "scale(1)" : "scale(0)",
              transformOrigin: `${topDotCX}px ${topDotCY}px`,
              transition: "opacity 0.25s ease 0.05s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) 0.05s",
            }}
          />
        </g>

        {/* Bottom bar group — deep blue, slides in from RIGHT */}
        <g
          style={{
            transform: `translateX(${botSlide}px)`,
            transition: `transform ${barDur} ${barEasing}`,
          }}
        >
          {/* Full pill rect */}
          <rect x={botX} y={botY} width={barW} height={barH} rx={rPill} ry={rPill} fill="#3A5690" />
          {/* Left-end flat override */}
          <rect x={botX} y={botY} width={rPill + rFlat} height={barH} rx={rFlat} ry={rFlat} fill="#3A5690" />

          {/* Deep blue ring (blends, creates the "air" effect) */}
          <circle
            cx={botDotCX} cy={botDotCY} r={ringD / 2}
            fill="#0B1B3A"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          />
          {/* Ink dot */}
          <circle
            cx={botDotCX} cy={botDotCY} r={dotD / 2}
            fill="#0B1B3A"
            style={{
              opacity: dotsVisible ? 1 : 0,
              transform: dotsVisible ? "scale(1)" : "scale(0)",
              transformOrigin: `${botDotCX}px ${botDotCY}px`,
              transition: "opacity 0.25s ease 0.08s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1) 0.08s",
            }}
          />
        </g>
      </svg>

      {/* ── Wordmark ────────────────────────────────────────────────────────── */}
      <div
        style={{
          marginLeft: wordGap,
          opacity: wordmarkVisible ? 1 : 0,
          transform: wordmarkVisible ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          alignItems: "baseline",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 400, fontSize: wordFS, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
          think
        </span>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 900, fontSize: wordFS, color: "#FF7A1A", letterSpacing: "-0.01em" }}>
          4
        </span>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 400, fontSize: wordFS, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
          ever
        </span>
      </div>
    </div>
  );
}
