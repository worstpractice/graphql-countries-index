import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [isOn, setTo] = useState(initialState);

  const enable = () => {
    setTo(true);
  };

  const disable = () => {
    setTo(false);
  };

  const toggle = () => {
    setTo(!isOn);
  };

  return [isOn, enable, disable, toggle] as const;
};
