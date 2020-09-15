import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client"
import type {
  GetCountriesQuery,
  GetCountriesQueryVariables,
  GetCountryQuery,
  GetCountryQueryVariables,
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

export const GetCountriesDocument = gql`
  query GetCountries {
    countries {
      ...countryDetails
    }
  }
  ${CountryDetailsFragmentDoc}
`

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */

export function useGetCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>
) {
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    baseOptions
  )
}

export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>
) {
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    baseOptions
  )
}

export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>

export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>

export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>

export function refetchGetCountriesQuery(variables?: GetCountriesQueryVariables) {
  return { query: GetCountriesDocument, variables: variables }
}

export const GetCountryDocument = gql`
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
  ${RelatedCountriesDetailsFragmentDoc}
`

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */

export function useGetCountryQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>
) {
  return Apollo.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, baseOptions)
}

export function useGetCountryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>
) {
  return Apollo.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(
    GetCountryDocument,
    baseOptions
  )
}

export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>

export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>

export type GetCountryQueryResult = Apollo.QueryResult<GetCountryQuery, GetCountryQueryVariables>

export function refetchGetCountryQuery(variables?: GetCountryQueryVariables) {
  return { query: GetCountryDocument, variables: variables }
}
