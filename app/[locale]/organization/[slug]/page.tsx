import { notFound } from "next/navigation";
import { MANAGEMENT_EXECUTIVES } from "@/lib/data/management";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return MANAGEMENT_EXECUTIVES.map((executive) => ({
    slug: executive.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const executive = MANAGEMENT_EXECUTIVES.find((e) => e.slug === slug);
  
  if (!executive) {
    return {
      title: "Executive Not Found",
    };
  }

  return {
    title: `${executive.name} - ${executive.position} | PT Bike Tbk`,
    description: executive.biography,
  };
}

export default async function ExecutiveDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const executive = MANAGEMENT_EXECUTIVES.find((e) => e.slug === slug);

  if (!executive) {
    notFound();
  }

  return (
    <div>
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container-page">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to About
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {executive.image ? (
                <div className="w-full md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden bg-card border border-border">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full md:w-64 h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border">
                  <span className="text-6xl font-bold text-primary">
                    {executive.name.charAt(0)}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                  Management Profile
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {executive.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {executive.position}
                </p>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-lg font-semibold mb-3">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {executive.fullBiography || executive.biography}
                  </p>

                  {executive.education && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 mt-8">Education</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {executive.education}
                      </p>
                    </>
                  )}

                  {executive.career && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 mt-8">Career</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {executive.career}
                      </p>
                    </>
                  )}

                  {executive.currentPositions && executive.currentPositions.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 mt-8">Current Positions</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        {executive.currentPositions.map((position, index) => (
                          <li key={index}>{position}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
