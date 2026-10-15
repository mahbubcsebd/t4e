"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Handles stale JS chunk loading errors that occur during client-side navigation
 * in static exports. When a ChunkLoadError occurs (stale CDN cache after deploy),
 * we force a hard page reload so the browser fetches fresh chunks.
 */
export default function ChunkErrorHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleError = (event) => {
      const error = event.error || event.reason;
      if (!error) return;

      const isChunkError =
        error.name === "ChunkLoadError" ||
        (typeof error.message === "string" &&
          (error.message.includes("Loading chunk") ||
            error.message.includes("Loading CSS chunk") ||
            error.message.includes("enqueueModel") ||
            error.message.includes("dynamicRequire") ||
            error.message.includes("Failed to fetch dynamically imported module") ||
            error.message.includes("Importing a module script failed") ||
            error.message.includes("error loading dynamically imported module")));

      if (isChunkError) {
        console.warn(
          "[ChunkErrorHandler] Stale chunk detected, forcing page reload.",
          error.message
        );
        const lastReload = sessionStorage.getItem("last_chunk_reload");
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
          sessionStorage.setItem("last_chunk_reload", String(now));
          window.location.reload();
        }
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, [router]);

  return null;
}
