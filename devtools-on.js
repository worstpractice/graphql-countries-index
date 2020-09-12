/* eslint-disable strict */
"use strict";
const { sync } = require("replace-in-file");

const on = `<script src="http://localhost:8097/" defer></script>`;

const off = `<!-- <script src="http://localhost:8097/" defer></script> -->`;

sync({
  files: "./public/index.html",
  from: off,
  to: on,
});
