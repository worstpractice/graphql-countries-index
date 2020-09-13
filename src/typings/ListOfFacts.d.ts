import type { Continent, Country, Language } from "typings/generated";

type ListOfFacts = Pick<Country, "capital" | "currency"> & {
  continent: Pick<Continent, "name">;
  languages: Pick<Language, "name">[];
};
