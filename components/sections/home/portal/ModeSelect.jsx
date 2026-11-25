"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Phone-only mode picker that sits inside the idea box (bottom-left).
// shadcn DropdownMenu (Radix): keyboard, focus trap and screen-reader support built in.
export default function ModeSelect({ modes, selectedKey, onSelect, label }) {
  const active = modes.find((m) => m.key === selectedKey) || modes[0];
  const ActiveIcon = active.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`${label}: ${active.title}`}
        className="group inline-flex min-h-11 max-w-full cursor-pointer items-center gap-2 rounded-full border border-[#bfdbfe] bg-white py-1 pl-1.5 pr-3 text-sm font-semibold text-[#1e3a8a] shadow-sm shadow-[#2563eb]/10 outline-none transition-all duration-200 hover:border-[#93c5fd] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#2563eb]/40 data-[state=open]:border-[#2563eb] data-[state=open]:bg-[#eff6ff]"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
          <ActiveIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="truncate">{active.title}</span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-[#2563eb] transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        side="bottom"
        sideOffset={8}
        collisionPadding={16}
        className="w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10 ring-0"
      >
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = m.key === active.key;
          return (
            <DropdownMenuItem
              key={m.key}
              onSelect={() => onSelect(m.key)}
              aria-current={isActive ? "true" : undefined}
              className={[
                "cursor-pointer items-start gap-3 rounded-xl px-2.5 py-2.5 focus:bg-[#eff6ff]",
                isActive ? "bg-[#eff6ff]" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                  isActive ? "bg-[#2563eb] text-white" : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-bold leading-snug text-slate-900">
                  {m.title}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">
                  {m.eyebrow}
                </span>
              </span>
              {isActive && (
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden="true" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
