import type { ReactElement } from "react"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./Main.module.css"

type Props = {
  children: ReactElement
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className={styles.main} data-cy="Main">
      {children}
    </main>
  )
}
