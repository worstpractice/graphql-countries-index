import { useStore } from "hooks/useStore";
import React, { ChangeEventHandler, useEffect, useRef } from "react";
import type { FC } from "typings/FC";
import styles from "./TextInput.module.css";

type Props = {
  placeholder: string;
};

export const TextInput: FC<Props> = ({ placeholder }) => {
  const { setSearchTerm, searchTerm } = useStore();
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
      placeholder={placeholder}
      ref={inputRef}
      type="text"
      value={searchTerm}
    />
  );
};
