import React from "react"
import type { FC } from "typings/FC"
import { MultipleChildren } from "typings/MultipleChildren"
import styles from "./GridContainer.module.css"

type Props = {
  children: MultipleChildren
}

export const GridContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.gridContainer} data-cy="GridContainer">
      {children}
    </div>
  )
}
