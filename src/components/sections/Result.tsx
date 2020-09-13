import { Countries } from "components/collections/Countries";
import { Tally } from "components/content/Tally";
import { useGetCountriesQuery } from "hooks/generated";
import { useStore } from "hooks/useStore";
import React from "react";
import type { FC } from "typings/FC";
import type { Country } from "typings/generated";
import styles from "./Result.module.css";

type Props = {};

export const Result: FC<Props> = () => {
  const { openModal, searchTerm, setSelectedCountry } = useStore();
  const { client, data, error, loading } = useGetCountriesQuery();

  // Short-circuit in order of fastest-to-check.
  if (!searchTerm || loading || error || !data) {
    return <section className={styles.result} />;
  }

  const { countries } = data;

  const matches = countries.filter(function byInitial({ name }) {
    return name.toLowerCase().startsWith(searchTerm);
  });

  const sortedMatches = matches.sort(function inAlphabeticalOrder({ name: a }, { name: b }) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  const handleCardClick = (countryCode: Country["code"]) => {
    setSelectedCountry(countryCode);
    openModal();
  };

  return (
    <>
      <Tally countries={countries.length} matches={matches.length} />
      <section className={styles.result}>
        <Countries client={client} countries={sortedMatches} onClick={handleCardClick} />
      </section>
    </>
  );
};
