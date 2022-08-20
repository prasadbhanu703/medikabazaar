import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  cursor: pointer;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CategoryItem = styled.div`
  background: #ffffff;
  border: 1px solid #cedcff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  max-height: 100px;
  min-width: 200px;
  span {
    padding-top: 10px;
  }
`;
