import { HeroSection } from "@/components/sections/HeroSection";

export const metadata = {
  title: "Investor Relations - Bike",
  description: "Access Bike's investor relations information including financial reports, stock information, and shareholder resources.",
};

export default function InvestorPage() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container-page py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Investor Relations
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building long-term value for our shareholders.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Bike is committed to delivering sustainable growth and transparency to our investors. Access financial reports, governance information, and shareholder resources.
          </p>
          <div className="mt-8 p-6 rounded-2xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">
              Investor Relations content coming soon. For immediate inquiries, please contact our IR team at ir@bike.co.id
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
