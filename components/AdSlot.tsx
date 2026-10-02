"use client";
import { useEffect, useState } from "react";
import { hasConsentedToAll } from "@/lib/consent";

interface Props {
  slot?: string;
  format?: string;
  className?: string;
}

// Espaço futuro para Google AdSense.
// - Sem configuração válida ou sem consentimento: renderiza nada (sem caixa falsa).
// - Com NEXT_PUBLIC_ADSENSE_CLIENT_ID + consentimento "all": renderiza <ins> oficial.
// Nunca usar como botão de download/continuar/resolver.
export function AdSlot({ slot, format = "auto", className }: Props) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!client || !slot) return;
    setAllowed(hasConsentedToAll());
    const onConsent = (e: Event) => {
      setAllowed((e as CustomEvent).detail === "all");
    };
    window.addEventListener("oqfa:consent", onConsent);
    return () => window.removeEventListener("oqfa:consent", onConsent);
  }, [client, slot]);

  useEffect(() => {
    if (!client || !slot || !allowed) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // AdSense nunca deve quebrar a página
    }
  }, [client, slot, allowed]);

  if (!client || !slot || !allowed) return null;

  return (
    <div className={className} aria-label="Publicidade">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
