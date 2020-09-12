import React from "react";
import type { FC } from "typings/FC";
import type { Continent, Country } from "typings/generated";
import styles from "./Summary.module.css";

/** This is one way to express an XOR relationship in TypeScript.
 *
 * Accepts one of two possible permutations:
 *  1. `countryName` and `countrySummary` (but not `continentName`)
 *  2. `countryName` and `continentName` (but not `countrySummary`)
 *
 * And never both, and never neither. <3 */
type Props =
  | {
      countryName: Country["name"];
      countrySummary: string;
      continentName?: never;
    }
  | {
      countryName: Country["name"];
      countrySummary?: never;
      continentName: Continent["name"];
    };

export const Summary: FC<Props> = ({ continentName, countryName, countrySummary }) => {
  if (continentName) {
    return (
      <div className={styles.continent}>
        <h2>{countryName}</h2>
        <h3>{continentName}</h3>
      </div>
    );
  }

  return (
    <div className={styles.country}>
      <h3>{countryName}</h3>
      <p>{countrySummary} </p>
    </div>
  );
};
