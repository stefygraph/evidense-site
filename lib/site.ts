// Central place for site-wide constants.

// TODO(Stéphane): replace with a real booking link (Cal.com hosted or
// self-hosted) once the account exists. Until then the primary CTA
// falls back to email, which the handover note flags as temporary.
export const BOOKING_URL = "mailto:hello@evidense.io";

export const CONTACT_EMAIL = "hello@evidense.io";

export const SITE_URL = "https://www.evidense.io";

// Public profiles, so search engines and AI assistants can connect
// the entity across the web. Add more if they exist (company LinkedIn
// page, Crunchbase, speaker pages).
export const FOUNDER_SAME_AS: string[] = [
  "https://www.linkedin.com/in/stephaneschwander/",
];

export const ORG_SAME_AS: string[] = [];
