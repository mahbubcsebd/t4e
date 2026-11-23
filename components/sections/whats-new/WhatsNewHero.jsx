"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import WhatsNewChart from "./WhatsNewChart";
import { scrollToMonth } from "./scrollToMonth";

const PDF_PATH = "/think4ever-whats-new.pdf";

export default function WhatsNewHero({ months, total }) {
  const { t } = useLanguage();
  const latestId = months[0]?.id;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-10 pb-8 lg:pt-16 lg:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#b7ccf4]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>{t("whatsNewPage.eyebrow")}</Eyebrow>

        <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {t("whatsNewPage.titleLine1")}
          <br />
          {t("whatsNewPage.titleLine2Prefix")}think<span className="text-primary">4</span>ever
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("whatsNewPage.lead")}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={() => latestId && scrollToMonth(latestId)}
            className="cursor-pointer shadow-md shadow-primary/25"
          >
            {t("whatsNewPage.seeLatest")}
          </Button>
          <Button asChild variant="outline" className="cursor-pointer">
            <a href={PDF_PATH} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              {t("whatsNewPage.downloadPdf")}
            </a>
          </Button>
        </div>

        <WhatsNewChart months={months} total={total} />
      </div>
    </section>
  );
}
