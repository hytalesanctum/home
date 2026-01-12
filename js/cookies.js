// Cookie Consent Manager
const CookieConsent = {
    cookieName: 'sanctum_cookie_consent',
    cookieExpiry: 365, // days

    init() {
        this.createModal();
        this.checkConsent();
    },

    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.id = 'cookieConsent';
        banner.style.cssText = 'position: fixed !important; bottom: 0 !important; left: 0 !important; right: 0 !important; z-index: 10000 !important;';
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-text">
                    <h3>🍪 We use cookies</h3>
                    <p>We use cookies to enhance your browsing experience and analyze site traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    <a href="/legal">Privacy Policy</a></p>
                </div>
                <div class="cookie-buttons">
                    <button class="cookie-btn cookie-btn-deny" id="cookieDeny">Deny</button>
                    <button class="cookie-btn cookie-btn-manage" id="cookieManage">Manage</button>
                    <button class="cookie-btn cookie-btn-accept" id="cookieAccept">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
    },

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'cookie-modal';
        modal.id = 'cookieModal';
        modal.innerHTML = `
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h2>Cookie Preferences</h2>
                    <button class="cookie-modal-close" id="cookieModalClose">&times;</button>
                </div>
                
                <div class="cookie-option">
                    <div class="cookie-option-header">
                        <h4>Essential Cookies</h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="essentialCookies" checked disabled>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p>These cookies are necessary for the website to function and cannot be disabled.</p>
                </div>

                <div class="cookie-option">
                    <div class="cookie-option-header">
                        <h4>Analytics Cookies</h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="analyticsCookies">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p>Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>

                <div class="cookie-option">
                    <div class="cookie-option-header">
                        <h4>Preference Cookies</h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="preferenceCookies">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p>Enable the website to remember choices you make and provide enhanced features.</p>
                </div>

                <div class="cookie-modal-footer">
                    <button class="cookie-btn cookie-btn-accept" id="cookieSavePreferences">Save Preferences</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    attachEvents() {
        document.getElementById('cookieAccept').addEventListener('click', () => this.acceptAll());
        document.getElementById('cookieDeny').addEventListener('click', () => this.denyAll());
        document.getElementById('cookieManage').addEventListener('click', () => this.openModal());
        
        document.getElementById('cookieModalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('cookieSavePreferences').addEventListener('click', () => this.savePreferences());
        
        // Close modal when clicking outside
        document.getElementById('cookieModal').addEventListener('click', (e) => {
            if (e.target.id === 'cookieModal') {
                this.closeModal();
            }
        });
    },

    checkConsent() {
        const consent = this.getCookie(this.cookieName);
        if (!consent) {
            // No consent saved, show the banner
            this.createBanner();
            this.attachEvents();
        } else {
            this.applyConsent(JSON.parse(consent));
        }
    },

    acceptAll() {
        const consent = {
            essential: true,
            analytics: true,
            preference: true,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.hideBanner();
    },

    denyAll() {
        const consent = {
            essential: true,
            analytics: false,
            preference: false,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.hideBanner();
        this.closeModal();
    },

    savePreferences() {
        const consent = {
            essential: true,
            analytics: document.getElementById('analyticsCookies').checked,
            preference: document.getElementById('preferenceCookies').checked,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.closeModal();
        this.hideBanner();
    },

    saveConsent(consent) {
        this.setCookie(this.cookieName, JSON.stringify(consent), this.cookieExpiry);
        this.applyConsent(consent);
    },

    applyConsent(consent) {
        // Apply consent settings
        console.log('Cookie consent applied:', consent);
        
        // Here you would enable/disable various tracking scripts
        if (consent.analytics) {
            this.enableAnalytics();
        }
        if (consent.preference) {
            this.enablePreferences();
        }
    },

    enableAnalytics() {
        console.log('Analytics enabled');
        // Add analytics scripts here (e.g., Google Analytics)
    },

    enablePreferences() {
        console.log('Preferences enabled');
        // Enable preference cookies
    },

    openModal() {
        const consent = this.getCookie(this.cookieName);
        if (consent) {
            const settings = JSON.parse(consent);
            document.getElementById('analyticsCookies').checked = settings.analytics;
            document.getElementById('preferenceCookies').checked = settings.preference;
        } else {
            // Set all to checked by default
            document.getElementById('analyticsCookies').checked = true;
            document.getElementById('preferenceCookies').checked = true;
        }
        document.getElementById('cookieModal').classList.add('show');
    },

    closeModal() {
        document.getElementById('cookieModal').classList.remove('show');
    },

    hideBanner() {
        const banner = document.getElementById('cookieConsent');
        if (banner) {
            banner.style.display = 'none';
        }
    },

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    },

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CookieConsent.init());
} else {
    CookieConsent.init();
}
