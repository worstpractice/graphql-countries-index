import type { Continent, Country, Language } from "typings/generated";

type CountryFacts = Pick<Country, "capital" | "currency"> & {
  continent: Pick<Continent, "name">;
  languages: Pick<Language, "name">[];
};
