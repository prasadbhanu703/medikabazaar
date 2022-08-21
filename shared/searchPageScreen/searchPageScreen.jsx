import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "../../modules/searchBar/SearchBar";
import {
  HeadingType,
  SearchHistory,
  SearchPageContainer,
} from "../../shared/searchPageScreen/style";
import { Text } from "../../styles/sharedStyles";
import { PreviousSearch } from "../icons";

const SearchPageScreen = () => {
  const [input, setInput] = useState("");

  const prevSearch = ["Surgical tape", "Dialyzer", "Ryles tube", "Consumables"];
  const topSearch = [
    "Equipments",
    "Consumables",
    "Ivoclar Vivadent",
    "Dialyzer",
  ];
  const [filteredPrev, setFilteredPrev] = useState(prevSearch);
  const [filteredTop, setFilteredTop] = useState(topSearch);
  useEffect(() => {
    setFilteredPrev(
      prevSearch.filter((items) =>
        items.toLowerCase().includes(input.toLowerCase())
      )
    );

    setFilteredTop(
      topSearch.filter((items) =>
        items.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  return (
    <SearchPageContainer>
      <SearchBar input={input} setInput={setInput} />

      <HeadingType>Previous Search</HeadingType>
      {filteredPrev.length > 0 ? (
        filteredPrev.map((data, idx) => {
          return (
            <>
              <SearchHistory key={idx}>
                <Image src={PreviousSearch} alt="" />
                <span> {data} </span>
              </SearchHistory>
            </>
          );
        })
      ) : (
        <Text> No Data Found </Text>
      )}

      <HeadingType>Top Search</HeadingType>
      {filteredTop.length > 0 ? (
        filteredTop.map((data, idx) => {
          return <SearchHistory key={idx}>{data}</SearchHistory>;
        })
      ) : (
        <Text> No Data Found </Text>
      )}
    </SearchPageContainer>
  );
};

export default SearchPageScreen;
