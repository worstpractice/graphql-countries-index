import type { CountryFacts } from "typings/CountryFacts";

export const summarize = ({ capital, continent, currency, languages }: CountryFacts) => {
  const safetyNet: string[] = [];

  safetyNet.push(
    capital ?? "",
    continent?.name ?? "",
    currency ? currency.split(",")[0] : "",
    languages?.[0]?.name ?? "",
  );

  const facts = safetyNet.filter(Boolean);

  const summary = facts.join(" ● ");

  return summary;
};
