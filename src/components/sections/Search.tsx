import type { ReactNode } from "react"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./Search.module.css"

type Props = {
  children: ReactNode
}

export const Search: FC<Props> = ({ children }) => {
  return <section className={styles.search}>{children}</section>
}
