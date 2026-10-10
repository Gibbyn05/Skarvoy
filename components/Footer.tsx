import Link from "next/link";
import { company } from "../data/company";
import { Arrow } from "./Arrow";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow">STÅLBYGG · MONTASJE · NORGE</p>
          <h2>La oss se på<br />prosjektet deres.</h2>
        </div>
        <Link className="round-link" href="/kontakt" aria-label="Kontakt Skarvøy Montasje"><Arrow /></Link>
      </div>
      <div className="shell footer-grid">
        <div><Logo light /><p>{company.description}</p></div>
        <div><p className="footer-label">Kontakt</p><a href={`tel:${company.phoneHref}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a></div>
        <div><p className="footer-label">Besøksadresse</p><p>{company.address.map((line) => <span key={line}>{line}<br /></span>)}</p></div>
        <div><p className="footer-label">Snarveier</p><Link href="/tjenester">Tjenester</Link><Link href="/prosjekter">Prosjekter</Link><Link href="/jobb-hos-oss">Jobb hos oss</Link></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>Org.nr. {company.organisationNumber}</span><span>Personvern</span></div>
    </footer>
  );
}
