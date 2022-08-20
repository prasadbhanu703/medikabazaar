import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FlexContainer, PrimaryButton, Text } from "../../styles/sharedStyles";
import {
  CartIcon,
  ChatIcon,
  HomeIcon,
  ProfileIcon,
  WishListIcon,
} from "../icons";
import { FooterContainer, GridContainer, ImageContainer } from "./style";

const Footer = () => {
  const [addToBag, setAddToBAg] = useState(false);
  const router = useRouter();
  let itemId = router.query.id;
  return (
    <FooterContainer>
      {itemId ? (
        <FlexContainer>
          <ImageContainer>
            <Image src={WishListIcon} alt="" />
          </ImageContainer>
          <PrimaryButton
            width="100%"
            onClick={() => setAddToBAg(!addToBag)}
            opacity={addToBag ? "0.5" : "1"}
          >
            {/* {addToBag && <Image src={CartIcon} alt="" />} */}
            {addToBag ? "Added to bag" : "Add to bag"}
          </PrimaryButton>
        </FlexContainer>
      ) : (
        <GridContainer>
          <Text cursor="pointer">
            <Image src={HomeIcon} alt="" onClick={() => router.push("/")} />
          </Text>
          <Text cursor="pointer">
            <Image src={ChatIcon} alt="" />
          </Text>
          <Text cursor="pointer">
            <Image src={CartIcon} alt="" />
          </Text>
          <Text cursor="pointer">
            <Image src={WishListIcon} alt="" />
          </Text>
          <Text cursor="pointer">
            <Image src={ProfileIcon} alt="" />
          </Text>
        </GridContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
