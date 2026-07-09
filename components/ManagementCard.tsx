import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export interface ManagementCardProps {
  name: string;
  position: string;
  image?: string;
  biography: string;
  slug: string;
  locale?: string;
}

export function ManagementCard({
  name,
  position,
  image,
  biography,
  slug,
  locale = 'en',
}: ManagementCardProps) {
  const t = useTranslations('about.management');
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="group flex flex-col h-full rounded-2xl bg-card border border-border/60 shadow-soft overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-primary-soft">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-primary-soft to-primary-soft/60">
            <span className="text-4xl font-display font-bold text-primary/30">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-foreground leading-tight">{name}</h3>
        <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-1 mb-3">
          {position}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
          {biography}
        </p>
        <Link
          href={`/${locale}/organization/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          {t('viewBiography')} <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
