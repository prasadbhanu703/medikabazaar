import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { cardsDetails } from "../../shared/homePage/Components/cardsDetails";
import { Ivoclar, MinusIcon, PlusIcon } from "../../shared/icons";
import { DivText, FlexContainer, Text } from "../../styles/sharedStyles";
import { theme } from "../../styles/theme";
import { ProductContainer, ProductInformation, ProductName } from "./style";

const ProductDetails = () => {
  const router = useRouter();
  console.log("router", router.query.id);
  let itemId = router.query.id ? Number(router.query.id) : 0;

  return (
    <ProductContainer>
      <Image src={cardsDetails[itemId].image} alt="" height={300} width={390} />
      <ProductInformation>
        <ProductName>{cardsDetails[itemId].name}</ProductName>
        <FlexContainer>
          <div>
            <Text color={theme.blue} fw={700} fs="20px">
              {" "}
              {cardsDetails[itemId].price}{" "}
            </Text>
          </div>
          <div>
            <Image src={MinusIcon} alt=""></Image>
            <Text color={theme.blue} padding="0px 20px">
              {" "}
              1{" "}
            </Text>
            <Image src={PlusIcon} alt=""></Image>
          </div>
        </FlexContainer>

        <DivText fw={700} padding="10px">
          {" "}
          Choose Variant{" "}
        </DivText>

        <DivText fw={700} padding="10px" margin="10px" bg="#FAFAFA" br="8px">
          Color : <Text color={theme.blue}> Red </Text>
          Size : <Text color={theme.blue}> XL </Text>
          Intensity : <Text color={theme.blue}> 40 cd </Text>
        </DivText>

        <DivText color={theme.greyText} padding="10px">
          {cardsDetails[itemId].description}
        </DivText>
        <DivText color={theme.greyText} padding="10px">
          {cardsDetails[itemId].description}
        </DivText>
      </ProductInformation>
    </ProductContainer>
  );
};

export default ProductDetails;
