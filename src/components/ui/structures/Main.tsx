import React from "react"
import type { FC } from "typings/FC"
import type { SingleChild } from "typings/SingleChild"
import styles from "./Main.module.css"
type Props = {
  children: SingleChild
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className={styles.main} data-cy="Main">
      {children}
    </main>
  )
}
