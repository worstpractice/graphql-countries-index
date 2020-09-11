import { ContentCard } from "components/content/ContentCard"
import { Summary } from "components/content/Summary"
import { Tally } from "components/content/Tally"
import { Flag } from "components/portraits/Flag"
import { useCountryQuery } from "hooks/generated"
import { useClickOutside } from "hooks/useClickOutside"
import React, { useRef } from "react"
import type { FC } from "typings/FC"
import type { Country } from "typings/generated"
import { summarize } from "utils/summarize"
import styles from "./DetailView.module.css"

type Props = {
  countryCode: Country["code"]
  onClickOutside: EventListener
}

export const DetailView: FC<Props> = ({ countryCode, onClickOutside }) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null)
  useClickOutside(clickOutsideRef, onClickOutside)
  const { data, error, loading } = useCountryQuery({ variables: { code: countryCode } })

  /** In a real project, this would be good place to present a loading indicator, do graceful error handling, etc. */
  if (loading || error || !data) {
    return null
  }

  const { country } = data

  if (!country) {
    return null
  }

  const { name, continent } = country

  const { countries: relatedCountries } = continent

  if (!relatedCountries) {
    return null
  }

  const firstThree = relatedCountries.slice(0, 3)

  return (
    <div className={styles.detailView} ref={clickOutsideRef}>
      <Flag countryCode={countryCode} />
      <Summary continentName={continent.name} countryName={name} />
      <div className={styles.miniResults}>
        <h4>Other countries in {continent.name}</h4>
        {firstThree.map(({ code, name, ...countryFacts }) => {
          const summary = summarize(countryFacts)

          return (
            <ContentCard key={name} look="detail">
              <Flag countryCode={code} />
              <Summary countryName={name} countrySummary={summary} />
            </ContentCard>
          )
        })}
      </div>
      <Tally relatedCountries={relatedCountries.length} />
    </div>
  )
}
