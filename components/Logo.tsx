import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`logo ${light ? "logo-light" : ""}`} href="/" aria-label="Skarvøy Montasje – forside">
      <span className="logo-mark" aria-hidden="true">S</span>
      <span>Skarvøy<span className="logo-sub">Montasje</span></span>
    </Link>
  );
}
