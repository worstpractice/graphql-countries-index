import type { MouseEventHandler } from "react";
import React, { useState } from "react";
import type { FC } from "typings/FC";
import type { MultipleChildren } from "typings/MultipleChildren";
import styles from "./ContentCard.module.css";

type Props = {
  children: MultipleChildren;
  onClick?: () => void;
  onMouseOver?: () => void;
};

export const ContentCard: FC<Props> = ({ children, onClick, onMouseOver }) => {
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    if (isPrefetched) return;

    if (onMouseOver) {
      onMouseOver();
      setIsPrefetched(true);
    }
  };

  return (
    <article className={styles.card} data-cy="ContentCard" onClick={onClick} onMouseOver={handleMouseOver}>
      {children}
    </article>
  );
};
