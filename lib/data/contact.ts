import { Phone, Mail, MapPin } from "lucide-react";
import type { ContactItem } from "@/lib/types";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MapPin,
    title: "Visit our HQ",
    value: "Menara Bike, Sudirman Kav. 52, Jakarta",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "+62 21 5150 8888",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@bike.co.id",
  },
];

export const CONTACT_INFO = {
  address: "Menara Bike, Jl. Jend. Sudirman Kav. 52, Jakarta 12190",
  phone: "+62 21 5150 8888",
  email: "info@bike.co.id",
};

export async function getContactItems() {
  return CONTACT_ITEMS;
}

export async function getContactInfo() {
  return CONTACT_INFO;
}
