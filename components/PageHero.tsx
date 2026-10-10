type Props = { eyebrow: string; title: string; text?: string; image?: string; dark?: boolean };

export function PageHero({ eyebrow, title, text, image, dark = false }: Props) {
  return <section className={`page-hero ${dark ? "page-hero-dark" : ""}`}>
    <div className="shell page-hero-grid">
      <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{text && <p className="lead">{text}</p>}</div>
      {image && <div className="page-hero-image image-cover" style={{ backgroundImage: `url(${image})` }}><span className="image-note">Midlertidig illustrasjonsbilde</span></div>}
    </div>
  </section>;
}
