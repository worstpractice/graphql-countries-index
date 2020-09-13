import React, { ChangeEventHandler, useRef } from "react";
import type { State } from "store";
import { useStore } from "store";
import type { FC } from "typings/FC";
import styles from "./TextInput.module.css";

type Props = {};

const selector = ({ setSearchTerm, searchTerm }: State) => ({
  setSearchTerm,
  searchTerm,
});

export const TextInput: FC<Props> = () => {
  const { setSearchTerm, searchTerm } = useStore(selector);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const searchInput = target.value.trim();

    if (!searchInput) {
      return setSearchTerm("");
    }

    if (searchInput.length < 30) {
      setSearchTerm(searchInput.toLowerCase());
    }
  };

  return (
    <input
      className={styles.textInput}
      id="textInput"
      inputMode="search"
      onChange={handleSearchInput}
      placeholder="Search for a country"
      ref={inputRef}
      type="text"
      value={searchTerm}
    />
  );
};
