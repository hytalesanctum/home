# Cookie Implementation Guide

Your website now has a complete cookie consent system with three types of cookies:

## 🍪 Cookie Types

### 1. **Essential Cookies** (Always Active)
- **Purpose**: Store user's cookie consent choices
- **Cookie Name**: `sanctum_cookie_consent`
- **Data Stored**: JSON object with consent preferences
- **Expiry**: 365 days
- **Example**:
```json
{
  "essential": true,
  "analytics": true,
  "preference": true,
  "timestamp": "2026-01-13T12:00:00.000Z"
}
```

### 2. **Analytics Cookies** (User Must Accept)
- **Purpose**: Track website traffic and user behavior
- **Service**: Google Analytics 4 (GA4)
- **What It Tracks**:
  - Page views
  - User sessions
  - Traffic sources
  - User demographics (anonymized)
  - Behavior flow

#### 🔧 **Setup Required:**

1. **Get Google Analytics 4 Tracking ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update the Tracking ID**:
   - Open `js/cookies.js`
   - Find line 6: `gaTrackingId: 'G-XXXXXXXXXX'`
   - Replace with your actual tracking ID

3. **Verify It's Working**:
   - Accept analytics cookies on your site
   - Open browser DevTools → Console
   - Should see: "Google Analytics 4 loaded"
   - Check GA4 dashboard in ~24 hours for data

#### 📊 **Custom Event Tracking**:
You can track custom events anywhere in your code:
```javascript
// Example: Track civilization page visits
CookieConsent.trackEvent('Navigation', 'view_civilization', 'Empyrea', 1);

// Example: Track button clicks
CookieConsent.trackEvent('Engagement', 'button_click', 'join_server', 1);
```

### 3. **Preference Cookies** (User Must Accept)
- **Purpose**: Remember user settings and preferences
- **Cookie Names**:
  - `sanctum_theme` - Theme preference
  - `sanctum_animations` - Animation preferences
  - `sanctum_language` - Language preference
- **Expiry**: 365 days

#### 💡 **How to Use Preference Cookies**:

**Save a preference:**
```javascript
// Save user's theme choice
CookieConsent.setPreference('theme', 'dark-mode');

// Save animation preference
CookieConsent.setPreference('animations', 'reduced');

// Save language
CookieConsent.setPreference('language', 'en');
```

**Retrieve a preference:**
```javascript
// Get saved theme
const theme = CookieConsent.getPreference('theme');
if (theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
}

// Get animation preference
const animations = CookieConsent.getPreference('animations');
if (animations === 'reduced') {
    // Disable animations
}
```

## 🔍 Viewing Cookie Data

### **In Browser DevTools:**

1. **Chrome/Edge**:
   - Press `F12`
   - Go to **Application** tab
   - Expand **Cookies** → Select `https://hytalesanctum.com`

2. **Firefox**:
   - Press `F12`
   - Go to **Storage** tab
   - Expand **Cookies** → Select your domain

3. **Quick Console Check**:
   ```javascript
   // View all cookies
   document.cookie
   
   // Check consent status
   console.log(CookieConsent.getCookie('sanctum_cookie_consent'));
   
   // View all preferences
   console.log(CookieConsent.loadUserPreferences());
   ```

## 📈 Analytics Dashboard

Once Google Analytics is set up:
- **Real-time data**: [GA4 Real-time Report](https://analytics.google.com/analytics/web/#/realtime)
- **Main dashboard**: [GA4 Overview](https://analytics.google.com/analytics/web/)

**Metrics You'll See**:
- Active users
- Page views per page
- Average session duration
- Bounce rate
- Traffic sources (direct, social, referral)
- Geographic location of visitors
- Device types (desktop, mobile, tablet)

## 🛡️ Privacy Compliance

Your implementation includes:
- ✅ **GDPR Compliant**: Users can deny/accept cookies
- ✅ **IP Anonymization**: GA4 configured with `anonymize_ip: true`
- ✅ **Secure Cookies**: `SameSite=Lax;Secure` flags
- ✅ **Clear Consent**: Banner explains cookie usage
- ✅ **Privacy Policy Link**: Links to `/legal` page

## 🎯 Next Steps

1. **Set up Google Analytics 4**:
   - Create GA4 property
   - Replace tracking ID in `js/cookies.js`

2. **Add Preference Features** (Optional):
   - Dark/Light mode toggle
   - Reduced motion option
   - Language selector

3. **Monitor Analytics**:
   - Check dashboard weekly
   - Track which pages are most popular
   - See where visitors come from

4. **Privacy Policy Update**:
   - Update `legal.html` to describe cookie usage
   - List all cookies being used
   - Explain how to delete cookies

## 🧪 Testing

**Test Cookie Banner**:
1. Clear all cookies in browser
2. Refresh site → Banner should appear
3. Click "Accept All" → Banner disappears
4. Check Application tab → Should see `sanctum_cookie_consent` cookie

**Test Analytics** (after setting up GA4):
1. Accept analytics cookies
2. Navigate between pages
3. Check GA4 Real-time report
4. Should see your visit

**Test Preferences**:
```javascript
// In browser console
CookieConsent.setPreference('theme', 'test-value');
console.log(CookieConsent.getPreference('theme')); // Should return 'test-value'
```

## 📝 Example Use Cases

### Track Civilization Page Views
Add to each civilization page:
```javascript
// In empyrea.html
CookieConsent.trackEvent('Civilization', 'page_view', 'Empyrea');
```

### Remember Last Visited Civilization
```javascript
// When user visits a civilization page
CookieConsent.setPreference('last_civilization', 'Empyrea');

// On home page, highlight their favorite
const lastCiv = CookieConsent.getPreference('last_civilization');
if (lastCiv) {
    document.querySelector(`[data-civ="${lastCiv}"]`)?.classList.add('highlight');
}
```

### Track Button Clicks
```javascript
// On "Join Server" button
document.querySelector('.join-button').addEventListener('click', () => {
    CookieConsent.trackEvent('Engagement', 'click', 'join_server_button');
});
```

---

**Need Help?**
- Google Analytics Help: https://support.google.com/analytics
- Cookie Consent Best Practices: https://gdpr.eu/cookies/
