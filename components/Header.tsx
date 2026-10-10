import Link from "next/link";
import { company } from "../data/company";
import { Logo } from "./Logo";

const links = [
  ["Tjenester", "/tjenester"],
  ["Prosjekter", "/prosjekter"],
  ["Om oss", "/om-oss"],
  ["Jobb hos oss", "/jobb-hos-oss"],
  ["Kontakt", "/kontakt"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav aria-label="Hovedmeny" className="desktop-nav">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <Link className="button button-dark button-small" href="/kontakt">Forespør et prosjekt</Link>
        </div>
      </div>
      <div className="mobile-nav" aria-label="Mobilmeny">
        {links.slice(0, 4).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        <a href={`tel:${company.phoneHref}`}>Ring</a>
      </div>
    </header>
  );
}
