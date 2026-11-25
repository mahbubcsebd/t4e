"use client";

// 4 build modes as cards (md+). Phones use ModeSelect inside the idea box.
export default function PortalModes({ modes, selectedKey, onSelect }) {
  return (
    <div className="w-full max-md:hidden">
      {/* Desktop cards */}
      <div className="hidden md:grid mt-4 w-full grid-cols-2 lg:grid-cols-4 gap-3">
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = selectedKey === m.key;
          return (
            <button
              key={m.key}
              type="button"
              onClick={() => onSelect(m.key)}
              aria-pressed={isActive}
              className={[
                "group relative cursor-pointer rounded-2xl border bg-white/90 p-4 text-left backdrop-blur-sm transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40",
                isActive
                  ? "border-[#2563eb] shadow-lg shadow-[#2563eb]/10 ring-2 ring-[#2563eb]/15 -translate-y-0.5"
                  : "border-slate-200 hover:-translate-y-0.5 hover:border-[#93c5fd] hover:shadow-md",
              ].join(" ")}
            >
              <div className="mb-2.5 flex items-center gap-2.5">
                <span
                  className={[
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200",
                    isActive
                      ? "bg-[#2563eb] text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-[#eff6ff] group-hover:text-[#2563eb]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p
                  className={[
                    "text-[10px] font-bold uppercase tracking-wider",
                    isActive ? "text-[#2563eb]" : "text-slate-400",
                  ].join(" ")}
                >
                  {m.eyebrow}
                </p>
              </div>
              <h3 className="mb-1 text-[15px] font-bold leading-snug text-slate-900">
                {m.title}
              </h3>
              <p className="line-clamp-3 text-[12.5px] leading-relaxed text-slate-500">
                {m.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
