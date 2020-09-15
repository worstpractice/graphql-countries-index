import { Countries } from "components/collections/Countries"
import { Summary } from "components/content/Summary"
import { Tally } from "components/content/Tally"
import { Flag } from "components/portraits/Flag"
import { useGetCountryQuery } from "hooks/generated"
import { useOnClickOutside } from "hooks/useOnClickOutside"
import React, { useRef } from "react"
import type { State } from "store"
import { useStore } from "store"
import type { FC } from "typings/FC"
import { blindPick } from "utils/blindPick"
import styles from "./DetailView.module.css"

type Props = {}

const selector = ({ isDetailViewing, openDetailViewTo }: State) => ({
  isDetailViewing,
  openDetailViewTo,
})

export const DetailView: FC<Props> = () => {
  const { isDetailViewing, openDetailViewTo } = useStore(selector)

  const closeDetailView = () => {
    openDetailViewTo("")
  }

  const { client, data, error, loading } = useGetCountryQuery({
    variables: { code: isDetailViewing },
  })
  const interactOutsideRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(interactOutsideRef, closeDetailView)

  /** In a real project, this would be good place to present a loading indicator, do graceful error handling, etc. */
  if (loading || error || !data) {
    return null
  }

  const { country } = data

  if (!country) {
    return null
  }

  const { name: ownName, continent } = country

  const { countries } = continent

  if (!countries) {
    return null
  }

  const relatedCountries = countries.filter(function byName({ name }) {
    return name !== ownName
  })

  const randomTrio = blindPick(relatedCountries, 3)

  return (
    <div
      aria-label={`Detail view of ${ownName} and related countries in ${continent.name}`}
      className={styles.detailView}
      data-cy="DetailView"
      ref={interactOutsideRef}
      role="dialog"
    >
      <Flag code={isDetailViewing} country={ownName} />
      <Summary continent={continent.name} country={ownName} />
      <div className={styles.miniResults}>
        <h4>Other countries in {continent.name}</h4>
        <Countries client={client} countries={randomTrio} />
      </div>
      <Tally relatedCountries={relatedCountries.length} />
    </div>
  )
}
