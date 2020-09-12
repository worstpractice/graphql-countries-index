/** Retrieves the final item from any `ArrayLike` in a typesafe manner.
 *
 * NOTE: I ended up not using this, but hopefully it shows something really interesting about TypeScript.
 *
 * Notice the return signature -- *gasps in wonder*. Dependent types. */
export const last = <T extends ArrayLike<any>>(t: T): T[number] => {
  return t[t.length - 1];
};
