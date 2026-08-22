import React from "react";
import { cn } from "@/lib/utils";

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "max-w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
