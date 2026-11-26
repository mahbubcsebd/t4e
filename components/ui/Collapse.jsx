// CSS-only expand/collapse (animates grid rows), so menus need no animation library.
export default function Collapse({ open, className = "", openClassName = "", children }) {
  const state = open ? `grid-rows-[1fr] opacity-100 ${openClassName}` : "grid-rows-[0fr] opacity-0";
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${state} ${className}`}
      inert={!open}
      aria-hidden={!open}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
