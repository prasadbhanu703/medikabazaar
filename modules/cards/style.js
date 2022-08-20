import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: 500px;
  cursor: pointer;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, auto);
  }
`;

export const CardDetails = styled.div`
  background: ${theme.white};
  box-shadow: 2px 4px 4px ${theme.boxShadow};
  border-radius: 8px;
  margin: 10px;
  :hover {
    box-shadow: 4px 4px 8px 8px rgba(112, 135, 216, 0.26);
  }
`;

export const ItemName = styled.div`
  color: ${theme.greyText};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height */
  padding: 5px;
`;

export const ItemPrice = styled.div`
  color: ${theme.black};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding: 5px;
`;

export const WishListIconCSS = styled.div`
  position: relative;
  top: 30px;
  left: 70%;
  height: 32px;
  width: 32px;
  padding: 5px;
  z-index: 100;
  // border: 2px solid black;
  border-radius: 200px;
  box-shadow: 1px 1px 2px 2px ${theme.boxShadow};
`;
