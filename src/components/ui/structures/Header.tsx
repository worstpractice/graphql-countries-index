import type { ReactNode } from "react";
import React from "react";
import type { FC } from "typings/FC";
import styles from "./Header.module.css";

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};