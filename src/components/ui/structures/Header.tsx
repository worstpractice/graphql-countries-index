import React from "react"
import type { FC } from "typings/FC"
import { SingleChild } from "typings/SingleChild"
import styles from "./Header.module.css"

type Props = {
  children: SingleChild
}

export const Header: FC<Props> = ({ children }) => {
  return (
    <header className={styles.header} data-cy="Header">
      {children}
    </header>
  )
}
