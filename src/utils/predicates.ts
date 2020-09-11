/** Type predicates for the TypeScript compiler (note the special return signature).
 *
 * See: https://fettblog.eu/typescript-type-predicates/ */

export const isTypeError = (t: unknown): t is TypeError => {
  return t instanceof TypeError
}

export const isNull = (t: unknown): t is null => {
  return Object.is(t, null)
}
