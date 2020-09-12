import { ReactComponent as LogoSVG } from "assets/logo.svg";
import { useAbsoluteUrl } from "hooks/useAbsoluteUrl";
import React from "react";
import type { FC } from "typings/FC";
import styles from "./Logo.module.css";

type Props = {
  href?: string;
};

export const Logo: FC<Props> = ({ href = "https://learn2esport.com/" }) => {
  useAbsoluteUrl(href);

  return (
    <div>
      <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
        <LogoSVG className={styles.logo} title="Learn2Esports logo"></LogoSVG>
      </a>
    </div>
  );
};
