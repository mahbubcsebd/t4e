"use client";

import { useEffect } from "react";

/**
 * ChunkErrorHandler
 *
 * Catches unhandled RSC Flight stream errors (like 't.reason.enqueueModel is not a function')
 * and stale chunk errors on cPanel/static hosting, and smoothly reloads the page
 * so the client never encounters the Next.js application error screen.
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    const SESSION_KEY = "__t4e_chunk_reload__";

    function handleError(event) {
      const error =
        event?.reason ?? // unhandledrejection
        event?.error; // error event

      if (!error) return;

      const msg = (error.message ?? error.name ?? String(error)).toLowerCase();
      const isRecoverableError =
        error.name === "ChunkLoadError" ||
        msg.includes("enqueuemodel") ||
        msg.includes("t.reason") ||
        msg.includes("chunk.reason") ||
        msg.includes("loading chunk") ||
        msg.includes("loading css chunk") ||
        msg.includes("failed to fetch") ||
        msg.includes("failed to load") ||
        msg.includes("unexpected token") ||
        msg.includes("client-side exception");

      if (!isRecoverableError) return;

      // Prevent reload loop: allow at most one reload within 10 seconds
      const lastReload = Number(sessionStorage.getItem(SESSION_KEY) || 0);
      const now = Date.now();
      if (now - lastReload < 10000) return;

      sessionStorage.setItem(SESSION_KEY, String(now));

      // Hard reload fetches the fresh static HTML & assets directly
      window.location.reload();
    }

    window.addEventListener("unhandledrejection", handleError);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleError);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
