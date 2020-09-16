import React from "react";
import type { FC } from "typings/FC";
import styles from "./Tally.module.css";

/** This is one way to express an XOR relationship in TypeScript.
 *
 * Accepts one of two possible permutations:
 *  1. `countries` and `matches` (but not `relatedCountries`)
 *  2. `relatedCountries` (but neither `countries` nor `matches`)
 *
 * And never both, and never neither. <3 */
type Props =
  | {
      countries: number;
      matches: number;
      relatedCountries?: never;
    }
  | {
      countries?: never;
      matches?: never;
      relatedCountries: number;
    };

export const Tally: FC<Props> = ({ countries, matches, relatedCountries }) => {
  if (relatedCountries) {
    let others = relatedCountries - 4;

    if (others < 0) {
      others = 0;
    }

    return <h3 className={styles.related}>{others}+ more</h3>;
  }

  return (
    <div className={styles.all} data-cy="Tally">
      <h3>All Countries</h3>
      <p>
        {matches}/{countries}
      </p>
    </div>
  );
};
