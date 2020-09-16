import { Grayout } from "components/ui/effects/Grayout";
import React from "react";
import { createPortal } from "react-dom";
import type { FC } from "typings/FC";
import type { MultipleChildren } from "typings/MultipleChildren";
import styles from "./Background.module.css";

type Props = {
  children: MultipleChildren;
};

export const Background: FC<Props> = ({ children }) => {
  return createPortal(
    <>
      <div className={styles.background} data-cy="Background"></div>
      <Grayout />
      <div>{children}</div>
    </>,
    document.body,
  );
};
