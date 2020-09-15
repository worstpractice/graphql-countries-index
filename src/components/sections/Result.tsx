import { Countries } from "components/collections/Countries"
import { Tally } from "components/content/Tally"
import { useGetCountriesQuery } from "hooks/generated"
import React from "react"
import type { State } from "store"
import { useStore } from "store"
import type { FC } from "typings/FC"
import styles from "./Result.module.css"

type Props = {}

const selector = ({ searchTerm }: State) => ({
  searchTerm,
})

export const Result: FC<Props> = () => {
  const { searchTerm } = useStore(selector)
  const { client, data, error, loading } = useGetCountriesQuery()

  // Short-circuit in order of fastest-to-check.
  if (!searchTerm || loading || error || !data) {
    return <section className={styles.result} />
  }

  const { countries } = data

  const matches = countries.filter(function byInitial({ name }) {
    return name.toLowerCase().startsWith(searchTerm)
  })

  const sortedMatches = matches.sort(function inAlphabeticalOrder({ name: a }, { name: b }) {
    return a === b ? 0 : a < b ? -1 : 1
  })

  return (
    <>
      <Tally countries={countries.length} matches={matches.length} />
      <section className={styles.result} data-cy="Result">
        <Countries client={client} countries={sortedMatches} />
      </section>
    </>
  )
}
