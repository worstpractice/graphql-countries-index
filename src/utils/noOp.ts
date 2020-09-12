/** Returning the same individual "do-nothing function" on every call to `noOp` ensures an allocation cost of N(1).  */
const reusableDud = () => {};

/** Call `noOp` wherever you would otherwise declare a new anonymous do-nothing function (typically inline, as a default parameter).
 *
 * Calling `noOp` will keep the inferred types of your function's signature in check.
 *
 * It will also execute faster at run-time, by virtue of saving precious heap allocations. */
export const noOp = <T>(..._: any[]) => {
  /** These type acrobatics preserve the proper contextual type inference when passing `noOp()`
   * as the default parameter in place of some other, "real" function. */
  return (reusableDud as unknown) as NonNullable<T>;
};
