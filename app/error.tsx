"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-10 text-center space-y-3">
      <h1 className="text-2xl font-bold">Algo deu errado.</h1>
      <p className="text-sm text-slate-500">Tente de novo ou busque outra solução.</p>
      <button onClick={reset} className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white">Tentar de novo</button>
    </div>
  );
}
