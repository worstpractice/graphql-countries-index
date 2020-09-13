export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type CacheControlScope = "PUBLIC" | "PRIVATE";

export type Continent = {
  readonly code: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly countries: ReadonlyArray<Country>;
};

export type ContinentFilterInput = {
  readonly code?: Maybe<StringQueryOperatorInput>;
};

export type Country = {
  readonly code: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly native: Scalars["String"];
  readonly phone: Scalars["String"];
  readonly continent: Continent;
  readonly capital?: Maybe<Scalars["String"]>;
  readonly currency?: Maybe<Scalars["String"]>;
  readonly languages: ReadonlyArray<Language>;
  readonly emoji: Scalars["String"];
  readonly emojiU: Scalars["String"];
  readonly states: ReadonlyArray<State>;
};

export type CountryFilterInput = {
  readonly code?: Maybe<StringQueryOperatorInput>;
  readonly currency?: Maybe<StringQueryOperatorInput>;
  readonly continent?: Maybe<StringQueryOperatorInput>;
};

export type Language = {
  readonly code: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly native?: Maybe<Scalars["String"]>;
  readonly rtl: Scalars["Boolean"];
};

export type LanguageFilterInput = {
  readonly code?: Maybe<StringQueryOperatorInput>;
};

export type Query = {
  readonly continents: ReadonlyArray<Continent>;
  readonly continent?: Maybe<Continent>;
  readonly countries: ReadonlyArray<Country>;
  readonly country?: Maybe<Country>;
  readonly languages: ReadonlyArray<Language>;
  readonly language?: Maybe<Language>;
};

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>;
};

export type QueryContinentArgs = {
  code: Scalars["ID"];
};

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars["ID"];
};

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>;
};

export type QueryLanguageArgs = {
  code: Scalars["ID"];
};

export type State = {
  readonly code?: Maybe<Scalars["String"]>;
  readonly name: Scalars["String"];
  readonly country: Country;
};

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars["String"]>;
  readonly ne?: Maybe<Scalars["String"]>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly regex?: Maybe<Scalars["String"]>;
  readonly glob?: Maybe<Scalars["String"]>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
  readonly countries: ReadonlyArray<
    Pick<Country, "capital" | "code" | "currency" | "name"> & {
      readonly continent: Pick<Continent, "name">;
      readonly languages: ReadonlyArray<Pick<Language, "name">>;
    }
  >;
};

export type GetCountryQueryVariables = Exact<{
  code: Scalars["ID"];
}>;

export type GetCountryQuery = {
  readonly country?: Maybe<
    Pick<Country, "capital" | "currency" | "name"> & {
      readonly languages: ReadonlyArray<Pick<Language, "name">>;
      readonly continent: Pick<Continent, "name"> & {
        readonly countries: ReadonlyArray<
          Pick<Country, "capital" | "code" | "currency" | "name"> & {
            readonly continent: Pick<Continent, "name">;
            readonly languages: ReadonlyArray<Pick<Language, "name">>;
          }
        >;
      };
    }
  >;
};
