import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  CartIcon,
  ChatIcon,
  HomeIcon,
  ProfileIcon,
  WishListIcon,
} from "../icons";
import { FooterContainer } from "./style";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterContainer>
      <Image src={HomeIcon} alt="" onClick={() => router.push("/")}></Image>
      <Image src={ChatIcon} alt=""></Image>
      <Image src={CartIcon} alt=""></Image>
      <Image src={WishListIcon} alt=""></Image>
      <Image src={ProfileIcon} alt=""></Image>
    </FooterContainer>
  );
};

export default Footer;
