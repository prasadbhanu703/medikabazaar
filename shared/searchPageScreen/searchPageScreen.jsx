import Image from "next/image";
import React from "react";
import SearchBar from "../../modules/searchBar/SearchBar";
import {
  HeadingType,
  SearchHistory,
  SearchPageContainer,
} from "../../shared/searchPageScreen/style";
import { PreviousSearch } from "../icons";

const SearchPageScreen = () => {
  const prevSearch = ["Surgical tape", "Dialyzer", "Ryles tube"];
  const topSearch = ["Surgical tape", "Dialyzer", "Ryles tube"];
  return (
    <SearchPageContainer>
      <SearchBar />

      <HeadingType>Previous Search</HeadingType>
      {prevSearch.map((data, idx) => {
        return (
          <>
            <SearchHistory key={idx}>
              <Image src={PreviousSearch} alt="" />
              <span> {data} </span>
            </SearchHistory>
          </>
        );
      })}

      <HeadingType>Top Search</HeadingType>
      {topSearch.map((data, idx) => {
        return <SearchHistory key={idx}>{data}</SearchHistory>;
      })}
    </SearchPageContainer>
  );
};

export default SearchPageScreen;
