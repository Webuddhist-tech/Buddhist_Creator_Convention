import { ReactNode } from "react";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/** A short page title. The full-bleed hero lives only on the home page. */
export const PageIntro = ({ eyebrow, title, description, children }: PageIntroProps) => {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          )}
          <h1 className="text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
