import { gql } from "@apollo/client"
import { countryDetailsFragment, relatedCountriesDetailsFragment } from "./fragments"

export const GetCountries = gql`
  query GetCountries {
    countries {
      ...countryDetails
    }
  }
  ${countryDetailsFragment}
`

export const GetCountry = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      capital
      currency
      languages {
        name
      }
      name
      ...relatedCountriesDetails
    }
  }
  ${relatedCountriesDetailsFragment}
`
