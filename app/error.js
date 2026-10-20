"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);

    const msg = (error?.message ?? error?.name ?? String(error)).toLowerCase();
    const isRecoverable =
      msg.includes("enqueuemodel") ||
      msg.includes("t.reason") ||
      msg.includes("chunk.reason") ||
      msg.includes("loading chunk") ||
      msg.includes("failed to fetch") ||
      msg.includes("unexpected token");

    if (isRecoverable) {
      const SESSION_KEY = "__t4e_err_reload__";
      const last = Number(sessionStorage.getItem(SESSION_KEY) || 0);
      if (Date.now() - last > 8000) {
        sessionStorage.setItem(SESSION_KEY, String(Date.now()));
        window.location.reload();
      }
    }
  }, [error]);

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
                onClick={() => reset()}
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
