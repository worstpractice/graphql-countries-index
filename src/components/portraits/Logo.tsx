import logo from "assets/images/logo.svg"
import { useAbsoluteUrl } from "hooks/useAbsoluteUrl"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./Logo.module.css"

type Props = {
  href?: string
}

export const Logo: FC<Props> = ({ href = "https://learn2esport.com/" }) => {
  useAbsoluteUrl(href)

  return (
    <div data-cy="Logo">
      <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        <img className={styles.logo} src={logo} alt="Learn2Esports logo" />
      </a>
    </div>
  )
}
