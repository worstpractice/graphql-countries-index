import React from "react"
import { createPortal } from "react-dom"
import type { State } from "store"
import { useStore } from "store"
import type { FC } from "typings/FC"
import type { SingleChild } from "typings/SingleChild"
import styles from "./FullScreenModal.module.css"

type Props = {
  children: SingleChild
}

const selector = ({ isDetailViewing }: State) => ({
  isDetailViewing,
})

export const FullScreenModal: FC<Props> = ({ children }) => {
  const { isDetailViewing } = useStore(selector)

  if (!isDetailViewing) {
    return null
  }

  return createPortal(
    <div className={styles.fullScreenModal} data-cy="FullScreenModal">
      {children}
    </div>,
    document.body
  )
}
