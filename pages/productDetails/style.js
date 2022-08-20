import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductContainer = styled.div`
  filter: ${(props) => (props.variant ? "blur(5px)" : "")};

  line-height: 20px;
  font-style: normal;
  color: #121212;
  text-align: left;
  overflow: ${(props) => (props.variant ? "hidden" : "scroll")};
  padding-bottom: 80px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const ProductInformation = styled.div`
  box-shadow: 0px -4px 0px ${theme.boxShadow};
  border-radius: 20px 20px 0px 0px;
  padding: 10px 20px;
`;

export const ProductName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #121212;
`;

export const TopIconsCSS = styled.div`
  position: fixed;
  top: 10px;
  width: 100%;
  padding: 10px;
`;
