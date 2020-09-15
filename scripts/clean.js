/* eslint-disable strict */
"use strict"
const { rmdirSync } = require("fs")

try {
  rmdirSync("./build", { recursive: true })
} catch {}
