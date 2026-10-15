"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({ error, reset }) {
  const isChunkError =
    error?.name === "ChunkLoadError" ||
    (typeof error?.message === "string" &&
      (error.message.includes("Loading chunk") ||
        error.message.includes("Loading CSS chunk") ||
        error.message.includes("enqueueModel") ||
        error.message.includes("dynamicRequire") ||
        error.message.includes("Failed to fetch dynamically imported module") ||
        error.message.includes("Importing a module script failed") ||
        error.message.includes("error loading dynamically imported module")));

  useEffect(() => {
    if (isChunkError) {
      console.warn("[ErrorBoundary] Stale chunk detected, reloading...");
      if (typeof window !== "undefined") {
        const lastReload = sessionStorage.getItem("last_chunk_reload");
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
          sessionStorage.setItem("last_chunk_reload", String(now));
          window.location.reload();
          return;
        }
      }
    } else {
      console.error("Application error:", error);
    }
  }, [error, isChunkError]);

  if (isChunkError) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16 px-4">
          <div className="flex flex-col items-center justify-center p-8 text-center max-w-sm">
            <div className="w-9 h-9 border-3 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-foreground">Loading latest content...</p>
            <p className="text-xs text-muted-foreground mt-1">Please wait a moment</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <SectionCard className="max-w-lg w-full text-center p-8 sm:p-12">
          <Container>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <AlertCircle className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Unable to load page
            </h1>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              We encountered a temporary issue while loading this content. Please try reloading or head back home.
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload page</span>
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted border border-border text-foreground font-bold text-sm hover:bg-muted/80 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Return home</span>
              </Link>
            </div>
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
