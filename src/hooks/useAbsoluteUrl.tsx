import { useEffect } from "react";
import { isTypeError } from "utils/predicates";

/** Warns the developer if accidentally passed a broken or unexpectedly relative URL.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL */
export const useAbsoluteUrl = (href: string) => {
  useEffect(() => {
    try {
      new URL(href);
    } catch (e: unknown) {
      if (isTypeError(e)) {
        console.warn(`Expected valid absolute URL, received "${href}".`);
      }
    }
  }, [href]);
};
