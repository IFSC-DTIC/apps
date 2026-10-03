## 2025-03-20 - XSS Sanitization in Fallback 404 Modal
**Vulnerability:** Unescaped dynamic properties (`targetApp.iconUrl`, `targetApp.name`, `targetApp.opportunity_plan`, `badge`, `domain_requirement`, `ot04_status`, `safety_rating`, `tags`) were directly injected into `innerHTML` strings in `404.html`.
**Learning:** Even fallback or router error pages (`404.html`) that parse query parameters and JSON catalog items need explicit HTML escaping when building UI markup dynamically via `innerHTML`.
**Prevention:** Always use an `escapeHtml()` helper or safe DOM construction methods (`textContent`, `setAttribute`) when injecting external data into DOM elements via `innerHTML`.
