import type { MouseEventHandler, ReactNode } from "react";
import React, { useState } from "react";
import type { FC } from "typings/FC";
import styles from "./ContentCard.module.css";

type Props = {
  children: ReactNode;
  onInteraction?: () => void;
  onMouseOver?: () => void;
};

export const ContentCard: FC<Props> = ({ children, onInteraction, onMouseOver }) => {
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    if (isPrefetched) return;

    if (onMouseOver) {
      onMouseOver();
      setIsPrefetched(true);
    }
  };

  return (
    <article className={styles.card} onClick={onInteraction} onMouseOver={handleMouseOver} onTouchEnd={onInteraction}>
      {children}
    </article>
  );
};
