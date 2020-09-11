import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client"
import type {
  CountriesQuery,
  CountriesQueryVariables,
  CountryQuery,
  CountryQueryVariables,
} from "typings/generated"

export const CountryDetailsFragmentDoc = gql`
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
export const RelatedCountriesDetailsFragmentDoc = gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${CountryDetailsFragmentDoc}
`
export const CountriesDocument = gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${CountryDetailsFragmentDoc}
`

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>
) {
  return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, baseOptions)
}
export function useCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>
) {
  return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    baseOptions
  )
}
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>
export function refetchCountriesQuery(variables?: CountriesQueryVariables) {
  return { query: CountriesDocument, variables: variables }
}
export const CountryDocument = gql`
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
  ${RelatedCountriesDetailsFragmentDoc}
`

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(
  baseOptions?: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables>
) {
  return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, baseOptions)
}
export function useCountryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>
) {
  return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, baseOptions)
}
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>
export function refetchCountryQuery(variables?: CountryQueryVariables) {
  return { query: CountryDocument, variables: variables }
}
