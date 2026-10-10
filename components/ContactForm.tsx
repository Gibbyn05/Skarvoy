import { company } from "../data/company";

export function ContactForm({ career = false }: { career?: boolean }) {
  return <form className="contact-form" action={`mailto:${company.email}`} method="post" encType="text/plain">
    <div className="form-grid">
      <label>Navn<input name="Navn" required /></label>
      <label>{career ? "Telefon" : "Firma"}<input name={career ? "Telefon" : "Firma"} required /></label>
      <label>{career ? "E-post" : "Telefon"}<input type={career ? "email" : "tel"} name={career ? "E-post" : "Telefon"} required /></label>
      <label>{career ? "Bosted" : "E-post"}<input type={career ? "text" : "email"} name={career ? "Bosted" : "E-post"} required /></label>
      {career ? <><label>Alder<input type="number" min="16" name="Alder" /></label><label>Førerkort<input name="Førerkort" placeholder="For eksempel klasse B" /></label></> : <><label>Prosjekt<input name="Prosjekt" /></label><label>Prosjektsted<input name="Prosjektsted" /></label><label>Ønsket oppstart<input name="Ønsket oppstart" /></label><label>Hva trenger dere hjelp med?<input name="Behov" /></label></>}
    </div>
    {career && <label>Relevant erfaring og sertifikater<textarea name="Erfaring" rows={4} /></label>}
    <label>{career ? "Fortell litt om deg selv" : "Melding"}<textarea name="Melding" rows={5} required /></label>
    <p className="form-help">Skjemaet åpner e-postprogrammet ditt. Du kan også ringe oss direkte på <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.</p>
    <button className="button button-dark" type="submit">{career ? "Send åpen søknad" : "Send forespørsel"}</button>
  </form>;
}
