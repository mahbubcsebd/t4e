"use client";

import { ChevronDown } from "lucide-react";

// Phone-only mode picker that sits inside the idea box (bottom-left).
// Native <select> keeps the OS picker, keyboard and screen-reader support.
export default function ModeSelect({ modes, selectedKey, onSelect, label }) {
  const active = modes.find((m) => m.key === selectedKey) || modes[0];
  const ActiveIcon = active.icon;

  return (
    <label className="relative inline-flex min-h-11 max-w-full items-center gap-1.5 rounded-full border border-[#93c5fd] bg-[#eff6ff] pl-3 pr-8 text-sm font-semibold text-[#1d4ed8] focus-within:ring-2 focus-within:ring-[#2563eb]/40">
      <span className="sr-only">{label}</span>
      <ActiveIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <select
        value={active.key}
        onChange={(e) => onSelect(e.target.value)}
        className="min-h-11 max-w-full cursor-pointer appearance-none truncate bg-transparent pr-1 text-sm font-semibold text-[#1d4ed8] outline-none"
      >
        {modes.map((m) => (
          <option key={m.key} value={m.key}>
            {m.title}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 h-4 w-4"
        aria-hidden="true"
      />
    </label>
  );
}
