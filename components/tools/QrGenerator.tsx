"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

export function QrGenerator() {
  const [text, setText] = useState("https://exemplo.com");
  const [phone, setPhone] = useState("");
  const v = text.trim() || " ";
  return (
    <div className="rounded-xl border p-4 bg-[var(--card)]">
      <h3 className="font-bold">Gerador de QR Code</h3>
      <p className="text-xs text-slate-500">Tudo no seu navegador. Nada é enviado.</p>
      <label className="mt-2 block text-sm">Texto / URL
        <input value={text} onChange={(e) => setText(e.target.value)} className="mt-1 w-full rounded-lg border p-2" />
      </label>
      <label className="mt-2 block text-sm">WhatsApp (opcional, só números com DDI)
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="5511999999999" className="mt-1 w-full rounded-lg border p-2" />
        {phone && <button onClick={() => setText(`https://wa.me/${phone.replace(/\D/g, "")}`)} className="mt-1 text-xs underline">Usar este WhatsApp no QR</button>}
      </label>
      <div className="mt-3 bg-white p-4 inline-block rounded-lg">
        <QRCode value={v} size={160} />
      </div>
    </div>
  );
}
