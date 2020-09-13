import type { ApolloClient } from "@apollo/client";
import { GetCountry } from "api/queries";
import { ContentCard } from "components/content/ContentCard";
import { Summary } from "components/content/Summary";
import { Flag } from "components/portraits/Flag";
import { useStore } from "hooks/useStore";
import React from "react";
import type { FC } from "typings/FC";
import type { ListOfCountries } from "typings/ListOfCountries";

type Props = {
  client: ApolloClient<any>;
  countries: ListOfCountries;
};

export const Countries: FC<Props> = ({ client, countries }) => {
  const { openModal, setSelectedCountry } = useStore();

  return (
    <>
      {countries.map(({ code, name, ...countryFacts }) => {
        const handleCardClick = () => {
          setSelectedCountry(code);
          openModal();
        };

        const prefetchCountryData = () => {
          client.query({ query: GetCountry, variables: { code } });
        };

        return (
          <ContentCard onClick={handleCardClick} onMouseOver={prefetchCountryData} key={code}>
            <Flag code={code} country={name} />
            <Summary country={name} facts={countryFacts} />
          </ContentCard>
        );
      })}
    </>
  );
};