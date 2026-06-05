"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tt-cookie-consent-v1";
const GTM_ID = "GTM-WC75SW52";
const OPEN_EVENT = "tt:open-cookie-consent";

type Consent = "accepted" | "declined" | null;

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted" || saved === "declined") {
      setConsent(saved);
    }

    const onOpen = () => {
      window.localStorage.removeItem(STORAGE_KEY);
      setConsent(null);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  }

  return (
    <>
      {consent === "accepted" && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {mounted && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Souhlas s cookies"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="pointer-events-auto relative mx-auto max-w-2xl -rotate-1 rounded-3xl border-comic-thick bg-comic-yellow p-5 shadow-comic-lg sm:p-6">
            <div className="absolute -left-3 -top-5 rotate-12 rounded-full border-comic-thick bg-white px-3 py-1 font-display text-xl shadow-comic-sm">
              🍪 COOKIES!
            </div>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="hidden text-6xl sm:block" aria-hidden>
                🍪
              </span>
              <div className="flex-1">
                <h2 className="font-display text-3xl leading-tight">
                  Dáš mi jen jednu sušenku?
                </h2>
                <p className="mt-1 text-sm leading-relaxed">
                  Rád bych jen vědět, kolik vás sem chodí — přes{" "}
                  <strong>Google Analytics</strong> (anonymně, žádné jméno ani
                  e‑mail). Kontaktní formulář funguje vždy, bez ohledu na
                  souhlas.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={accept}
                type="button"
                className="rounded-full border-comic-thick bg-comic-red px-5 py-2 font-display text-xl uppercase text-white shadow-comic-sm transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-none"
              >
                Souhlasím
              </button>
              <button
                onClick={decline}
                type="button"
                className="rounded-full border-comic-thick bg-white px-5 py-2 font-display text-xl uppercase text-black shadow-comic-sm transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-none"
              >
                Děkuji, nechci
              </button>
              <Link
                href="/cookies"
                className="ml-auto text-sm font-bold underline decoration-2 underline-offset-2 hover:no-underline"
              >
                Více info →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function openCookieConsent() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_EVENT));
  }
}

export function CookieSettingsLink({
  className,
  children = "Cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={openCookieConsent}
      className={
        className ?? "underline decoration-2 underline-offset-2 hover:no-underline"
      }
    >
      {children}
    </button>
  );
}

