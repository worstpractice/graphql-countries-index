import type { ListOfFacts } from "typings/ListOfFacts";

export const summarize = ({ capital, continent, currency, languages }: ListOfFacts) => {
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
