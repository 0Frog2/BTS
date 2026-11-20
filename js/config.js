// ─────────────────────────────────────────────────────────────
// BTS configuration. To move to the company account later:
//  1. Create a new Firebase project under the company Google account
//     and paste its web config below.
//  2. Install the Apps Script (apps-script/) under the company account
//     and paste its new web-app URL below.
// See README.md → "Switching to the company account".
// ─────────────────────────────────────────────────────────────
export const CONFIG = {
  firebase: {
    apiKey: "__API_KEY__",
    authDomain: "__PROJECT_ID__.firebaseapp.com",
    projectId: "__PROJECT_ID__",
    storageBucket: "__PROJECT_ID__.appspot.com",
    messagingSenderId: "__SENDER_ID__",
    appId: "__APP_ID__",
  },
  // Google Apps Script web app (calendar sync, Sunday email, document storage)
  appsScriptUrl: "__APPS_SCRIPT_URL__",
  currency: "EUR",
  locale: "en-GB",
};
