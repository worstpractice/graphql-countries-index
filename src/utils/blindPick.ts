import { randomWithin } from "utils/randomWithin"

/** Retrieves unique items at random from any `ArrayLike` in a typesafe manner. */
export const blindPick = <T extends ArrayLike<any>>(arrayLike: T, picks = 1): T[number][] => {
  if (arrayLike.length < picks || picks < 1) {
    throw new RangeError(
      `Cannot make ${picks} unique picks from a collection of only ${arrayLike.length}.`
    )
  }

  let spentIndexes = new Set<number>()
  const pickedItems: T[number][] = []

  while (pickedItems.length < picks) {
    const index = randomWithin(arrayLike.length)

    if (spentIndexes.has(index)) {
      continue
    }

    spentIndexes.add(index)
    pickedItems.push(arrayLike[index])
  }

  return pickedItems
}
