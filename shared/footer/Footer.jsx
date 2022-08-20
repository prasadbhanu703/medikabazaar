import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FlexContainer, PrimaryButton } from "../../styles/sharedStyles";
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
          <Image src={HomeIcon} alt="" onClick={() => router.push("/")}></Image>
          <Image src={ChatIcon} alt=""></Image>
          <Image src={CartIcon} alt=""></Image>
          <Image src={WishListIcon} alt=""></Image>
          <Image src={ProfileIcon} alt=""></Image>
        </GridContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
