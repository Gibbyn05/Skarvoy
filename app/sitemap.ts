import type { MetadataRoute } from "next";
import { siteUrl } from "../data/company";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/tjenester", "/prosjekter", "/om-oss", "/jobb-hos-oss", "/kontakt"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .8 })); }
