import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!projects.find((p) => p.slug === slug)) notFound(); return null; }
