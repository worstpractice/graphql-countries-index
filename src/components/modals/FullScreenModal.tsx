import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import type { FC } from "typings/FC";
import styles from "./FullScreenModal.module.css";

type Props = {
  children: ReactNode;
};

export const FullScreenModal: FC<Props> = ({ children }) => {
  return createPortal(<div className={styles.fullScreenModal}>{children}</div>, document.body);
};
