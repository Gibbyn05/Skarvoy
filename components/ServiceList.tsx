import Link from "next/link";
import { services } from "../data/services";
import { Arrow } from "./Arrow";

export function ServiceList({ limit }: { limit?: number }) {
  return <div className="service-list">{services.slice(0, limit).map((service) => <article className="service-row" key={service.number}>
    <div className="service-number">{service.number}</div><div><h3>{service.title}</h3><p>{service.description}</p></div><div className="service-thumb image-cover" style={{ backgroundImage: `url(${service.image})` }} /><Link className="text-link" href="/tjenester" aria-label={`Les om ${service.title}`}>Se tjeneste <Arrow /></Link>
  </article>)}</div>;
}
