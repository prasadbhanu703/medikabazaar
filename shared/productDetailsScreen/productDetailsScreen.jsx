import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { cardsDetails } from "../../shared/homePage/Components/cardsDetails";
import {
  BackIcon,
  Ivoclar,
  MinusIcon,
  PlusIcon,
  ShareIcon,
} from "../../shared/icons";
import {
  PrimaryText,
  FlexContainer,
  SecondaryButton,
  Text,
} from "../../styles/sharedStyles";
import { theme } from "../../styles/theme";
import {
  Container,
  ProductContainer,
  ProductInformation,
  ProductName,
  TopIconsCSS,
} from "../../shared/productDetailsScreen/style";
import Reviews from "../../modules/reviewComponent/Review";
import VariantModal from "../../modules/variantModal/VariantModal";

const ProductDetailsScreen = () => {
  const [showVariant, setShowVariant] = useState(false);
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("XXL");
  const [intensity, setIntensity] = useState("40 cd");
  const router = useRouter();
  console.log("router", router.query.id);
  let itemId = router?.query.id ? Number(router?.query.id) : 0;

  const colors = ["Red", "Blue", "White"];
  const sizes = ["XXL", "XL", "L"];
  const intensities = ["40 cd", "20 cd", "10 cd"];

  return (
    <Container>
      <ProductContainer variant={showVariant}>
        <Image
          src={cardsDetails[itemId].image}
          alt=""
          height={300}
          width={390}
        />
        <TopIconsCSS>
          <FlexContainer>
            <Text cursor="pointer">
              <Image
                src={BackIcon}
                cursor="pointer"
                alt=""
                onClick={() => router.back()}
              />
            </Text>
            <Image src={ShareIcon} cursor="pointer" alt="" />
          </FlexContainer>
        </TopIconsCSS>

        <ProductInformation>
          <ProductName>{cardsDetails[itemId].name}</ProductName>
          <FlexContainer>
            <div>
              <Text color={theme.blue} fw={700} fs="20px">
                {cardsDetails[itemId].price}
              </Text>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
              }}
            >
              <Image src={MinusIcon} alt="" />
              <Text padding="0px 20px">1</Text>
              <Image src={PlusIcon} alt="" />
            </div>
          </FlexContainer>

          <PrimaryText fw={700} padding="10px">
            Choose Variant
          </PrimaryText>

          <PrimaryText
            fw={700}
            padding="10px"
            margin="5px"
            br="8px"
            bg={theme.reviewsBackground}
          >
            Color :
            <Text
              color={theme.blue}
              onClick={() => setShowVariant(true)}
              padding="0px 5px"
              cursor="pointer"
            >
              {color}
            </Text>
            Size :
            <Text
              color={theme.blue}
              onClick={() => setShowVariant(true)}
              padding="0px 5px"
              cursor="pointer"
            >
              {size}
            </Text>
            Intensity :
            <Text
              color={theme.blue}
              onClick={() => setShowVariant(true)}
              padding="0px 5px"
              cursor="pointer"
            >
              {intensity}
            </Text>
          </PrimaryText>
          <FlexContainer jc="flex-start">
            <SecondaryButton>Description</SecondaryButton>
            <PrimaryText fw={700} color={theme.greyText} padding="10px">
              Materials
            </PrimaryText>
          </FlexContainer>
          <PrimaryText color={theme.greyText} padding="10px">
            {cardsDetails[itemId].description}
          </PrimaryText>
          <PrimaryText color={theme.greyText} padding="10px">
            {cardsDetails[itemId].description}
          </PrimaryText>

          <PrimaryText color={theme.greyText} padding="10px">
            {cardsDetails[itemId].description}
          </PrimaryText>

          <Reviews />
        </ProductInformation>
      </ProductContainer>
      {showVariant && (
        <VariantModal
          colors={colors}
          sizes={sizes}
          intensities={intensities}
          setColor={setColor}
          setSize={setSize}
          setIntensity={setIntensity}
          color={color}
          size={size}
          intensity={intensity}
          show={showVariant}
          toggle={setShowVariant}
        />
      )}
    </Container>
  );
};

export default ProductDetailsScreen;
