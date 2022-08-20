import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.div`
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  background: white;

  height: 80px;
  text-align: center;
  border-top: 1px solid grey;

  @media (min-width: 800px) {
    height: auto;
    // padding: 0px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  grid-gap: 30px;
  padding: 10px 20px;
`;

export const ImageContainer = styled.div`
  padding: 10px 15px;
  padding-top:15px;
  background: ${theme.white};
  border: 1px solid ${theme.greyText};
  border-radius: 8px;

  // @media (min-width: 800px) {
  //   margin: 5px 10px ;
  //   padding: 0px;
  // }
`;
