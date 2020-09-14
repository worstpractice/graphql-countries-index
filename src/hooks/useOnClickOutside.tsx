import { RefObject, useEffect } from "react";
import { addEventListener } from "utils/addEventListener";
import { compose } from "utils/compose";

/** For when users click outside of some element (e.g: a modal), and you want that "outside click" to gracefully close the modal. */
export const useOnClickOutside = (elementRef: RefObject<HTMLDivElement>, handler: EventListener) => {
  useEffect(
    function addEventListeners() {
      const listener: EventListener = (event: Event) => {
        if (!elementRef.current) {
          return;
        }

        /** Do nothing when the ref's element (or any of its descendents) was clicked. */
        if (elementRef.current.contains(event.target as Node)) {
          return;
        }

        /** Consider this click event 'spent' so nested click handlers don't also fire. */
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        handler(event);
      };

      const unsubscribe = compose(addEventListener("mousedown", listener), addEventListener("touchstart", listener));

      return function cleanup() {
        unsubscribe();
      };
    },
    [elementRef, handler],
  );
};
