import { FileText, BarChart3, ShieldCheck, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { InvestorResource } from "@/lib/types";

export interface InvestorCard extends InvestorResource {
  icon: LucideIcon;
}

export const INVESTOR_CARDS: InvestorCard[] = [
  {
    title: "Annual Reports",
    description: "Comprehensive yearly reports on company performance, strategy, and financial highlights.",
    icon: FileText,
    documents: [
      { title: "Annual Report 2023", fileUrl: "#" },
      { title: "Annual Report 2022", fileUrl: "#" },
    ],
  },
  {
    title: "Financial Statements",
    description: "Quarterly and audited financial statements for shareholders and investors.",
    icon: BarChart3,
    documents: [
      { title: "Q3 2023 Financial Statement", fileUrl: "#" },
      { title: "Q2 2023 Financial Statement", fileUrl: "#" },
    ],
  },
  {
    title: "Corporate Governance",
    description: "Board charters, policies, and governance documents ensuring transparent operations.",
    icon: ShieldCheck,
    documents: [
      { title: "Code of Conduct", fileUrl: "#" },
      { title: "Board Manual", fileUrl: "#" },
    ],
  },
  {
    title: "Public Expose",
    description: "Recordings and materials from our annual public expose events.",
    icon: Presentation,
    documents: [
      { title: "Public Expose 2023", fileUrl: "#" },
      { title: "Public Expose 2022", fileUrl: "#" },
    ],
  },
];

export const INVESTOR_CONTENT = {
  label: "Investor Relations",
  title: "Building long-term value for our shareholders.",
  description:
    "SBI is committed to delivering sustainable growth and transparency to our investors. Access financial reports, governance information, and shareholder resources.",
};

export async function getInvestorResources() {
  return INVESTOR_CARDS;
}
