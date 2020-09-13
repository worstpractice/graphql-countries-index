import type { RefObject } from "react";
import { useCallback, useEffect } from "react";
import { addEventListener } from "utils/addEventListener";
import { compose } from "utils/compose";

export const useClickOutside = (elementRef: RefObject<HTMLDivElement>, handler: EventListener) => {
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
