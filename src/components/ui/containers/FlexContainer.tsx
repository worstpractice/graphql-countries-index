import type { ReactNode } from "react"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./FlexContainer.module.css"

type Props = {
  children: ReactNode
}

export const FlexContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.flexContainer} data-cy="FlexContainer">
      {children}
    </div>
  )
}
