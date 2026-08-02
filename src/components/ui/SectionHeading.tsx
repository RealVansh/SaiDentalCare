interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-500 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
