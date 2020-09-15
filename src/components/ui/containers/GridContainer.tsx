import type { ReactElement } from "react"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./GridContainer.module.css"

type Props = {
  children: ReactElement
}

export const GridContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.gridContainer} data-cy="GridContainer">
      {children}
    </div>
  )
}
