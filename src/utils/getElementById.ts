/** A more typesafe `getElementById`.
 *
 * The `never` type in the return signature specifies that this function either
 * returns an `HTMLElement` or it throws (read: it never returns).
 *
 * See: https://mariusschulz.com/articles/the-never-type-in-typescript */
export const getElementById = (id: string): HTMLElement | never => {
  const element = document.getElementById(id);

  if (!element) {
    throw new ReferenceError(
      `Could not locate DOM element with ID "${id}"! This might indicate a problem in the HTML file.`,
    );
  }

  return element;
};
