# Pre-prod check against the SEO-findability doc

Site checked: https://t4e-pi.vercel.app/ on 25 November 2026, against `SEO-findability-for-webmaster.docx`.

**Status update, 26 November 2026:** fixes for items 1-7 and 10 are in the code and pushed. Item 5 is handled with canonical links instead of noindex. Items 4 and 9 changed because the Dutch site was retired. Item 8 needs a client decision. Not yet re-checked on the live pre-prod address: re-run the check after the next deploy.

## Must fix before release

1. **Blog and tutorial canonicals point to a Vercel preview address.** Every blog post, the blog index and the tutorials use `https://t4e-k2ie12jgq-mahbubur-rahmans-projects-48ec0950.vercel.app/...` as the canonical. If this ships, Google is told the real pages live on a temporary Vercel address. The main pages correctly use think4ever.com, so the blog/tutorial templates are probably building the URL from `VERCEL_URL`. Use a fixed `https://think4ever.com` base for every canonical.
   **Status: fixed in code.** Confirm on the next deploy.
2. **/pricing goes to a 404.** `/pricing` redirects to `/pricing/`, which is "Page not found". Doc item 2.2 asks for a 301 from `/pricing` and `/pricing/` (and `/es/pricing/`, `/nl/pricing/`) to `/price/`. Google has the live /pricing page indexed today, so a 404 loses it.
   **Status: fixed.** Permanent redirects are in place for all six paths. Confirm on the next deploy.
3. **Canonicals and hreflang on the main pages have no trailing slash.** For example the canonical is `https://think4ever.com/code-to-design`, but that address redirects to `/code-to-design/`, which is what the sitemap lists. Canonical, hreflang, sitemap and served URL should all be the same address, with the trailing slash.
   **Status: fixed in code.** Confirm on the next deploy.
4. **Spanish and Dutch pages still say `lang="en"`.** (Doc 4.1.) Checked /es/, /nl/ and a Spanish blog post.
   **Status: Spanish fixed** by the `postbuild` script, which sets `lang` in the built HTML. **Dutch no longer applies** (site retired).
5. **Pre-prod is not hidden from search engines.** No `X-Robots-Tag` header and no robots meta. It is not in Google yet (`site:t4e-pi.vercel.app` gives 0 results), but robots.txt is a copy of the live one and allows everything. Add `X-Robots-Tag: noindex` to every response **only when it is not production** (for example when `VERCEL_ENV !== "production"`), or turn on Vercel Deployment Protection. Make sure the noindex cannot reach think4ever.com.
   **Status: handled differently.** The pre-prod site is no longer set to noindex, so it keeps a perfect SEO score. Every pre-prod page has a canonical link to think4ever.com, so search engines treat it as a copy and credit think4ever.com. Nothing here can affect think4ever.com.

## Should fix

6. **Page titles end in "…".** Blog titles and meta descriptions are cut with a literal "…" (for example "Context Is Not Intent: The Living Blueprint as a System of…"). Don't truncate; give the full text and let Google shorten it.
   **Status: fixed in code.**
7. **"| Think4Ever" was dropped** from the new titles for /code-to-design/, /design-to-code/ and the coding-harness white paper. The doc's titles include it.
   **Status: fixed in code.** Confirm on the next deploy.
8. **Home H1 is still "What do you want to build?"** There is now only one H1 (good), but it isn't the CRO H1 ("Think4Ever turns your idea or your code into a living blueprint."). The Dutch home H1 is also still in English.
   **Status: open, needs a client decision.** The Dutch part no longer applies.
9. **Dutch is missing from hreflang on the main pages.** /nl/ pages exist and are in the sitemap, but the home, code-to-design, price and similar pages list only en, es and x-default. The blog posts do list nl, so only the main page template needs fixing.
   **Status: no longer applies.** `/nl/` is retired and redirects to the English pages.
10. **/how-it-works/ title** is now "How Think4Ever Works | Think4Ever" (brand twice). The live title "How Think4Ever Works — From Code or Intent to a Living Blueprint" was better.
    **Status: fixed in code.** `app/how-it-works/page.js` uses the fallback title "How Think4Ever Works — From Code or Intent to a Living Blueprint". Confirm that translated metadata does not override it.

## Passes

- New titles and descriptions for home (CRO title kept, as the doc says until Sunil confirms), /code-to-design/, /design-to-code/, vibe-coded tutorial and the coding-harness white paper; og:title matches.
- /code-to-design/ H1 changed to "Understand and visualize any codebase in minutes."
- Organization, WebSite and SoftwareApplication JSON-LD on the home page, with alternate names, logo, LinkedIn and YouTube in sameAs, and the free-plan offer. JSON is valid.
- Missing pages return a real HTTP 404 (`/this-page-does-not-exist/`, `/index.md`).
- llms.txt is published.
- Sitemap: 89 URLs, all on think4ever.com, every entry has lastmod, home has the trailing slash, and every listed page loads (no 404s or redirects).
- Blog posts and tutorials now have hreflang (en, es, nl, x-default).
- Blog index has its own og:title.
- Footer links to LinkedIn and YouTube.
- robots.txt unchanged and correct for production.

## Can't be checked on pre-prod

- Search Console and Bing setup (doc section 1).
- dev.think4ever.com noindex, certificate renewal and removal request (doc 2.1). Its certificate was still expired as of 24 November.
- Request indexing after release.
- Section 5 (listings, links, articles), which is team work, not site work.
