import { PORTAL_CONFIG } from "@/lib/portalApi";

const PARAM_ALIASES = { ref_key: "ref", invite_token: "inv" };

// Google Auth URL compliant with Section 8 of Think4Ever Landing API documentation.
export function buildGoogleAuthUrl({ intentToken, modeKey, prompt, pageParams = {} }) {
  const params = new URLSearchParams({ login: "google" });

  if (intentToken) {
    params.set("intent", intentToken);
  } else {
    if (modeKey) params.set("mode", modeKey);
    if (prompt?.trim()) params.set("prompt", prompt.trim());
  }

  Object.entries(pageParams).forEach(([key, value]) => {
    params.set(PARAM_ALIASES[key] || key, value);
  });

  return `${PORTAL_CONFIG.PORTAL}/?${params.toString()}`;
}
