import { DetailView } from "components/content/DetailView";
import { TextInput } from "components/content/TextInput";
import { FullScreenModal } from "components/modals/FullScreenModal";
import { Logo } from "components/portraits/Logo";
import { Hero } from "components/sections/Hero";
import { Result } from "components/sections/Result";
import { Search } from "components/sections/Search";
import { FlexContainer } from "components/ui/containers/FlexContainer";
import { GridContainer } from "components/ui/containers/GridContainer";
import { Background } from "components/ui/effects/Background";
import { Header } from "components/ui/structures/Header";
import { Main } from "components/ui/structures/Main";
import { Pillar } from "components/ui/structures/Pillar";
import { useStore } from "hooks/useStore";
import React from "react";
import type { FC } from "typings/FC";
import type { State } from "typings/State";

type Props = {};

const selector = ({ isModalOpen }: State) => {
  return [isModalOpen] as const;
};

export const App: FC<Props> = () => {
  const [isModalOpen] = useStore(selector);

  return (
    <Background>
      <GridContainer>
        <Header>
          <Logo />
        </Header>
        <Pillar size="small" />
        <Main>
          <FlexContainer>
            <Hero />
            <Search>
              <TextInput />
            </Search>
            <Result />
          </FlexContainer>
        </Main>
        <Pillar size="big" />
      </GridContainer>
      {isModalOpen && (
        <FullScreenModal>
          <DetailView />
        </FullScreenModal>
      )}
    </Background>
  );
};
