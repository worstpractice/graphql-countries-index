import React from "react";
import type { FC } from "typings/FC";
import styles from "./Pillar.module.css";

type Props = {
  size: "small" | "big";
};

export const Pillar: FC<Props> = ({ size }) => {
  return <div className={styles[size]} />;
};
