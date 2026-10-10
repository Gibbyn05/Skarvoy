import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../../components/Arrow";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = { title: "Prosjekter", description: "Prosjektarkiv for Skarvøy Montasje." };

export default function ProjectsPage() { return <><PageHero eyebrow="REFERANSER" title="Prosjekter" text="Et voksende arkiv over godkjente Skarvøy-prosjekter og leveranser." dark /><section className="shell archive-empty"><p className="section-label">PROSJEKTARKIV / UNDER OPPBYGGING</p><h2>Før arbeidet kan vises,<br />skal det være riktig dokumentert.</h2><p className="lead">Vi publiserer kun prosjekter som er godkjent av kunde og samarbeidspartnere. Arkivet er klart for prosjektbilder, sted, årstall og leveranseomfang når dette foreligger.</p><div className="archive-frame"><span>01</span><p>Her kommer godkjente referanseprosjekter.</p><span className="archive-lines" /></div><Link href="/kontakt" className="text-link">Har du spørsmål om vår erfaring? Ta kontakt <Arrow /></Link></section></> }
