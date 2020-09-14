import React from "react";
import { createPortal } from "react-dom";
import type { FC } from "typings/FC";
import styles from "./Grayout.module.css";

type Props = {};

export const Grayout: FC<Props> = () => {
  return createPortal(
    <>
      <div className={styles.bottom} data-cy="Grayout-bottom"></div>
      <div className={styles.top} data-cy="Grayout-top"></div>
    </>,
    document.body,
  );
};
