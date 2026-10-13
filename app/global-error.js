"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global application error:", error);

    // Auto-reload on stale chunk errors after Vercel redeployment
    const isChunkError =
      error?.name === "ChunkLoadError" ||
      (typeof error?.message === "string" &&
        (error.message.includes("Loading chunk") ||
          error.message.includes("Loading CSS chunk") ||
          error.message.includes("enqueueModel") ||
          error.message.includes("dynamicRequire")));

    if (isChunkError) {
      console.warn("[GlobalError] Stale chunk detected, reloading...");
      window.location.reload();
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans text-gray-900">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#093cad] flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            A temporary error occurred while rendering the page. Please reload to try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.reload();
                } else {
                  reset();
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#093cad] text-white font-bold text-sm hover:bg-[#072d82] transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload page</span>
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 border border-gray-300 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return home</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
