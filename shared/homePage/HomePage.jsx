import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../modules/cards/Card";
import Category from "../../modules/category/category";
import SearchBar from "../../modules/searchBar/SearchBar";
import { FlexContainer } from "../../styles/sharedStyles";
import { BellIcon, RightArrow } from "../icons";
import { cardsDetails } from "./Components/cardsDetails";
import { categoryOptions } from "./Components/categoryOptions";
import { Heading, HomePageContainer } from "./style";

const HomePage = () => {
  const router = useRouter();

  return (
    <HomePageContainer>
      <FlexContainer>
        <Heading>Explore What Your Hospital Needs</Heading>
        <Image src={BellIcon} alt="" height={60} width={60} />
      </FlexContainer>

      <div onClick={() => router.push("/searchPage")}>
        <SearchBar />
      </div>

      <FlexContainer>
        <Heading>Categories</Heading>
        <div className="seeAllCSS">
          <span>See all</span> <Image src={RightArrow} alt="" size={32} />
        </div>
      </FlexContainer>

      <Category categoryOptions={categoryOptions} />

      <FlexContainer>
        <Heading>Popular</Heading>
        <div className="seeAllCSS">
          See all <Image src={RightArrow} alt="" size={32} />
        </div>
      </FlexContainer>

      <Card cardsDetails={cardsDetails} />
    </HomePageContainer>
  );
};

export default HomePage;
