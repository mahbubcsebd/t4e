import React from "react";
import { SiClaude, SiCursor, SiWindsurf, SiGooglegemini } from "react-icons/si";
import { TbBrandOpenai, TbBrandVscode, TbLetterQ } from "react-icons/tb";
import { Ghost, Monitor, Network } from "lucide-react";

// Amazon Q Logo SVG Approximation
const AmazonQIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <line x1="13" y1="13" x2="20" y2="20" />
  </svg>
);

const tools = [
  { name: "Claude Code", icon: SiClaude },
  { name: "Codex", icon: TbBrandOpenai },
  { name: "Cursor", icon: SiCursor },
  { name: "Claude Desktop", icon: Monitor },
  { name: "VS Code", icon: TbBrandVscode },
  { name: "Windsurf", icon: SiWindsurf },
  { name: "MCP Clients", icon: Network },
  { name: "Gemini CLI", icon: SiGooglegemini },
  { name: "Amazon Q", icon: AmazonQIcon },
  { name: "Kiro", icon: Ghost },
];

export default function CodingToolPills({ variant = "light", className = "", allTools = false }) {
  // Show all tools if allTools is true, otherwise show only the 5 specific tools for home page
  const homeToolNames = ["Claude Code", "Codex", "Cursor", "Windsurf", "MCP Clients"];
  const displayTools = allTools ? tools : tools.filter(t => homeToolNames.includes(t.name));

  if (variant === "dark") {
    return (
      <div
        className={`flex flex-wrap items-center gap-4 max-w-4xl mx-auto ${className || "justify-center"}`}
      >
        {displayTools.map((tool, i) => (
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

  if (variant === "stack") {
    return (
      <div
        className={`flex flex-wrap items-center -space-x-3 sm:-space-x-2 ${className || "justify-center"}`}
      >
        {displayTools.map((tool, i) => (
          <div
            key={i}
            className="group relative z-0 hover:z-10 transition-all duration-300 hover:scale-110"
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-card border border-border shadow-md text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/25 group-hover:border-primary">
              <tool.icon className="w-5 h-5 sm:w-7 sm:h-7 drop-shadow-sm" />
            </div>
            {/* Premium Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 sm:mb-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-slate-800 border border-slate-100 text-[10px] sm:text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl scale-95 group-hover:scale-100 origin-bottom z-50">
              {tool.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] sm:border-[6px] border-transparent border-t-white drop-shadow-sm"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // default 'light'
  return (
    <div
      className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className || "justify-center"}`}
    >
      {displayTools.map((tool, i) => (
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
