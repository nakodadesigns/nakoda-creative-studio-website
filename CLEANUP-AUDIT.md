# Safe Cleanup Audit

Branch: `safe-cleanup-audit-2026-10`
Scope: source review only; do not deploy without approval.

## Confirmed change on this branch
- Removed `assets/hero-brand-collage.jpg.jpg` because its Git blob hash matched `assets/hero-brand-collage.jpg`.
- The HTML references inspected use `assets/hero-brand-collage.jpg`, not the doubled-extension filename.
- `main` and the production deployment have not been modified by this cleanup commit.

## CSS review
- `style.css` is approximately 75.7 KB and contains many repeated selectors across later overrides and media queries.
- A selector repeating is not, by itself, proof of dead CSS. Some repeated rules encode responsive breakpoints, reduced-motion behaviour, or successive hero layout refinements.
- `index.html` references `hero-fix.css`. Keep this file until its effect is tested in a browser; it applies important homepage hero artwork layout overrides.
- No CSS rules were deleted in this audit because a source-only pass cannot safely establish visual equivalence.

## Redirect review
The six `_redirects` entries are legacy legal URL redirects to current policy pages. Preserve them unless live URL checks prove a rule unnecessary:
- `/legal/cookie-policy.html` -> `/privacy.html`
- `/legal/refund-cancellation-policy.html` -> `/refund-policy.html`
- `/legal/privacy-policy.html` -> `/privacy.html`
- `/legal/terms-and-conditions.html` -> `/terms.html`
- `/legal/disclaimer.html` -> `/disclaimer.html`
- `/legal/service-agreement.html` -> `/terms.html`

## Not yet verified
- External links and live redirect responses
- Every image/font/script URL response
- Browser visual regression across desktop and mobile
- Enquiry form and WhatsApp flow end-to-end
- Which CSS declarations are truly unused

## Safety decision
Do not merge this branch or deploy it until browser checks are completed and the owner approves the resulting diff.
