import en from "./en.json";
import type { SiteContent } from "./types";

const locales = {
  en: en satisfies SiteContent,
};

export type Locale = keyof typeof locales;

export function getContent(locale: Locale = "en"): SiteContent {
  return locales[locale];
}

const content: SiteContent = getContent();

export default content;
