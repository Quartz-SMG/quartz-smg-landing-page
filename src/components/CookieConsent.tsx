import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const GA_ID = "G-KLQ4N6K8RR";

function enableAnalytics() {
  try {
    (window as any)[`ga-disable-${GA_ID}`] = false;

    // If gtag already exists, just configure
    if ((window as any).gtag) {
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', GA_ID);
      return;
    }

    // Dynamically load gtag.js
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function gtag(){ (window as any).dataLayer.push(arguments); };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', GA_ID);
    };
    document.head.appendChild(s);
  } catch (e) {
    // no-op
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie_consent') === 'granted';
    // Disable GA by default if no consent
    (window as any)[`ga-disable-${GA_ID}`] = !hasConsent;
    if (!hasConsent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    setVisible(false);
    enableAnalytics();
  };

  const decline = () => {
    // Do not persist denial, so we ask again on next visit
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto px-4 pb-4">
        <div className="glass border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/20 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-200">
              Nous utilisons des cookies pour améliorer votre expérience et activer des fonctionnalités non essentielles (p. ex. analyse). En continuant, vous acceptez notre
              {' '}<a className="text-primary underline" href="/privacy">politique de confidentialité</a>.{' '}
              / We use cookies to improve your experience and enable non-essential features (e.g., analytics). See our{' '}
              <a className="text-primary underline" href="/privacy">privacy policy</a>.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Button variant="outline" onClick={decline} className="btn-glass">Refuser</Button>
              <Button onClick={accept}>Accepter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
