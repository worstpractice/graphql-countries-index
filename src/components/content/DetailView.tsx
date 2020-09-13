import { Countries } from "components/collections/Countries";
import { Summary } from "components/content/Summary";
import { Tally } from "components/content/Tally";
import { Flag } from "components/portraits/Flag";
import { useGetCountryQuery } from "hooks/generated";
import { useClickOutside } from "hooks/useClickOutside";
import React, { useRef } from "react";
import type { State } from "store";
import { useStore } from "store";
import type { FC } from "typings/FC";
import { blindPick } from "utils/blindPick";
import styles from "./DetailView.module.css";

type Props = {};

const selector = ({ closeModal, selectedCountry }: State) => ({
  closeModal,
  selectedCountry,
});

export const DetailView: FC<Props> = () => {
  const { closeModal, selectedCountry } = useStore(selector);

  const clickOutsideRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickOutsideRef, closeModal);
  const { client, data, error, loading } = useGetCountryQuery({ variables: { code: selectedCountry } });

  /** In a real project, this would be good place to present a loading indicator, do graceful error handling, etc. */
  if (loading || error || !data) {
    return null;
  }

  const { country } = data;

  if (!country) {
    return null;
  }

  const { name: ownName, continent } = country;

  const { countries } = continent;

  if (!countries) {
    return null;
  }

  const relatedCountries = countries.filter(function byName({ name }) {
    return name !== ownName;
  });

  const randomTrio = blindPick(relatedCountries, 3);

  return (
    <div className={styles.detailView} ref={clickOutsideRef}>
      <Flag code={selectedCountry} country={ownName} />
      <Summary continent={continent.name} country={ownName} />
      <div className={styles.miniResults}>
        <h4>Other countries in {continent.name}</h4>
        <Countries client={client} countries={randomTrio} isDetail />
      </div>
      <Tally relatedCountries={relatedCountries.length} />
    </div>
  );
};
