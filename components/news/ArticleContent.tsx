import { PortableText } from '@portabletext/react';
import { urlFor } from "@/lib/cms/image";
import { pickLocalized } from "@/lib/utils";
import type { News } from "@/lib/types/sanity";

interface ArticleContentProps {
  article: News;
  locale: string;
}

export function ArticleContent({ article, locale }: ArticleContentProps) {
  const title = pickLocalized(article.title, locale);
  const imageUrl = article.featuredImage?.asset
    ? urlFor(article.featuredImage).url()
    : undefined;

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <article className="max-w-4xl mx-auto">
          {imageUrl && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border mb-8">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                width={1200}
                height={675}
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {article.body && (
              <PortableText
                value={article.body}
                components={{
                  block: {
                    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                  },
                  list: {
                    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                  },
                  listItem: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                }}
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
