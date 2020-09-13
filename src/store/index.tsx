import create from "zustand";
import { combine } from "zustand/middleware";

type Data = {
  isModalOpen: boolean;
  searchTerm: string;
  selectedCountry: string;
};

type Actions = {
  closeModal: () => void;
  openModal: () => void;
  setSearchTerm: (to: string) => void;
  setSelectedCountry: (to: string) => void;
  toggleModal: () => void;
};

export type State = Data & Actions;

export const useStore = create<State>(
  combine<Data, Actions>(
    {
      isModalOpen: false,
      searchTerm: "",
      selectedCountry: "",
    },

    (set) => ({
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
    }),
  ),
);
