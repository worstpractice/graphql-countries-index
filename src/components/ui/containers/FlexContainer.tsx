import React from "react";
import type { FC } from "typings/FC";
import type { MultipleChildren } from "typings/MultipleChildren";
import styles from "./FlexContainer.module.css";

type Props = {
  children: MultipleChildren;
};

export const FlexContainer: FC<Props> = ({ children }) => {
  return (
    <div className={styles.flexContainer} data-cy="FlexContainer">
      {children}
    </div>
  );
};
