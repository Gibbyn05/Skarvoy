export type Project = {
  slug: string;
  title: string;
  location?: string;
  year?: string;
  category?: string;
  scope?: string;
  description: string;
  isPlaceholder: true;
};

// Project entries are intentionally empty until approved Skarvøy references and imagery are provided.
export const projects: Project[] = [];
