/* eslint-disable strict */
"use strict";
const { rmdirSync } = require("fs");

rmdirSync("./build", { recursive: true });
