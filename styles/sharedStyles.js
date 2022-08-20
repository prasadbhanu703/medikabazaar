import styled from "styled-components";
import { theme } from "./theme";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.jc ? props.jc : "space-between")};
  padding: ${(props) => (props.padding ? props.padding : "")};
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-size: ${(props) => (props.fs ? props.fs : "")};
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : theme.black)};
  padding: ${(props) => (props.padding ? props.padding : "")};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};
  position: ${(props) => (props.position ? props.position : "")};
  left: ${(props) => (props.left ? props.left : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")}; ;
`;

export const PrimaryText = styled.div`
  font-style: normal;
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-size: ${(props) => (props.fs ? props.fs : "")};
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : theme.black)};
  padding: ${(props) => (props.padding ? props.padding : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.br ? props.br : "")};
`;

export const PrimaryButton = styled.button`
  width: ${(props) => (props.width ? props.width : "")};
  border: none;
  margin: 0px 10px;
  padding: 10px;
  background: ${theme.primaryButtonBackground};
  border-radius: 8px;
  color: ${theme.white};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  opacity: ${(props) => (props.opacity ? props.opacity : "")};
  @media (min-width: 800px) {
    // padding: 5px;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  margin: 0px 10px;
  padding: 10px 10px;
  background: ${theme.secondaryButtonBackground};
  border-radius: 8px;
  color: ${theme.blue};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

export const CircularColor = styled.span`
  height: 16px;
  width: 16px;
  background-color: ${(props) => (props.color ? props.color : theme.white)};
  border-radius: 50%;
  display: inline-block;
  border: ${(props) => (props.border ? props.border : "")};
  margin-top: 10px;
`;
