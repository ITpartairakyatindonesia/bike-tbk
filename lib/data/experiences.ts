import type { Project } from "@/lib/types";

export const EXPERIENCES_PROJECTS: Project[] = [
  {
    img: "/project-1.jpg",
    title: "Trans-Java Toll Extension",
    client: "Ministry of PUPR",
    year: "2024",
    category: "Infrastructure",
  },
  {
    img: "/project-2.jpg",
    title: "Jakarta Smart City Initiative",
    client: "DKI Jakarta",
    year: "2024",
    category: "Technology",
  },
  {
    img: "/project-3.jpg",
    title: "Nusantara Medical Complex",
    client: "IKN Authority",
    year: "2023",
    category: "Healthcare",
  },
];

export async function getExperiences() {
  return EXPERIENCES_PROJECTS;
}
