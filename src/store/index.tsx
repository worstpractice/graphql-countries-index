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
    } as const,

    (set) =>
      ({
        closeModal() {
          set(() => ({ isModalOpen: false } as const));
        },
        openModal() {
          set(() => ({ isModalOpen: true } as const));
        },
        setSearchTerm(to: string) {
          set(() => ({ searchTerm: to } as const));
        },
        setSelectedCountry(to: string) {
          set(() => ({ selectedCountry: to } as const));
        },
        toggleModal() {
          set(({ isModalOpen }) => ({ isModalOpen: !isModalOpen } as const));
        },
      } as const),
  ),
);
