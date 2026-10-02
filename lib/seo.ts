import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function solutionMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: `${opts.title} — O que fazer primeiro? | ${siteConfig.shortName}`,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: opts.title,
      description: opts.description,
      siteName: siteConfig.name,
      images: opts.image ? [{ url: opts.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: opts.image ? [opts.image] : undefined,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
