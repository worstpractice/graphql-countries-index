import { gql } from "@apollo/client"

export const countryDetailsFragment = gql`
  fragment countryDetails on Country {
    capital
    code
    continent {
      name
    }
    currency
    languages {
      name
    }
    name
  }
`

export const relatedCountriesDetailsFragment = gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${countryDetailsFragment}
`
