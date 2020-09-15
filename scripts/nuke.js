/* eslint-disable strict */
"use strict"
const { rmdirSync, unlinkSync } = require("fs")

try {
  rmdirSync("./node_modules", { recursive: true })
} catch {}

try {
  unlinkSync("./yarn.lock")
} catch {}

try {
  /** Shouldn never be present, but just in case */
  unlinkSync("./package.lock")
} catch {}
