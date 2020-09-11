/** Since we won't be passing the callbacks any arguments, they must not want
 * to be given any in the first place. */
type ZeroParameterCallback = () => void

/** Composes any number of functions into a single function. */
export const compose = (...functions: ZeroParameterCallback[]) => {
  const runInSequence = () => {
    for (const each of functions) {
      each()
    }
  }

  return runInSequence
}
