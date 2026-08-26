/* ============================================================
   Think4Ever growth analytics — PostHog (US Cloud, project 347860)
   Shared between the marketing website (think4ever.com) and the
   customer portal (portal.think4ever.com). Behavior is selected
   by hostname; the same file is deployed to both surfaces so the
   event taxonomy can never drift between them.

   Events:
     marketing_page_viewed   page, path, url, referrer
     marketing_cta_clicked   page, path, cta_location, cta_text, destination
     registration_started    page, path, referrer          (portal only)

   Identity: identify() is called with the LOWERCASED EMAIL after
   account creation / login so the anonymous pre-signup person is
   merged and every later surface attaches to the same person.

   Production gate: no events are ever sent from file://, localhost,
   private-network hosts, or browsers flagged as internal/QA
   (visit any page with ?t4e_qa=1 to flag the browser, ?t4e_qa=0 to
   unflag). Non-production environments log events to the console
   (debug level) instead so the wiring stays testable locally.
   ============================================================ */
(function () {
  'use strict';

  var TOKEN = 'phc_6TIvIiJ2nkLVFcWBPM3mOBfViOhwQtPF9MNiP9PGEy9';
  var API_HOST = 'https://us.i.posthog.com';
  var QA_FLAG_KEY = 't4e-qa-traffic';

  // ---- QA / employee opt-out flag (persistent per browser) -----------------
  try {
    var q = new URLSearchParams(window.location.search || '');
    if (q.get('t4e_qa') === '1') localStorage.setItem(QA_FLAG_KEY, '1');
    if (q.get('t4e_qa') === '0') localStorage.removeItem(QA_FLAG_KEY);
  } catch (e) { /* storage unavailable — treat as normal traffic */ }

  function isQaBrowser() {
    try { return localStorage.getItem(QA_FLAG_KEY) === '1'; } catch (e) { return false; }
  }

  // ---- Production-environment gate ----------------------------------------
  function isProductionHost() {
    if (window.location.protocol === 'file:') return false;
    var h = (window.location.hostname || '').toLowerCase();
    if (!h) return false;
    if (h === 'localhost' || h === '127.0.0.1' || h === '::1' || h === '[::1]') return false;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(h)) {
      if (/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(h)) return false;
    }
    if (/\.(local|test|localhost)$/.test(h)) return false;
    return true;
  }

  var host = (window.location.hostname || '').toLowerCase();
  // The portal page sets window.__T4E_SURFACE='portal' before this script
  // loads; hostname is the fallback for the marketing-site deployment.
  var IS_PORTAL = window.__T4E_SURFACE === 'portal' || host.indexOf('portal.') === 0;
  var SURFACE = IS_PORTAL ? 'portal' : 'marketing';
  var ENABLED = isProductionHost() && !isQaBrowser();

  // ---- Helpers -------------------------------------------------------------
  function pageName() {
    var p = window.location.pathname || '/';
    if (IS_PORTAL) {
      var route = (window.location.hash || '').replace(/^#/, '').split('?')[0] || '/';
      return route === '/' ? 'portal_landing' : 'portal_' + route.replace(/^\//, '').replace(/\//g, '_');
    }
    if (p === '/' || p === '/index.html') return 'home';
    return p.replace(/^\//, '').replace(/\.html?$/, '').replace(/\//g, '_') || 'home';
  }

  function pagePath() {
    // On the portal the hash route IS the page; include it so paths differ.
    return IS_PORTAL
      ? (window.location.pathname || '/') + (window.location.hash || '')
      : (window.location.pathname || '/');
  }

  function baseProps() {
    return {
      page: pageName(),
      path: pagePath(),
      url: window.location.href,
      referrer: document.referrer || null,
      surface: SURFACE
    };
  }

  function ctaLocation(el) {
    var tagged = el.closest && el.closest('[data-cta-location]');
    if (tagged) return tagged.getAttribute('data-cta-location');
    if (el.closest && el.closest('header,nav')) return 'nav';
    if (el.closest && el.closest('footer')) return 'footer';
    var sec = el.closest && el.closest('section[id],div[id]');
    if (sec && sec.id) return sec.id;
    // First section of the page ≈ hero
    var section = el.closest && el.closest('section');
    if (section && section.parentElement) {
      var sections = section.parentElement.querySelectorAll('section');
      if (sections.length && sections[0] === section) return 'hero';
    }
    return 'page';
  }

  // ---- Public facade (safe no-op outside production) -----------------------
  var T4E = {
    enabled: ENABLED,
    surface: SURFACE,
    capture: function (name, props) {
      var merged = Object.assign(baseProps(), props || {});
      if (!ENABLED) {
        try { console.debug('[t4e-analytics off]', name, merged); } catch (e) {}
        return;
      }
      try { window.posthog.capture(name, merged); } catch (e) {}
    },
    // Merge the anonymous person into a real profile. Email (lowercased) is the
    // canonical distinct id across ALL Think4Ever surfaces — keep it that way.
    identifyUser: function (user, fallbackEmail) {
      var email = ((user && user.email) || fallbackEmail || '').trim().toLowerCase();
      if (!email) return;
      if (!ENABLED) {
        try { console.debug('[t4e-analytics off] identify', email); } catch (e) {}
        return;
      }
      try {
        window.posthog.identify(email, {
          email: email,
          name: user ? (((user.first_name || '') + ' ' + (user.last_name || '')).trim() || user.name || null) : null,
          company: (user && (user.company_name || user.companyName)) || null,
          portal_user_id: (user && user.id) || null
        });
      } catch (e) {}
    },
    reset: function () {
      if (!ENABLED) return;
      try { window.posthog.reset(); } catch (e) {}
    }
  };
  window.T4EAnalytics = T4E;

  if (ENABLED) loadPostHog(); // never load PostHog at all outside production

  // ---- PostHog loader (official snippet) -----------------------------------
  function loadPostHog() {
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="an ln init xn Cn Br kn In capture Fn nn calculateEventProperties On register register_once register_for_session unregister unregister_for_session Ln getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Dn identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty An Rn createPersonProfile setInternalOrTestUser $n yn jn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Tn debug Ur Rt getPageViewId captureTraceFeedback captureTraceMetric pn".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init(TOKEN, {
    api_host: API_HOST,
    defaults: '2026-05-30',
    person_profiles: 'identified_only',
    // Identity + session + initial attribution (utm_*, referrer) live in a
    // cookie on .think4ever.com so they survive think4ever.com →
    // portal.think4ever.com → workspace subdomains.
    cross_subdomain_cookie: true
  });
  window.posthog.register({ surface: SURFACE });
  }

  // ---- marketing_page_viewed ----------------------------------------------
  var lastViewKey = null;
  function trackPageView() {
    var key = pagePath();
    if (key === lastViewKey) return;
    lastViewKey = key;
    T4E.capture('marketing_page_viewed', {});
  }

  // ---- registration_started (portal) --------------------------------------
  var lastRoute = null;
  function onPortalRoute() {
    var route = (window.location.hash || '').replace(/^#/, '').split('?')[0] || '/';
    if (route === lastRoute) return;
    lastRoute = route;
    if (route === '/' || route === '/pricing') trackPageView();
    if (route === '/register') {
      T4E.capture('registration_started', {});
    }
  }

  if (IS_PORTAL) {
    window.addEventListener('hashchange', onPortalRoute);
    onPortalRoute();
  } else {
    // Marketing site is a Next.js static export with client-side navigation —
    // hook history so soft navigations count as page views too.
    trackPageView();
    var push = history.pushState, replace = history.replaceState;
    history.pushState = function () { push.apply(this, arguments); trackPageView(); };
    history.replaceState = function () { replace.apply(this, arguments); trackPageView(); };
    window.addEventListener('popstate', trackPageView);
  }

  // ---- marketing_cta_clicked ----------------------------------------------
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href],button[data-cta]');
    if (!a) return;
    var href = a.getAttribute('href') || a.getAttribute('data-cta-destination') || '';
    var isCta;
    if (IS_PORTAL) {
      isCta = /^#\/(register|login|pricing)/.test(href) || a.hasAttribute('data-cta');
    } else {
      isCta = href.indexOf('portal.think4ever.com') !== -1 || a.hasAttribute('data-cta');
    }
    if (!isCta) return;
    T4E.capture('marketing_cta_clicked', {
      cta_location: ctaLocation(a),
      cta_text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 120) || null,
      destination: href || null
    });
  }, true); // capture phase — fires before navigation starts
})();
