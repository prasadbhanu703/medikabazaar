import styled from "styled-components";

export const SearchPageContainer = styled.div`
  padding: 50px 20px;
  line-height: 20px;
  font-style: normal;
  color: #121212;
  text-align: left;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const HeadingType = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding: 20px 0px;
`;

export const SearchHistory = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 5px 0px;

  span {
    padding: 0px 5px;
  }
`;
