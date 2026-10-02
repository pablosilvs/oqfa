"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { hasConsentedToAll } from "@/lib/consent";

// GA4 opcional e leve. Só carrega quando NEXT_PUBLIC_GA_ID existe E usuário aceitou tudo.
// Não duplica: componente montado uma vez no layout.
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!gaId) return;
    setAllowed(hasConsentedToAll());
    const onConsent = (e: Event) => {
      const v = (e as CustomEvent).detail;
      setAllowed(v === "all");
    };
    window.addEventListener("oqfa:consent", onConsent);
    const onStorage = () => setAllowed(hasConsentedToAll());
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("oqfa:consent", onConsent);
      window.removeEventListener("storage", onStorage);
    };
  }, [gaId]);

  if (!gaId || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
