/**
 * Convention editions. BCC 2026 opened in January and closed on 6 February;
 * that gathering is archived. BCC 2027 is the next one.
 */

export interface ConventionEdition {
  year: "2026" | "2027";
  annual: string;
  /** Short status shown on the year card. */
  status: string;
  when: string;
  detail: string;
  note: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const ARCHIVED_EDITION: ConventionEdition = {
  year: "2026",
  annual: "1st Annual",
  status: "Archive",
  when: "January 2026",
  detail: "29 January – 6 February · Bodh Gaya",
  note: "This gathering has concluded",
  image: "/images/convention/hero-1.jpg",
  imageAlt: "The Buddhist Creators Convention 2026 stage in Bodh Gaya",
  href: "/convention/2026",
};

export const NEXT_EDITION: ConventionEdition = {
  year: "2027",
  annual: "2nd Annual",
  status: "Stay tuned",
  when: "Date TBD",
  detail: "Date TBD · Nepal",
  note: "The next gathering",
  image: "/images/home/upcoming-gathering.jpg",
  imageAlt: "The Buddhist Creators community celebrating together",
  href: "/convention/2026#next",
};

export const CONVENTION_EDITIONS = [ARCHIVED_EDITION, NEXT_EDITION] as const;
