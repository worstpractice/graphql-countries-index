import React, { ChangeEventHandler, useEffect, useRef } from "react";
import type { FC } from "typings/FC";
import styles from "./TextInput.module.css";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string;
};

export const TextInput: FC<Props> = ({ onChange, placeholder, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(function focusTextInputOnPageLoad() {
    inputRef?.current?.focus();
  }, []);

  return (
    <input
      className={styles.textInput}
      id="textInput"
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      type="text"
      value={value}
    />
  );
};
