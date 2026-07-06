export interface ManagementExecutive {
  name: string;
  position: string;
  biography: string;
  slug: string;
  image?: string;
  fullBiography?: string;
  education?: string;
  career?: string;
  currentPositions?: string[];
  displayOrder?: number;
}

export const MANAGEMENT_EXECUTIVES: ManagementExecutive[] = [
  {
    name: "Henry Mulyadi",
    position: "Komisaris Utama",
    biography:
      "Henry Mulyadi lahir di Jakarta pada tahun 1963, merupakan salah satu pendiri PT Sepeda Bersama Indonesia Tbk dan saat ini menjabat sebagai Komisaris Utama.",
    slug: "henry-mulyadi",
  },
  {
    name: "Mayor Jenderal TNI (Purn.) M. Nur Rahmad",
    position: "Komisaris Independen",
    biography:
      "Mayor Jenderal TNI (Purn.) M. Nur Rahmad lahir di Ciamis pada tahun 1965 dan saat ini menjabat sebagai Komisaris Independen PT Sepeda Bersama Indonesia Tbk.",
    slug: "m-nur-rahmad",
  },
  {
    name: "Andrew Mulyadi",
    position: "Direktur Utama",
    biography:
      "Andrew Mulyadi lahir di Jakarta pada tahun 1957 dan saat ini menjabat sebagai Direktur Utama PT Sepeda Bersama Indonesia Tbk.",
    slug: "andrew-mulyadi",
  },
  {
    name: "Winston Mulyadi",
    position: "Direktur",
    biography:
      "Winston Mulyadi lahir di Jakarta pada tahun 1994 dan saat ini menjabat sebagai Direktur PT Sepeda Bersama Indonesia Tbk.",
    slug: "winston-mulyadi",
  },
];

export async function getManagementExecutives() {
  return MANAGEMENT_EXECUTIVES;
}
