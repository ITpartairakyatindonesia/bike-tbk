import { CONTACT_INFORMATION, CONTACT_MAP } from "@/lib/data/contact";

export function ContactInformation() {
  return (
    <div className="space-y-8">
      {CONTACT_INFORMATION.map((info, index) => (
        <div key={index}>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            {info.title}
          </div>
          <div className="space-y-1">
            {info.lines.map((line, lineIndex) => (
              <p key={lineIndex} className="text-foreground leading-snug">
                {line}
              </p>
            ))}
          </div>
          {index < CONTACT_INFORMATION.length - 1 && (
            <div className="mt-8 border-b border-border" />
          )}
        </div>
      ))}

      <div className="pt-2">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
          {CONTACT_MAP.title}
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3]">
          {CONTACT_MAP.embedUrl ? (
            <iframe
              src={CONTACT_MAP.embedUrl}
              title="Office location"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground">
              <div className="text-center">
                <p className="font-semibold text-sm">Google Maps embed will appear here</p>
                <p className="text-xs mt-1">URL to be added later</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
