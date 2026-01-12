import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
const analytics = getAnalytics();

export const trackPage = (pageName) => {
    logEvent(analytics, 'screen_view', { firebase_screen: pageName });
};
