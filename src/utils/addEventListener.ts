/** A more typesafe `addEventListener` that returns a convenient cleanup function.
 *
 * Assists runtime performance by enforcing the use of passive event listeners.
 *
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md */
export const addEventListener = (type: keyof WindowEventMap, listener: EventListener) => {
  document.addEventListener(type, listener, { passive: true });

  const unsubscribe = () => {
    document.removeEventListener(type, listener);
  };

  return unsubscribe;
};
