import type { Continent, Country, Language } from "typings/generated";

export type ListOfCountries = (Pick<Country, "capital" | "currency" | "name" | "code"> & {
  continent: Pick<Continent, "name">;
  languages: Pick<Language, "name">[];
})[];
