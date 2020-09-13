import type { ReactNode } from "react";
import React from "react";
import type { FC } from "typings/FC";
import styles from "./Main.module.css";

type Props = {
  children: ReactNode;
};

export const Main: FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};