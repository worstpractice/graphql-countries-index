import type { MouseEventHandler, ReactNode } from "react"
import React, { useState } from "react"
import type { FC } from "typings/FC"
import { noOp } from "utils/noOp"
import styles from "./ContentCard.module.css"

type Props = {
  children: ReactNode
  look: "detail" | "overview"
  onClick?: MouseEventHandler<HTMLDivElement>
  onMouseOver?: () => void
}

export const ContentCard: FC<Props> = ({
  children,
  look,
  onClick = noOp(),
  onMouseOver = noOp(),
}) => {
  const [isPrefetched, setIsPrefetched] = useState(false)

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    if (isPrefetched) return

    onMouseOver()
    setIsPrefetched(true)
  }

  return (
    <article onClick={onClick} onMouseOver={handleMouseOver} className={styles[look]}>
      {children}
    </article>
  )
}
