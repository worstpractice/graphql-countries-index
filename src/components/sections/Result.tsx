import { Country } from "api/queries";
import { ContentCard } from "components/content/ContentCard";
import { Summary } from "components/content/Summary";
import { Tally } from "components/content/Tally";
import { Flag } from "components/portraits/Flag";
import { useCountriesQuery } from "hooks/generated";
import React from "react";
import type { FC } from "typings/FC";
import { summarize } from "utils/summarize";
import styles from "./Result.module.css";

type Props = {
  onClick: (countryName: string) => void;
  searchString: string;
};

export const Result: FC<Props> = ({ onClick, searchString }) => {
  const { client, data, error, loading } = useCountriesQuery();

  // Short-circuit in order of quickest-to-check.
  if (!searchString || loading || error || !data) {
    return <section className={styles.result} />;
  }

  const { countries } = data;

  const matches = countries.filter(({ name }) => {
    return name.toLowerCase().startsWith(searchString);
  });

  const sortedMatches = matches.sort((a, b) => {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });

  return (
    <>
      <Tally countries={countries.length} matches={matches.length} />
      <section className={styles.result}>
        {sortedMatches.map(({ code, name, ...countryFacts }) => {
          const summary = summarize(countryFacts);

          const prefetchCountryData = () => {
            client.query({ query: Country, variables: { code } });
          };

          return (
            <ContentCard look="overview" onClick={() => onClick(code)} onMouseOver={prefetchCountryData} key={name}>
              <Flag countryCode={code} />
              <Summary countryName={name} countrySummary={summary} />
            </ContentCard>
          );
        })}
      </section>
    </>
  );
};
