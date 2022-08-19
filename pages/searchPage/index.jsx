import Image from "next/image";
import React from "react";
import SearchBar from "../../modules/searchBar/SearchBar";
import { PreviousSearch } from "../../shared/icons";
import { HeadingType, SearchHistory, SearchPageContainer } from "./style";

const SearchPage = () => {
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

export default SearchPage;
