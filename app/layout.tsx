import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { company, siteUrl } from "../data/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Skarvøy Montasje | Spesialister på montasje av stålbygg", template: "%s | Skarvøy Montasje" },
  description: company.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "nb_NO", siteName: company.name, title: "Skarvøy Montasje", description: company.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: company.name, url: siteUrl, telephone: company.phone, email: company.email, address: { "@type": "PostalAddress", streetAddress: company.address[0], postalCode: "1410", addressLocality: "Kolbotn", addressCountry: "NO" } };
  return <html lang="nb"><body><Header /><main>{children}</main><Footer /><div className="mobile-call"><a href={`tel:${company.phoneHref}`}>Ring</a><a href="/kontakt">Kontakt</a></div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
