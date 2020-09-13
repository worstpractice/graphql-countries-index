import type { Continent, Country, Language } from "typings/generated";

export type ListOfCountries = (Pick<Country, "code" | "capital" | "currency" | "name"> & {
  readonly continent: Pick<Continent, "name">;
  readonly languages: readonly Pick<Language, "name">[];
})[];
