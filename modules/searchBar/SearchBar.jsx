import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../shared/icons";
import { FlexContainer } from "../../styles/sharedStyles";
import { Input, SearchBarContainer } from "./style";

const SearchBar = (props) => {
  const { input, setInput } = props;

  return (
    <SearchBarContainer>
      <FlexContainer>
        <Image src={SearchIcon} alt="" size={32} />
        <Input
          placeholder="Syringe, Centrifuge, Ventilator"
          value={input}
          onChange={(evt) => {
            setInput(evt.target.value);
          }}
        />
      </FlexContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
