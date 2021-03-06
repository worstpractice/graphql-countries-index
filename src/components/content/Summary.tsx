import React from "react";
import type { FC } from "typings/FC";
import type { Continent, Country } from "typings/generated";
import type { ListOfFacts } from "typings/ListOfFacts";
import { summarize } from "utils/summarize";
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
      country: Country["name"];
      facts: ListOfFacts;
      continent?: never;
    }
  | {
      country: Country["name"];
      facts?: never;
      continent: Continent["name"];
    };

export const Summary: FC<Props> = ({ continent, country, facts }) => {
  if (facts) {
    const summary = summarize(facts);

    return (
      <div className={styles.country} data-cy="Summary">
        <h3>{country}</h3>
        <p>{summary} </p>
      </div>
    );
  }

  return (
    <div className={styles.continent} data-cy="Summary">
      <h2>{country}</h2>
      <h3>{continent}</h3>
    </div>
  );
};
