import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SearchBarContainer = styled.div`
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid ${theme.inputBorder};
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 10px;
  border: none;
  outline: none;
  color: ${theme.black};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  caret-color: ${theme.black};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${theme.placeHolderColor};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.placeHolderColor};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${theme.placeHolderColor};
  }
`;
