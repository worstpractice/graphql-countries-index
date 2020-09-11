export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export type CacheControlScope = "PUBLIC" | "PRIVATE"

export type Continent = {
  code: Scalars["ID"]
  name: Scalars["String"]
  countries: Array<Country>
}

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Country = {
  code: Scalars["ID"]
  name: Scalars["String"]
  native: Scalars["String"]
  phone: Scalars["String"]
  continent: Continent
  capital?: Maybe<Scalars["String"]>
  currency?: Maybe<Scalars["String"]>
  languages: Array<Language>
  emoji: Scalars["String"]
  emojiU: Scalars["String"]
  states: Array<State>
}

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
  currency?: Maybe<StringQueryOperatorInput>
  continent?: Maybe<StringQueryOperatorInput>
}

export type Language = {
  code: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  native?: Maybe<Scalars["String"]>
  rtl: Scalars["Boolean"]
}

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Query = {
  continents: Array<Continent>
  continent?: Maybe<Continent>
  countries: Array<Country>
  country?: Maybe<Country>
  languages: Array<Language>
  language?: Maybe<Language>
}

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>
}

export type QueryContinentArgs = {
  code: Scalars["ID"]
}

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars["ID"]
}

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>
}

export type QueryLanguageArgs = {
  code: Scalars["ID"]
}

export type State = {
  code?: Maybe<Scalars["String"]>
  name: Scalars["String"]
  country: Country
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  ne?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
}

export type CountriesQueryVariables = Exact<{ [key: string]: never }>

export type CountriesQuery = {
  countries: Array<
    Pick<Country, "capital" | "code" | "currency" | "name"> & {
      continent: Pick<Continent, "name">
      languages: Array<Pick<Language, "name">>
    }
  >
}

export type CountryQueryVariables = Exact<{
  code: Scalars["ID"]
}>

export type CountryQuery = {
  country?: Maybe<
    Pick<Country, "capital" | "currency" | "name"> & {
      languages: Array<Pick<Language, "name">>
      continent: Pick<Continent, "name"> & {
        countries: Array<
          Pick<Country, "capital" | "code" | "currency" | "name"> & {
            continent: Pick<Continent, "name">
            languages: Array<Pick<Language, "name">>
          }
        >
      }
    }
  >
}
