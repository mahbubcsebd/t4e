import React from "react";
import { SiClaude, SiCursor, SiWindsurf } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Network } from "lucide-react";

const tools = [
  { name: "Claude Code", icon: SiClaude },
  { name: "Codex", icon: TbBrandOpenai },
  { name: "Cursor", icon: SiCursor },
  { name: "Windsurf", icon: SiWindsurf },
  { name: "MCP Clients", icon: Network },
];

export default function CodingToolPills({ variant = "light" }) {
  if (variant === "dark") {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 bg-[#ffffff0a] hover:bg-[#ffffff14] border border-[#ffffff1a] hover:border-[#07A7E1]/50 text-white text-[15px] font-semibold pr-6 pl-2 py-2 rounded-full backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_24px_rgba(7,167,225,0.15)] cursor-default hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <tool.icon className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <span className="tracking-wide">{tool.name}</span>
          </div>
        ))}
      </div>
    );
  }

  // default 'light'
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="group flex items-center gap-2.5 bg-card border border-border hover:border-primary/50 text-foreground text-[13px] font-semibold pr-4 pl-1.5 py-1.5 rounded-full transition-all duration-300 cursor-default shadow-sm"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-muted border border-border group-hover:scale-110 transition-transform duration-300">
            <tool.icon className="w-[15px] h-[15px] text-primary" />
          </div>
          <span className="tracking-wide">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
