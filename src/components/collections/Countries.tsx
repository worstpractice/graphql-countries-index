import type { ApolloClient } from "@apollo/client";
import { GetCountry } from "api/queries";
import { ContentCard } from "components/content/ContentCard";
import { Summary } from "components/content/Summary";
import { Flag } from "components/portraits/Flag";
import React from "react";
import type { FC } from "typings/FC";
import type { ListOfCountries } from "typings/ListOfCountries";

type Props = {
  client: ApolloClient<any>;
  countries: ListOfCountries;
  onClick: (countryName: string) => void;
};

export const Countries: FC<Props> = ({ client, countries, onClick }) => {
  return (
    <>
      {countries.map(({ code, name, ...countryFacts }) => {
        const handleClick = () => {
          onClick(code);
        };

        const prefetchCountryData = () => {
          client.query({ query: GetCountry, variables: { code } });
        };

        return (
          <ContentCard onClick={handleClick} onMouseOver={prefetchCountryData} key={code}>
            <Flag countryCode={code} />
            <Summary country={name} facts={countryFacts} />
          </ContentCard>
        );
      })}
    </>
  );
};
