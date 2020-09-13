/** Retrieves unique items at random from any `ArrayLike` in a typesafe manner. */
export const blindPick = <T extends ArrayLike<any>>(arrayLike: T, items = 1): T[number][] => {
  if (arrayLike.length < items || items < 1) {
    throw new RangeError(`Cannot make ${items} unique picks from a collection of only ${arrayLike.length}.`);
  }

  let spentIndexes = new Set<number>();
  const picks = [];

  while (picks.length < items) {
    const index = Math.floor(Math.random() * arrayLike.length);

    if (spentIndexes.has(index)) {
      continue;
    }

    spentIndexes.add(index);
    picks.push(arrayLike[index]);
  }

  return picks;
};
