import styled from "styled-components";
import { theme } from "./theme";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-size: ${(props) => (props.fs ? props.fs : "")};
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : theme.black)};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;

export const DivText = styled.div`
  font-style: normal;
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-size: ${(props) => (props.fs ? props.fs : "")};
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : theme.black)};
  padding: ${(props) => (props.padding ? props.padding : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.br ? props.br : "")};
`;
