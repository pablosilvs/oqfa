"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { hasConsentedToAll } from "@/lib/consent";

// Script oficial do AdSense, global, uma única vez.
// Só carrega quando NEXT_PUBLIC_ADSENSE_CLIENT_ID existe E usuário aceitou tudo.
export function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!client) return;
    setAllowed(hasConsentedToAll());
    const onConsent = (e: Event) => {
      setAllowed((e as CustomEvent).detail === "all");
    };
    window.addEventListener("oqfa:consent", onConsent);
    const onStorage = () => setAllowed(hasConsentedToAll());
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("oqfa:consent", onConsent);
      window.removeEventListener("storage", onStorage);
    };
  }, [client]);

  if (!client || !allowed) return null;

  return (
    <Script
      id="adsense"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
