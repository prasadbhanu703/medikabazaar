import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  grid-gap: 30px;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  background: white;

  height: 80px;
  text-align: center;
  border-top: 1px solid grey;
`;
