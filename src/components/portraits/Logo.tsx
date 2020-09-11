import { useAbsoluteUrl } from "hooks/useAbsoluteUrl"
import React from "react"
import type { FC } from "typings/FC"
import styles from "./Logo.module.css"

type Props = {
  alt: string
  href: string
  logo: string
}

export const Logo: FC<Props> = ({ alt, href, logo }) => {
  useAbsoluteUrl(href)

  return (
    <div>
      <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        <img className={styles.logo} src={logo} alt={alt} />
      </a>
    </div>
  )
}
