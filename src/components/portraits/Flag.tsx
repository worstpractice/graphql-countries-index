import React from "react"
import type { FC } from "typings/FC"
import type { Country } from "typings/generated"
import styles from "./Flag.module.css"

type Props = {
  countryCode: Country["code"]
}

export const Flag: FC<Props> = ({ countryCode }) => {
  return (
    <img
      alt={`Flag of ${countryCode}`}
      className={styles.flag}
      src={`flags/${countryCode.toLowerCase()}.png`}
    />
  )
}
