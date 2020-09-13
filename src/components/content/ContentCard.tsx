import type { MouseEventHandler, ReactNode } from "react";
import React, { useState } from "react";
import type { FC } from "typings/FC";
import { noOp } from "utils/noOp";
import styles from "./ContentCard.module.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  onMouseOver?: () => void;
};

export const ContentCard: FC<Props> = ({ children, onClick = noOp(), onMouseOver = noOp() }) => {
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    if (isPrefetched) return;

    onMouseOver();
    setIsPrefetched(true);
  };

  return (
    <article onClick={onClick} onMouseOver={handleMouseOver} className={styles.card}>
      {children}
    </article>
  );
};
