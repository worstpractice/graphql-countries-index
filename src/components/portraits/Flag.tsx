import React from "react";
import type { FC } from "typings/FC";
import type { Country } from "typings/generated";
import styles from "./Flag.module.css";

type Props = {
  countryCode: Country["code"];
};

export const Flag: FC<Props> = ({ countryCode }) => {
  console.log(countryCode);

  return (
    <img
      alt={`Flag of ${countryCode}`}
      className={styles.flag}
      src={`${process.env.PUBLIC_URL}/flags/${countryCode}.png`}
    />
  );
};
