export const PORTAL_CONFIG = {
  API: "https://portal.think4ever.com/api",
  PORTAL: "https://portal.think4ever.com",
};

export async function callPortalApi(method, path, body, language = "en") {
  const sep = path.includes("?") ? "&" : "?";
  const url = `${PORTAL_CONFIG.API}${path}${language ? `${sep}lang=${encodeURIComponent(language)}` : ""}`;
  try {
    const res = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    return { status: res.status, ok: res.ok, data };
  } catch (err) {
    return {
      status: 0,
      ok: false,
      data: {
        error:
          "Network connection error. If testing locally, please connect to live portal.",
      },
    };
  }
}

