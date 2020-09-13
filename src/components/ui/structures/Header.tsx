import { ReactNode, useEffect } from "react";
import React from "react";
import { useInView } from "react-intersection-observer";
import type { FC } from "typings/FC";
import styles from "./Header.module.css";

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = ({ children }) => {
  const [inViewRef, isInView] = useInView();

  useEffect(
    function restoreMobileViewport() {
      if (!isInView) {
        console.log('Scrolled to top!');
        window.scrollTo(0, 0);
      }
    },
    [isInView],
  );

  return (
    <header className={styles.header} ref={inViewRef}>
      {children}
    </header>
  );
};
