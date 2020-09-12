import type { Country, Continent, Language } from "typings/generated";

type CountryFacts = Pick<Country, "capital" | "currency"> & {
  continent: Pick<Continent, "name">;
  languages: Pick<Language, "name">[];
};

export const summarize = ({ capital, continent, currency, languages }: CountryFacts) => {
  /** We use this abstraction to capture any bad values. */
  const safetyNet: string[] = [];

  safetyNet.push(
    capital ?? "",
    continent?.name ?? "",
    currency ? currency.split(",")[0] : "",
    languages?.[0]?.name ?? "",
  );

  /** All that remain here are facts about the given country. */
  const countryFacts = safetyNet.filter(Boolean);

  /** We string those facts together to form a summary. */
  const countrySummary = countryFacts.join(" ● ");

  return countrySummary;
};
