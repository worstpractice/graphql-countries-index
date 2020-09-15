import React from "react"
import type { FC } from "typings/FC"
import { SingleChild } from "typings/SingleChild"
import styles from "./Search.module.css"

type Props = {
  children: SingleChild
}

export const Search: FC<Props> = ({ children }) => {
  return (
    <section className={styles.search} data-cy="Search">
      {children}
    </section>
  )
}
