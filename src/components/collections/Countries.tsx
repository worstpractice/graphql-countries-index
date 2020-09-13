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

const selector = ({ openModal, setSelectedCountry }: State) => ({
  openModal,
  setSelectedCountry,
});

export const Countries: FC<Props> = ({ client, countries }) => {
  const { openModal, setSelectedCountry } = useStore(selector);
  /** We want `isModalOpen` value to be maximally reactive, so we keep the store reference. */
  const store = useStore();

  return (
    <>
      {countries.map(({ code, name, ...countryFacts }) => {
        const handleInteraction = () => {
          /** This is necessary to prevent closing over a stale value. */
          if (store.isModalOpen) {
            console.log("Modal was open, returning...");
          }

          console.log("Modal was closed! Proceeding...");

          setSelectedCountry(code);
          openModal();
        };

        const prefetchCountryData = () => {
          client.query({ query: GetCountry, variables: { code } });
        };

        return (
          <ContentCard onInteraction={handleInteraction} onMouseOver={prefetchCountryData} key={code}>
            <Flag code={code} country={name} />
            <Summary country={name} facts={countryFacts} />
          </ContentCard>
        );
      })}
    </>
  );
};
