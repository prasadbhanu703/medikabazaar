import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { WishListIcon } from "../../shared/icons";
import { Text } from "../../styles/sharedStyles";
import { theme } from "../../styles/theme";
import {
  CardContainer,
  CardDetails,
  ItemName,
  ItemPrice,
  WishListIconCSS,
} from "./style";

const Card = (props) => {
  const { cardsDetails } = props;
  const router = useRouter();

  return (
    <CardContainer>
      {cardsDetails.map((details, idx) => {
        return (
          <CardDetails
            key={idx}
            onClick={() => router.push("/productDetails?id=" + idx)}
          >
            <WishListIconCSS>
              <Image src={WishListIcon} alt="" />
            </WishListIconCSS>
            <Image src={details.image} alt="" />
            <ItemName>{details.name}</ItemName>
            <Text
              fw={700}
              color={details.priceDrop ? theme.greyText : theme.black}
              td={details.priceDrop ? "line-through" : ""}
              padding="0px 5px"
            >
              {details.price}
            </Text>
            <Text fw={700} color={theme.red}>
              {details.priceDrop}
            </Text>
          </CardDetails>
        );
      })}
    </CardContainer>
  );
};

export default Card;
