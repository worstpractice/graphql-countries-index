import { Countries } from "components/collections/Countries";
import { Tally } from "components/content/Tally";
import { useGetCountriesQuery } from "hooks/generated";
import React from "react";
import type { FC } from "typings/FC";
import styles from "./Result.module.css";

type Props = {
  onClick: (countryName: string) => void;
  searchString: string;
};

export const Result: FC<Props> = ({ onClick, searchString }) => {
  const { client, data, error, loading } = useGetCountriesQuery();

  // Short-circuit in order of fastest-to-check.
  if (!searchString || loading || error || !data) {
    return <section className={styles.result} />;
  }

  const { countries } = data;

  const matches = countries.filter(function byInitial({ name }) {
    return name.toLowerCase().startsWith(searchString);
  });

  const sortedMatches = matches.sort(function inAlphabeticalOrder({ name: a }, { name: b }) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  return (
    <>
      <Tally countries={countries.length} matches={matches.length} />
      <section className={styles.result}>
        <Countries client={client} countries={sortedMatches} onClick={onClick} />
      </section>
    </>
  );
};
