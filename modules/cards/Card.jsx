import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CardContainer, CardDetails, ItemName, ItemPrice } from "./style";

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
            <Image src={details.image} alt="" />
            <ItemName>{details.name}</ItemName>
            <ItemPrice>{details.price}</ItemPrice>
          </CardDetails>
        );
      })}
    </CardContainer>
  );
};

export default Card;
