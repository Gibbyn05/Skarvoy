import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { PageHero } from "../../components/PageHero";
import { company } from "../../data/company";

export const metadata: Metadata = { title: "Kontakt", description: "Kontakt Skarvøy Montasje om prosjekt, kapasitet og fremdrift." };
export default function ContactPage() { return <><PageHero eyebrow="KONTAKT" title="Har du et prosjekt?" text="Ta kontakt tidlig, så ser vi på behov, kapasitet og fremdrift." dark /><section className="shell contact-layout"><aside className="contact-aside"><p className="eyebrow">DIREKTE KONTAKT</p><a className="contact-phone" href={`tel:${company.phoneHref}`}>{company.phone}</a><a className="contact-email" href={`mailto:${company.email}`}>{company.email}</a><div className="contact-details"><p><strong>{company.name}</strong><br />Org.nr. {company.organisationNumber}</p><p>{company.address.map((line) => <span key={line}>{line}<br /></span>)}</p><p>Daglig leder<br /><strong>{company.managingDirector}</strong></p></div></aside><div><p className="section-label">PROSJEKTFORESPØRSEL</p><h2>Fortell litt om prosjektet.</h2><p className="lead">Vi ser på hva dere trenger hjelp med, og hvordan vi eventuelt kan bidra i monteringsfasen.</p><ContactForm /></div></section></> }
