import React from "react"
import type { FC } from "typings/FC"
import styles from "./Hero.module.css"

type Props = {}

export const Hero: FC<Props> = () => {
  return (
    <section className={styles.hero} data-cy="Hero">
      <div className={styles.fade}>
        <h1 className={styles.title}>Lorem Ipsum</h1>
        <h5 className={styles.subtitle}>Sit Dolor</h5>
      </div>
    </section>
  )
}
