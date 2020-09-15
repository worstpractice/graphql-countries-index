import { flags } from "assets/images/flags"
import React from "react"
import type { FC } from "typings/FC"
import type { Country } from "typings/generated"
import styles from "./Flag.module.css"

type Props = {
  code: Country["code"]
  country: Country["name"]
}

export const Flag: FC<Props> = ({ code, country }) => {
  return (
    <img
      alt={`Flag of ${country}`}
      className={styles.flag}
      data-cy={`Flag-${code}`}
      src={flags[code]}
    />
  )
}
