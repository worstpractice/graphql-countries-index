import type { State } from "typings/State";
import create from "zustand";
import { combine } from "zustand/middleware";

export const useStore = create<State>(
  combine(
    {
      isModalOpen: false,
      searchTerm: "",
      selectedCountry: "",
    },

    (set) =>
      ({
        closeModal() {
          set(() => ({ isModalOpen: false }));
        },
        openModal() {
          set(() => ({ isModalOpen: true }));
        },
        setSearchTerm(to: string) {
          set(() => ({ searchTerm: to }));
        },
        setSelectedCountry(to: string) {
          set(() => ({ selectedCountry: to }));
        },
        toggleModal() {
          set((state) => ({ isModalOpen: !state.isModalOpen }));
        },
      } as const),
  ),
);
