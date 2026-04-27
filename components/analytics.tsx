'use client';

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}

type GtagFn = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GtagFn }).gtag === 'function') {
    (window as unknown as { gtag: GtagFn }).gtag(...args);
  }
}

export function trackWhatsAppClick() {
  gtag('event', 'whatsapp_click', { event_category: 'engagement' });
}

export function trackEmailClick() {
  gtag('event', 'email_click', { event_category: 'engagement' });
}

export function trackFormSubmit() {
  gtag('event', 'form_submit', { event_category: 'engagement' });
}
