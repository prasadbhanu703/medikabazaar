import styled from "styled-components";
import { theme } from "../../styles/theme";

export const VariantBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100000000;
  bottom: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.6);
`;
export const VariantContainer = styled.div`
  background: ${theme.white};
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  height: 50%;
  width: 100%;
  z-index: 100000000;
  text-align: left;
  padding: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @keyframes swatch-red-motion {
    .transform(0deg, 65deg);
  }
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
