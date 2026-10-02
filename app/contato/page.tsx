"use client";
import { useState } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export default function Contato() {
  const [nome, setNome] = useState(""); const [email, setEmail] = useState(""); const [msg, setMsg] = useState(""); const [erro, setErro] = useState("");
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.includes("@") || msg.trim().length < 10) { setErro("Confira nome, e-mail válido e mensagem com 10+ caracteres."); return; }
    setErro("");
    window.location.href = `mailto:luanasilvasyye@gmail.com?subject=${encodeURIComponent("Contato OQFA - " + nome)}&body=${encodeURIComponent(msg + "\n\nDe: " + nome + " <" + email + ">")}`;
  };
  return (<div className="max-w-xl space-y-3"><Breadcrumbs items={[{label:"Início",href:"/"},{label:"Contato"}]} /><h1 className="text-2xl font-bold">Contato</h1><p className="text-sm text-slate-500">Sem backend ainda: ao enviar, abrimos seu e-mail com a mensagem pronta. Não fingimos envio automático.</p><form onSubmit={enviar} className="space-y-2"><label className="block text-sm">Nome<input value={nome} onChange={(e)=>setNome(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label><label className="block text-sm">E-mail<input value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label><label className="block text-sm">Mensagem<textarea value={msg} onChange={(e)=>setMsg(e.target.value)} rows={5} className="mt-1 w-full rounded-lg border p-2" /></label>{erro && <p role="alert" className="text-sm text-red-600">{erro}</p>}<button className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white">Abrir e-mail</button></form></div>);
}
