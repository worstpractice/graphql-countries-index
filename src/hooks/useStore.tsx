import create from "zustand";
import { combine } from "zustand/middleware";

export const useStore = create(
  combine(
    { searchTerm: "", selectedCountry: "", isModalOpen: false },

    (set) => ({
      setSearchTerm(to: string) {
        set(() => ({ searchTerm: to }));
      },

      setSelectedCountry(to: string) {
        set(() => ({ selectedCountry: to }));
      },

      openModal() {
        set(() => ({ isModalOpen: true }));
      },
      closeModal() {
        set(() => ({ isModalOpen: false }));
      },
      toggleModal() {
        set((state) => ({ isModalOpen: !state.isModalOpen }));
      },
    }),
  ),
);
