"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Globe, FileText } from "lucide-react";

export const BlogDetailNav = () => {
  return (
    <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <Link
        href="/blog"
        className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium text-[14px]"
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to Articles
      </Link>

      {/* Social Share */}
      {/* <div className="flex items-center gap-2 sm:gap-4 text-gray-400">
        <button className="p-2 hover:text-blue-600 transition-colors"><Globe size={18} /></button>
        <button className="p-2 hover:text-gray-900 transition-colors"><FileText size={18} /></button>
        <button className="p-2 hover:text-gray-900 transition-colors"><Share2 size={18} /></button>
      </div> */}
    </div>
  );
};
