import type { RefObject } from "react";
import { useCallback, useEffect } from "react";
import { addEventListener } from "utils/addEventListener";
import { compose } from "utils/compose";

/** For when users interact (read: click and/or touch) outside a modal, and you want that "outside interaction" to close the modal. */
export const useInteractOutside = (elementRef: RefObject<HTMLDivElement>, handler: EventListener) => {
  const memoizedHandler = useCallback(handler, [elementRef]);

  useEffect(
    function addEventListeners() {
      const listener: EventListener = (event: Event) => {
        if (!elementRef.current) {
          return;
        }

        // Do nothing when the ref's element (or any of its descendents) was clicked.
        if (elementRef.current.contains(event.target as Node)) {
          return;
        }

        event.stopImmediatePropagation();
        event.preventDefault();
        memoizedHandler(event);
      };

      const unsubscribe = compose(addEventListener("mousedown", listener), addEventListener("touchstart", listener));

      return function cleanup() {
        unsubscribe();
      };
    },
    [elementRef, memoizedHandler],
  );
};
