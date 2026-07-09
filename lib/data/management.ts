export interface ManagementExecutive {
  name: string;
  position: {
    en: string;
    id: string;
  };
  biography: {
    en: string;
    id: string;
  };
  slug: string;
  image?: string;
  fullBiography?: {
    en: string;
    id: string;
  };
  education?: {
    en: string;
    id: string;
  };
  career?: {
    en: string;
    id: string;
  };
  currentPositions?: {
    en: string[];
    id: string[];
  };
  displayOrder?: number;
}

export const MANAGEMENT_EXECUTIVES: ManagementExecutive[] = [
  {
    name: "Henry Mulyadi",
    position: {
      en: "President Commissioner",
      id: "Komisaris Utama"
    },
    biography: {
      en: "Henry Mulyadi was born in Jakarta in 1963 and is one of the founders of PT Bike Tbk, currently serving as President Commissioner.",
      id: "Henry Mulyadi lahir di Jakarta pada tahun 1963, merupakan salah satu pendiri PT Bike Tbk dan saat ini menjabat sebagai Komisaris Utama."
    },
    slug: "henry-mulyadi",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Mayor Jenderal TNI (Purn.) M. Nur Rahmad",
    position: {
      en: "Independent Commissioner",
      id: "Komisaris Independen"
    },
    biography: {
      en: "Mayor Jenderal TNI (Purn.) M. Nur Rahmad was born in Ciamis in 1965 and currently serves as Independent Commissioner of PT Bike Tbk.",
      id: "Mayor Jenderal TNI (Purn.) M. Nur Rahmad lahir di Ciamis pada tahun 1965 dan saat ini menjabat sebagai Komisaris Independen PT Bike Tbk."
    },
    slug: "m-nur-rahmad",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Andrew Mulyadi",
    position: {
      en: "President Director",
      id: "Direktur Utama"
    },
    biography: {
      en: "Andrew Mulyadi was born in Jakarta in 1957 and currently serves as President Director of PT Bike Tbk.",
      id: "Andrew Mulyadi lahir di Jakarta pada tahun 1957 dan saat ini menjabat sebagai Direktur Utama PT Bike Tbk."
    },
    slug: "andrew-mulyadi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Winston Mulyadi",
    position: {
      en: "Director",
      id: "Direktur"
    },
    biography: {
      en: "Winston Mulyadi was born in Jakarta in 1994 and currently serves as Director of PT Bike Tbk.",
      id: "Winston Mulyadi lahir di Jakarta pada tahun 1994 dan saat ini menjabat sebagai Direktur PT Bike Tbk."
    },
    slug: "winston-mulyadi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
];

export async function getManagementExecutives() {
  return MANAGEMENT_EXECUTIVES;
}
