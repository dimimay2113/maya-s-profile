export interface NavItem {
  href: string;
  label: string;
}

export interface SiteMeta {
  brand: string;
  eyebrow: string;
  downloadCvLabel: string;
}

export interface HeroContent {
  name: string[];
  tagline: string;
  credentials: string;
  pills: string[];
  photo: {
    alt: string;
    plate: string;
    location: string;
  };
}

export interface NarrativeContent {
  number: string;
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface ExpertiseColumn {
  title: string;
  items: [string, string][];
}

export interface ExpertiseContent {
  number: string;
  label: string;
  heading: string;
  columns: ExpertiseColumn[];
}

export interface Job {
  org: string;
  place: string;
  role: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

export interface HistoryContent {
  number: string;
  label: string;
  heading: string;
  jobs: Job[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
  relationship: string;
}

export interface TestimonialsContent {
  number: string;
  label: string;
  heading: string;
  items: Testimonial[];
}

export interface AcademicContent {
  number: string;
  label: string;
  heading: string;
  degrees: [string, string][];
}

export interface CredentialsContent {
  number: string;
  label: string;
  heading: string;
  items: [string, string][];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  number: string;
  label: string;
  items: FaqItem[];
}

export interface ContactEmail {
  label: string;
  value: string;
  href: string;
  tallyFormId: string;
}

export interface ContactLinkedin {
  label: string;
  value: string;
  href: string;
}

export interface ContactBookCall {
  label: string;
  value: string;
  heading: string;
  description: string;
  calLink: string;
}

export interface ContactContent {
  number: string;
  label: string;
  heading: string[];
  email: ContactEmail;
  bookCall: ContactBookCall;
  linkedin: ContactLinkedin;
  footer: {
    copyright: string;
    tagline: string;
  };
}

export interface SiteContent {
  meta: SiteMeta;
  nav: NavItem[];
  hero: HeroContent;
  narrative: NarrativeContent;
  expertise: ExpertiseContent;
  history: HistoryContent;
  testimonials: TestimonialsContent;
  academic: AcademicContent;
  credentials: CredentialsContent;
  faq: FaqContent;
  contact: ContactContent;
}
