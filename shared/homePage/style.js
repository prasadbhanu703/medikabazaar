import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HomePageContainer = styled.div`
  padding: 50px 20px;
  text-align: left;

  .seeAllCSS {
    padding-top: 28px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    text-align: right;
    color: ${theme.blue};
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  /* or 34px */

  color: #121212;
`;
