import React from "react";
import type { FC } from "typings/FC";
import styles from "./Hero.module.css";

type Props = {
  title: string;
  subtitle: string;
};

export const Hero: FC<Props> = ({ title, subtitle }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.fade}>
        <h1 className={styles.title}>{title}</h1>
        <h5 className={styles.subtitle}>{subtitle}</h5>
      </div>
    </section>
  );
};
