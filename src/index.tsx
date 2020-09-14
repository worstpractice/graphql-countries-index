import "normalize.css";
import { Providers } from "providers";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { getElementById } from "utils/getElementById";
import { App } from "./components/App";
import "./styles/reset.module.css";

const root = getElementById("root");







render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  root,
);
