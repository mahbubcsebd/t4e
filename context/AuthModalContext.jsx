"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import AuthModal from "@/components/auth/AuthModal";

const AuthModalContext = createContext({
  isOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTab, setInitialTab] = useState("signup");
  const [modalData, setModalData] = useState({});
  const [modalKey, setModalKey] = useState(0);

  const openAuthModal = useCallback((options = {}) => {
    if (typeof options === "string") {
      setInitialTab(options === "signin" ? "signin" : "signup");
      setModalData({});
    } else if (options && typeof options === "object") {
      setInitialTab(options.tab === "signin" ? "signin" : "signup");
      setModalData({
        mode: options.mode || null,
        prompt: options.prompt || "",
        intentToken: options.intentToken || null,
        preparingMsg: options.preparingMsg || "",
      });
    } else {
      setInitialTab("signup");
      setModalData({});
    }
    setModalKey((prev) => prev + 1);
    setIsOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AuthModalContext.Provider value={{ isOpen, openAuthModal, closeAuthModal }}>
      {children}
      <AuthModal
        key={modalKey}
        isOpen={isOpen}
        onClose={closeAuthModal}
        initialTab={initialTab}
        modalData={modalData}
      />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}

