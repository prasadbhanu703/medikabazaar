import React from "react";
import { ArrowToggle } from "../../shared/icons";
import {
  CircularColor,
  FlexContainer,
  PrimaryText,
  Text,
} from "../../styles/sharedStyles";
import { VariantButton, VariantContainer } from "./style";
import Image from "next/image";
import { theme } from "../../styles/theme";
import { CategoryContainer } from "../category/style";

const VariantModal = (props) => {
  const {
    colors,
    sizes,
    intensities,
    setColor,
    setSize,
    setIntensity,
    color,
    size,
    intensity,
  } = props;

  return (
    <VariantContainer>
      <PrimaryText fw={700} fs="18px">
        Select variant
      </PrimaryText>

      <FlexContainer padding="20px 0px">
        <PrimaryText fw={600}>
          Colour:
          <Text color={theme.blue} padding="0px 10px">
            {color}
          </Text>
        </PrimaryText>

        <PrimaryText fw={500}>
          <Text color={theme.blue}>( {colors.length} options availab)</Text>
          <span style={{ padding: "10px" }}>
            <Image src={ArrowToggle} alt="" />
          </span>
        </PrimaryText>
      </FlexContainer>

      <CategoryContainer>
        {colors.map((item, idx) => {
          return (
            <VariantButton
              key={idx}
              selected={item === color}
              onClick={() => setColor(item)}
              fw={400}
            >
              <CircularColor
                color={item.toLowerCase()}
                border={item.toLowerCase() === "white" ? "1px solid black" : ""}
              ></CircularColor>{" "}
              <Text padding="10px 5px">{item}</Text>
            </VariantButton>
          );
        })}
      </CategoryContainer>

      <FlexContainer padding="20px 0px">
        <PrimaryText fw={600}>
          Size:
          <Text color={theme.blue} padding="0px 10px">
            {size}
          </Text>
        </PrimaryText>

        <PrimaryText fw={500}>
          <Text color={theme.blue}>({sizes.length} options availab)</Text>
          <span style={{ padding: "10px" }}>
            <Image src={ArrowToggle} alt="" />
          </span>
        </PrimaryText>
      </FlexContainer>

      <CategoryContainer>
        {sizes.map((item, idx) => {
          return (
            <VariantButton
              key={idx}
              selected={item === size}
              onClick={() => setSize(item)}
            >
              {item}
            </VariantButton>
          );
        })}
      </CategoryContainer>

      <FlexContainer padding="20px 0px">
        <PrimaryText fw={600}>
          Intensity:
          <Text color={theme.blue} padding="0px 10px">
            {intensity}
          </Text>
        </PrimaryText>

        <PrimaryText fw={500}>
          <Text color={theme.blue}>({intensities.length} options availab)</Text>
          <span style={{ padding: "10px" }}>
            <Image src={ArrowToggle} alt="" />
          </span>
        </PrimaryText>
      </FlexContainer>

      <CategoryContainer>
        {intensities.map((item, idx) => {
          return (
            <VariantButton
              key={idx}
              selected={item === intensity}
              onClick={() => setIntensity(item)}
            >
              {item}
            </VariantButton>
          );
        })}
      </CategoryContainer>
    </VariantContainer>
  );
};

export default VariantModal;
