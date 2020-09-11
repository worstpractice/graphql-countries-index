import { gql } from "@apollo/client"
import { countryDetailsFragment, relatedCountriesDetailsFragment } from "./fragments"

export const Countries = gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${countryDetailsFragment}
`

export const Country = gql`
  query Country($code: ID!) {
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
