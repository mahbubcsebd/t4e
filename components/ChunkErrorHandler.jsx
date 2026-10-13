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
            error.message.includes("dynamicRequire")));

      if (isChunkError) {
        console.warn(
          "[ChunkErrorHandler] Stale chunk detected, forcing page reload.",
          error.message
        );
        // Hard reload to bypass stale browser/CDN cache
        window.location.reload();
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
