export type State = {
  closeModal: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  searchTerm: string;
  selectedCountry: string;
  setSearchTerm: (to: string) => void;
  setSelectedCountry: (to: string) => void;
  toggleModal: () => void;
};
