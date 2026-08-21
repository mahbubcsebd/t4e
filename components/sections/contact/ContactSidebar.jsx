"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSidebar() {
  const { t } = useLanguage();

  return (
    <div className="w-full lg:w-[360px] space-y-6">
      {/* Office Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
      >
        <h3 className="text-base font-bold text-foreground mb-6 border-b border-border/50 pb-4">
          {t("contact.officeTitle")}
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-start group">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-[#f2f7fd] border border-border/50 flex items-center justify-center text-muted-foreground group-hover:bg-[#093cad] group-hover:text-white group-hover:border-[#093cad] transition-all duration-300 shadow-sm mt-0.5">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground leading-none mb-1.5">
                {t("contact.hqLabel")}
              </h4>
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
              <h4 className="text-sm font-bold text-foreground leading-none mb-1.5">
                {t("contact.emailHeading")}
              </h4>
              <a
                href={`mailto:${t("contact.emailAddress")}`}
                className="text-xs sm:text-sm text-[#07A7E1] font-semibold hover:text-[#093cad] transition-colors"
              >
                {t("contact.emailAddress")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
