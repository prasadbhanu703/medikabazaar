import styled from "styled-components";
import { theme } from "../../styles/theme";

export const VariantContainer = styled.div`
  background: ${theme.white};
  border-radius: 20px;
  position: fixed;
  bottom: 0;
  height: 50%;
  width: 100%;
  z-index: 100000000;
  text-align: left;
  padding: 20px;
  //   border-top: 1px solid black;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

`;

export const VariantButton = styled.button`
  background: ${theme.white};
  color: ${(props) => (props.selected ? theme.blue : theme.black)};
  border: 1px solid ${(props) => (props.selected ? theme.blue : "#EBEBEB")};
  border-radius: 4px;
  padding: 10px 20px;
  font-style: normal;
  font-weight: ${(props) => (props.fw ? props.fw : "700")};
  font-size: 12px;
  line-height: 150%;
`;
