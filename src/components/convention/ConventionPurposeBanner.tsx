/** Two-line purpose statement: what Buddhist Creators does, and why. */
export const ConventionPurposeBanner = () => {
  return (
    <section aria-label="What Buddhist Creators is about" className="bg-secondary">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center md:gap-3">
          <p className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl lg:whitespace-nowrap lg:text-3xl lg:leading-tight">
            We aim to nurture, empower, and connect Buddhist creators
          </p>
          <p className="font-display text-xl font-semibold italic leading-snug text-accent sm:text-2xl lg:whitespace-nowrap lg:text-3xl lg:leading-tight">
            to spread the Dharma
          </p>
        </div>
      </div>
    </section>
  );
};
