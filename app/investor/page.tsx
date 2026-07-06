import { InvestorSection } from "@/components/sections/InvestorSection";

export const metadata = {
  title: "Investor Relations - Bike",
  description: "Access SBI's investor relations information including annual reports, financial statements, corporate governance documents, and public expose materials.",
};

export default function InvestorPage() {
  return (
    <div>
      <InvestorSection />
    </div>
  );
}
