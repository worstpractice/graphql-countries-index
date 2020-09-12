import { Hero } from "components/sections/Hero";
import { Result } from "components/sections/Result";
import { Search } from "components/sections/Search";
import { DetailView } from "components/content/DetailView";
import { TextInput } from "components/content/TextInput";
import { FullScreenModal } from "components/modals/FullScreenModal";
import { Logo } from "components/portraits/Logo";
import { FlexContainer } from "components/ui/containers/FlexContainer";
import { GridContainer } from "components/ui/containers/GridContainer";
import { Background } from "components/ui/effects/Background";
import { Header } from "components/ui/structures/Header";
import { Main } from "components/ui/structures/Main";
import { Pillar } from "components/ui/structures/Pillar";
import { useToggle } from "hooks/useToggle";
import React, { ChangeEventHandler, useState } from "react";
import type { FC } from "typings/FC";
import type { Country } from "typings/generated";

type Props = {};

export const App: FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country["code"]>("");
  const [isModalOpen, openModal, closeModal] = useToggle();

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const searchInput = target.value.trim();

    if (!searchInput) {
      return setSearchTerm("");
    }

    if (searchInput.length < 30) {
      setSearchTerm(searchInput.toLowerCase());
    }
  };

  const handleCardClick = (countryCode: Country["code"]) => {
    setSelectedCountry(countryCode);
    openModal();
  };

  return (
    <Background>
      <GridContainer>
        <Header>
          <Logo />
        </Header>
        <Pillar size="small" />
        <Main>
          <FlexContainer>
            <Hero subtitle="Sit Dolor" title={"Lorem Ipsum"} />
            <Search>
              <TextInput onChange={handleSearchInput} placeholder="Search for a country" value={searchTerm} />
            </Search>
            <Result searchString={searchTerm} onClick={handleCardClick} />
          </FlexContainer>
        </Main>
        <Pillar size="big" />
      </GridContainer>
      {isModalOpen && (
        <FullScreenModal>
          <DetailView countryCode={selectedCountry} onClickOutside={closeModal} />
        </FullScreenModal>
      )}
    </Background>
  );
};
