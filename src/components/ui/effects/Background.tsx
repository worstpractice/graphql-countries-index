import { Grayout } from "components/ui/effects/Grayout"
import type { ReactElement } from "react"
import React from "react"
import { createPortal } from "react-dom"
import type { FC } from "typings/FC"
import styles from "./Background.module.css"

type Props = {
  children: ReactElement
}

export const Background: FC<Props> = ({ children }) => {
  return createPortal(
    <>
      <div className={styles.background} data-cy="Background"></div>
      <Grayout />
      <div>{children}</div>
    </>,
    document.body
  )
}
