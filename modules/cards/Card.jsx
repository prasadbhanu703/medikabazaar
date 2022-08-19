import Image from "next/image";
import React from "react";
import { CardContainer, CardDetails, ItemName, ItemPrice } from "./style";

const Card = (props) => {
  const { cardsDetails } = props;

  return (
    <CardContainer>
      {cardsDetails.map((details, idx) => {
        return (
          <CardDetails key={idx}>
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
