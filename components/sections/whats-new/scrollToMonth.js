// Smooth-scrolls to a month section and keeps the address bar in sync
// so every month has a shareable link such as /whats-new/#august-2026.
export function scrollToMonth(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
}
