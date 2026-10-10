import Link from "next/link";
import { Arrow } from "../components/Arrow";
import { ServiceList } from "../components/ServiceList";
import { company } from "../data/company";

const heroImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90";

export default function Home() {
  return <>
    <section className="home-hero image-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-shade" />
      <div className="shell hero-content"><p className="eyebrow">STÅLBYGG · MONTASJE · NORGE</p><h1>Spesialister på<br />montasje av stålbygg</h1><p>Siden 2003 har Skarvøy Montasje arbeidet med oppføring og montasje av stålbygg – fra stålkonstruksjon til tett bygg.</p><div className="hero-actions"><Link href="/kontakt" className="button button-light">Kontakt oss om prosjekt <Arrow /></Link><Link href="/tjenester" className="text-link text-link-light">Se hva vi leverer <Arrow /></Link></div></div>
      <div className="hero-caption"><span>ESTABLERT {company.founded}</span><span>Midlertidig illustrasjonsbilde</span></div>
    </section>

    <section className="intro-section shell"><div className="section-label">01 / MONTASJE</div><div className="intro-copy"><h2>Fra bærekonstruksjon<br />til tett bygg.</h2><div><p className="lead">Skarvøy Montasje er en spesialisert montasjepartner for profesjonelle byggeprosjekter.</p><p>Vi bidrar i monteringsfasen med stål, tak, vegger, elementer, vinduer, dører og beslag. Arbeidet planlegges rundt prosjektets fremdrift og utføres der prosjektet er.</p><Link className="text-link" href="/om-oss">Mer om Skarvøy <Arrow /></Link></div></div><div className="intro-image image-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85)" }}><span className="image-note">Midlertidig illustrasjonsbilde</span></div></section>

    <section className="services-section"><div className="shell section-heading"><p className="eyebrow">TJENESTER</p><h2>Dette monterer vi</h2><p>Et komplett montasjeløp, tilpasset stålhaller, industri- og næringsbygg.</p></div><div className="shell"><ServiceList /></div></section>

    <section className="experience-section"><div className="shell experience-grid"><div><p className="eyebrow">ERFARING</p><h2>Over 20 år med<br />stålbygg og montasje.</h2></div><p className="lead">Skarvøy Montasje ble etablert i 2003 og har siden arbeidet med oppføring og montasje av stålbygg på prosjekter ulike steder i Norge.</p><div className="facts"><div><strong>2003</strong><span>Etablert</span></div><div><strong>Hele Norge</strong><span>Oppdrag</span></div><div><strong>Stålbygg</strong><span>Kjernekompetanse</span></div></div></div></section>

    <section className="projects-teaser shell"><div className="project-image image-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2100&q=85)" }}><span className="image-note">Midlertidig illustrasjonsbilde</span></div><div className="project-teaser-copy"><p className="eyebrow">REFERANSER</p><h2>Arbeid som fortjener å bli sett.</h2><p>Prosjektarkivet bygges opp med godkjente Skarvøy-referanser og prosjektbilder. Til da viser vi hvordan arkivet er rigget for videre vekst.</p><Link className="button button-dark" href="/prosjekter">Se prosjektarkivet <Arrow /></Link></div></section>

    <section className="coverage-section"><div className="shell coverage-grid"><div><p className="eyebrow">MOBILITET</p><h2>Vi tar oppdrag<br />over hele landet.</h2></div><div><p className="lead">Montasje krever at folk og kompetanse kommer dit prosjektet er. Skarvøy Montasje påtar seg oppdrag i hele Norge.</p><Link href="/kontakt" className="text-link">Snakk med oss om kapasitet <Arrow /></Link></div></div><div className="norway-shape" aria-hidden="true">N</div></section>

    <section className="cta-section"><div className="shell"><p className="eyebrow">KOMMENDE PROSJEKT</p><h2>Trenger du montasjekapasitet<br />til et kommende prosjekt?</h2><p>Ta kontakt med oss for å diskutere prosjekt, kapasitet og fremdrift.</p><Link href="/kontakt" className="button button-light">Kontakt Skarvøy Montasje <Arrow /></Link></div></section>
  </>;
}
