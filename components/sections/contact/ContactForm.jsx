"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- Custom Select Component ---
function CustomSelect({ options, value, onChange, placeholder, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-3 text-sm border bg-card rounded-xl shadow-sm outline-none text-left flex items-center justify-between transition-all ${
          error ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
        } ${value ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto py-1"
          >
            {options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  value === opt ? "bg-[#f2f7fd] text-[#093cad] font-semibold" : "text-muted-foreground hover:bg-[#f7fafe] hover:text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-[11px] text-rose-500 font-bold mt-1.5 ml-1">{error}</p>}
    </div>
  );
}

// --- Main Form Component ---
export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    segment: "",
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companySize: "",
    userRole: "",
    interests: "",
    agreed: false
  });
  
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [errors, setErrors] = useState({});

  const segmentOptions = t("contact.options.segment") || [];
  const companySizeOptions = t("contact.options.size") || [];
  const primaryNeedOptions = t("contact.options.needs") || [];

  const handleNeedChange = (option) => {
    if (selectedNeeds.includes(option)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== option));
    } else {
      setSelectedNeeds([...selectedNeeds, option]);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user interacts
    if (errors[field]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    const reqMsg = t("contact.requiredError");
    
    if (!formData.segment) newErrors.segment = reqMsg;
    if (!formData.firstName) newErrors.firstName = reqMsg;
    if (!formData.lastName) newErrors.lastName = reqMsg;
    if (!formData.email) newErrors.email = reqMsg;
    if (!formData.companyName) newErrors.companyName = reqMsg;
    if (!formData.companySize) newErrors.companySize = reqMsg;
    if (!formData.userRole) newErrors.userRole = reqMsg;
    if (!formData.agreed) newErrors.agreed = reqMsg;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate submission since no endpoint is available
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        segment: "",
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companySize: "",
        userRole: "",
        interests: "",
        agreed: false
      });
      setSelectedNeeds([]);
      alert("Form submitted successfully!");
    }, 1500);
  };

  const InputError = ({ error }) => {
    if (!error) return null;
    return <p className="text-[11px] text-rose-500 font-bold mt-1.5 ml-1">{error}</p>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label className="block text-[13px] font-bold text-foreground mb-1.5">
            {t("contact.segmentLabel")} <span className="text-rose-500">*</span>
          </label>
          <CustomSelect 
            options={segmentOptions} 
            value={formData.segment} 
            onChange={(val) => handleChange("segment", val)} 
            placeholder={t("contact.segmentPlaceholder")}
            error={errors.segment}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-bold text-foreground mb-1.5">
              {t("contact.firstNameLabel")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder={t("contact.firstNamePlaceholder")}
              className={`w-full h-11 px-3 text-sm bg-card border rounded-xl shadow-sm outline-none text-foreground transition-all ${
                errors.firstName ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
              }`}
            />
            <InputError error={errors.firstName} />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-foreground mb-1.5">
              {t("contact.lastNameLabel")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder={t("contact.lastNamePlaceholder")}
              className={`w-full h-11 px-3 text-sm bg-card border rounded-xl shadow-sm outline-none text-foreground transition-all ${
                errors.lastName ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
              }`}
            />
            <InputError error={errors.lastName} />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-foreground mb-1.5">
            {t("contact.emailLabel")} <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder={t("contact.emailPlaceholder")}
            className={`w-full h-11 px-3 text-sm bg-card border rounded-xl shadow-sm outline-none text-foreground transition-all ${
                errors.email ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
            }`}
          />
          <InputError error={errors.email} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-bold text-foreground mb-1.5">
              {t("contact.companyLabel")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder={t("contact.companyPlaceholder")}
              className={`w-full h-11 px-3 text-sm bg-card border rounded-xl shadow-sm outline-none text-foreground transition-all ${
                errors.companyName ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
              }`}
            />
            <InputError error={errors.companyName} />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-foreground mb-1.5">
              {t("contact.sizeLabel")} <span className="text-rose-500">*</span>
            </label>
            <CustomSelect 
              options={companySizeOptions} 
              value={formData.companySize} 
              onChange={(val) => handleChange("companySize", val)} 
              placeholder={t("contact.sizePlaceholder")}
              error={errors.companySize}
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-foreground mb-1.5">
            {t("contact.roleLabel")} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.userRole}
            onChange={(e) => handleChange("userRole", e.target.value)}
            placeholder={t("contact.rolePlaceholder")}
            className={`w-full h-11 px-3 text-sm bg-card border rounded-xl shadow-sm outline-none text-foreground transition-all ${
                errors.userRole ? "border-rose-400 focus:ring-rose-200" : "border-border hover:border-[#07A7E1] focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1]"
            }`}
          />
          <InputError error={errors.userRole} />
        </div>

        <div className="space-y-3">
          <label className="block text-[13px] font-bold text-foreground">
            {t("contact.needsLabel")}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {primaryNeedOptions.map((option, idx) => {
              const isChecked = selectedNeeds.includes(option);
              return (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
                    isChecked
                      ? "border-[#093cad] bg-[#f2f7fd]"
                      : "border-border hover:border-[#465a75]"
                  }`}
                >
                  <div className="relative flex items-center shrink-0">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleNeedChange(option)}
                      className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded border border-border transition-all checked:bg-[#093cad] checked:border-[#093cad]"
                    />
                    <Check className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-[#314865] font-semibold leading-snug">
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-foreground mb-1.5">
            {t("contact.interestsLabel")}
          </label>
          <textarea
            value={formData.interests}
            onChange={(e) => handleChange("interests", e.target.value)}
            placeholder={t("contact.interestsPlaceholder")}
            rows={4}
            className="w-full px-3 py-3 text-sm bg-card border border-border hover:border-[#07A7E1] rounded-xl shadow-sm focus:ring-2 focus:ring-[#07A7E1]/20 focus:border-[#07A7E1] outline-none text-foreground transition-all resize-y min-h-[100px]"
          />
        </div>

        <div className="py-6 border-y border-border/50 text-center">
          <p className="text-[13px] text-muted-foreground font-semibold italic">
            {t("contact.thankYou")}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center shrink-0">
              <input
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) => handleChange("agreed", e.target.checked)}
                className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded border border-border transition-all checked:bg-[#093cad] checked:border-[#093cad]"
              />
              <Check className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-xs text-muted-foreground font-semibold select-none leading-relaxed">
              {t("contact.agreementPrefix")}{" "}
              <a href="#" className="text-[#07A7E1] hover:text-[#093cad] underline decoration-transparent hover:decoration-[#093cad] transition-all">
                {t("contact.privacyPolicy")}
              </a>{" "}
              {t("contact.agreementSuffix")}
            </span>
          </label>
          <InputError error={errors.agreed} />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 mt-4 bg-gradient-to-r from-[#093cad] to-[#07A7E1] hover:opacity-90 disabled:opacity-70 text-white rounded-xl font-bold text-[15px] shadow-[0_8px_20px_rgba(7,167,225,0.25)] transition-all active:scale-[0.98] flex items-center justify-center"
        >
          {isSubmitting ? t("contact.submittingBtn") : t("contact.submitBtn")}
        </button>
      </form>
    </motion.div>
  );
}
