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
    apiKey: "AIzaSyDxEKP6HRvLQVHMiuLLbTHW8lSRdIPS7Oc",
    authDomain: "bts-team-tool.firebaseapp.com",
    projectId: "bts-team-tool",
    storageBucket: "bts-team-tool.firebasestorage.app",
    messagingSenderId: "906797804620",
    appId: "1:906797804620:web:c93e1c3fb9318af35858e9",
  },
  // Google Apps Script web app (calendar sync, Sunday email, document storage)
  appsScriptUrl: "https://script.google.com/macros/s/AKfycby0ZfyqNLwMOtX3RLgxrSFcLNvJ4RVNTNXXqHtGXVCm4NoeIurwQJNDZkqYFhWb77_4kw/exec",
  currency: "EUR",
  locale: "en-GB",
};
