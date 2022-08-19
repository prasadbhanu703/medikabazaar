import Image from "next/image";
import React from "react";
import { Equipment } from "../../shared/icons";
import { FlexContainer } from "../../styles/sharedStyles";
import { CategoryContainer, CategoryItem } from "./style";

const Category = (props) => {
  const { categoryOptions } = props;
  console.log(categoryOptions, categoryOptions);
  return (
    <CategoryContainer>
      {categoryOptions.map((option, idx) => {
        return (
          <CategoryItem key={idx}>
            <FlexContainer>
              <span>{option.name}</span>
              <Image src={option.image} alt="" height={40} width={40} />
            </FlexContainer>
          </CategoryItem>
        );
      })}
    </CategoryContainer>
  );
};

export default Category;
