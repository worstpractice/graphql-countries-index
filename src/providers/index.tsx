import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import type { ReactNode } from "react"
import React from "react"
import type { FC } from "typings/FC"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  uri: "https://countries.trevorblades.com/graphql",
})

type Props = {
  children: ReactNode
}

/** Little-known fact: this added level of indirection (instantiating all context
 * providers above the actual `App` component in the tree) is strictly necessary
 * for React to not re-render needlessly when unrelated state changes.
 *
 * Original PSA: https://twitter.com/sophiebits/status/1228942768543686656
 *
 * Video demonstration: https://www.youtube.com/watch?v=CDGBTjMBJzg */
export const Providers: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
