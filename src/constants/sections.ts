export const SectionId = {
  Hero: "hero",
  About: "about",
  Projects: "projects",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
