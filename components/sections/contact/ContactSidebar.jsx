"use client";

import React from "react";
import Link from "@/components/ui/AppLink";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSidebar() {
  const { t } = useLanguage();

  return (
    <div className="w-full space-y-6 flex flex-col">
      {/* Office Information */}
      <div
        style={{ "--delay": "0.2s" }}
        className="animate-fade-up gemini-card rounded-xl p-6 sm:p-8 flex flex-col justify-start"
      >
        <h2 className="text-base font-bold text-foreground mb-6 border-b border-border/50 pb-4">
          {t("contact.officeTitle")}
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start group">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-[#f2f7fd] border border-border/50 flex items-center justify-center text-muted-foreground group-hover:bg-[#093cad] group-hover:text-white group-hover:border-[#093cad] transition-all duration-300 shadow-sm mt-0.5">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground leading-none mb-1.5">
                {t("contact.hqLabel")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("contact.hqAddress")}
                <br />
                {t("contact.hqCity")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start group">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-[#f2f7fd] border border-border/50 flex items-center justify-center text-muted-foreground group-hover:bg-[#093cad] group-hover:text-white group-hover:border-[#093cad] transition-all duration-300 shadow-sm mt-0.5">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground leading-none mb-1.5">
                {t("contact.emailHeading")}
              </h3>
              <Link
                href={`mailto:${t("contact.emailAddress")}`}
                className="text-xs sm:text-sm text-primary font-semibold hover:text-[#093cad] transition-colors"
              >
                {t("contact.emailAddress")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
