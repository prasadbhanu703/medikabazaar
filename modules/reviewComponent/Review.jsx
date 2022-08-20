import React, { startTransition, useEffect, useMemo, useState } from "react";
import { FlexContainer, PrimaryText, Text } from "../../styles/sharedStyles";
import { ReviewContainer } from "./style";
import Image from "next/image";
import {
  GreyStar,
  ProfileFour,
  ProfileOne,
  ProfileThree,
  ProfileTwo,
  YellowStar,
} from "../../shared/icons";
import { theme } from "../../styles/theme";

const Reviews = () => {
  const [starsCount, setStarsCount] = useState(0);
  const [ratingStars, setRatingStars] = useState([]);

  const ratingFun = (starsCount) => {
    setRatingStars([]);
    for (let i = 0; i < 5; i++) {
      if (i <= starsCount) {
        setRatingStars((items) => [...items, YellowStar]);
      } else {
        setRatingStars((items) => [...items, GreyStar]);
      }
    }
  };

  useMemo(() => ratingFun(starsCount), [starsCount]);

  return (
    <ReviewContainer>
      <FlexContainer>
        <PrimaryText padding="10px">
          {ratingStars.length > 0
            ? ratingStars.map((star, idx) => {
                return (
                  <Image
                    src={star}
                    alt=""
                    key={idx}
                    onClick={() => setStarsCount(idx)}
                  />
                );
              })
            : ""}
          <Text padding="0px 5px">{starsCount + 1}</Text>
          <PrimaryText color={theme.greyText}>98 Reviews</PrimaryText>
        </PrimaryText>
        <PrimaryText pt="20px">
          <Image src={ProfileOne} alt="" />
          <Text position="relative" left="-10px">
            <Image src={ProfileTwo} alt="" />
          </Text>
          <Text position="relative" left="-20px">
            <Image src={ProfileThree} alt="" />
          </Text>
          <Text position="relative" left="-30px">
            <Image src={ProfileFour} alt="" />
          </Text>
        </PrimaryText>
      </FlexContainer>
    </ReviewContainer>
  );
};

export default Reviews;
