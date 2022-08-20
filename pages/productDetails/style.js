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

  //slide in-out css
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);

  //Slide-in-css

  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;

  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }

  //slide-out-css
  // animation: slide-out 0.5s forwards;
  // -webkit-animation: slide-out 0.5s forwards;

  // @keyframes slide-out {
  //   0% {
  //     transform: translateX(0%);
  //   }
  //   100% {
  //     transform: translateX(-100%);
  //   }
  // }

  // @-webkit-keyframes slide-out {
  //   0% {
  //     -webkit-transform: translateX(0%);
  //   }
  //   100% {
  //     -webkit-transform: translateX(-100%);
  //   }
  // }
  
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
  position: absolute;
  top: 20px;
  width: 100%;
  padding: 10px;
`;
