import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../shared/icons";
import { FlexContainer } from "../../styles/sharedStyles";
import { Input, SearchBarContainer } from "./style";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <FlexContainer>
        <Image src={SearchIcon} alt="" size={32} />
        <Input placeholder="Syringe, Centrifuge, Ventilator" />
      </FlexContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
