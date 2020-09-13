import React, { ChangeEventHandler, useEffect, useRef } from "react";
import type { State } from "store";
import { useStore } from "store";
import type { FC } from "typings/FC";
import styles from "./TextInput.module.css";

type Props = {};

const selector = ({ setSearchTerm, searchTerm }: State) => {
  return [setSearchTerm, searchTerm] as const;
};

export const TextInput: FC<Props> = () => {
  const [setSearchTerm, searchTerm] = useStore(selector);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(function focusTextInputOnPageLoad() {
    inputRef?.current?.focus();
  }, []);

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
      onChange={handleSearchInput}
      placeholder="Search for a country"
      ref={inputRef}
      type="text"
      value={searchTerm}
    />
  );
};
