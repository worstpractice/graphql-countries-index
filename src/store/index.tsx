import create from "zustand";
import { combine } from "zustand/middleware";

type Data = {
  isDetailViewing: string;
  searchTerm: string;
};

type Actions = {
  setSearchTerm: (to: string) => void;
  openDetailViewTo: (to: string) => void;
};

export type State = Data & Actions;

export const useStore = create<State>(
  combine<Data, Actions>(
    {
      isDetailViewing: "",
      searchTerm: "",
    } as const,

    (set) =>
      ({
        setSearchTerm(to: string) {
          set(() => ({ searchTerm: to } as const));
        },
        openDetailViewTo(to: string) {
          set(() => ({ isDetailViewing: to } as const));
        },
      } as const),
  ),
);
