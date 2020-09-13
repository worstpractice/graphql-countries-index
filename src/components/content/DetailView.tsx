import { Countries } from "components/collections/Countries";
import { Summary } from "components/content/Summary";
import { Tally } from "components/content/Tally";
import { Flag } from "components/portraits/Flag";
import { useGetCountryQuery } from "hooks/generated";
import { useClickOutside } from "hooks/useClickOutside";
import React, { useRef } from "react";
import type { FC } from "typings/FC";
import type { Country } from "typings/generated";
import { blindPick } from "utils/atRandom";
import styles from "./DetailView.module.css";

type Props = {
  countryCode: Country["code"];
  onClick: (countryName: string) => void;
  onClickOutside: EventListener;
};

export const DetailView: FC<Props> = ({ countryCode, onClick, onClickOutside }) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickOutsideRef, onClickOutside);
  const { client, data, error, loading } = useGetCountryQuery({ variables: { code: countryCode } });

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

  type x = typeof relatedCountries;

  const randomTrio = blindPick(relatedCountries, 3);

  return (
    <div className={styles.detailView} ref={clickOutsideRef}>
      <Flag countryCode={countryCode} />
      <Summary continent={continent.name} country={ownName} />
      <div className={styles.miniResults}>
        <h4>Other countries in {continent.name}</h4>
        <Countries client={client} countries={randomTrio} onClick={onClick} />
      </div>
      <Tally relatedCountries={relatedCountries.length} />
    </div>
  );
};
