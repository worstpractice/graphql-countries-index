import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GetCountry } from "api/queries";
import { ContentCard } from "components/content/ContentCard";
import { Summary } from "components/content/Summary";
import { Flag } from "components/portraits/Flag";
import React from "react";
import type { State } from "store";
import { useStore } from "store";
import type { FC } from "typings/FC";
import type { ListOfCountries } from "typings/ListOfCountries";

type Props = {
  client: ApolloClient<NormalizedCacheObject>;
  countries: ListOfCountries;
};

const selector = ({ openDetailViewTo }: State) => ({
  openDetailViewTo,
});

export const Countries: FC<Props> = ({ client, countries }) => {
  const { openDetailViewTo } = useStore(selector);

  return (
    <>
      {countries.map(({ code, name, ...countryFacts }) => {
        const handleClick = () => {
          openDetailViewTo(code);
        };

        const prefetchCountryData = () => {
          client.query({ query: GetCountry, variables: { code } });
        };

        return (
          <ContentCard onClick={handleClick} onMouseOver={prefetchCountryData} key={code}>
            <Flag code={code} country={name} />
            <Summary country={name} facts={countryFacts} />
          </ContentCard>
        );
      })}
    </>
  );
};
