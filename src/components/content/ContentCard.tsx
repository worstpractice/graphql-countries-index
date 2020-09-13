import type { MouseEventHandler, ReactNode } from "react";
import React, { useState } from "react";
import type { FC } from "typings/FC";
import styles from "./ContentCard.module.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  onTouchStart?: () => void;
  onMouseOver?: () => void;
};

export const ContentCard: FC<Props> = ({ children, onClick, onMouseOver, onTouchStart }) => {
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    if (isPrefetched) return;

    if (onMouseOver) {
      onMouseOver();
      setIsPrefetched(true);
    }
  };

  return (
    <article onClick={onClick} onMouseOver={handleMouseOver} onTouchStart={onTouchStart} className={styles.card}>
      {children}
    </article>
  );
};
