import styled, {keyframes} from "styled-components";

const shine = keyframes`
  0% {
    color: rgb(0, 255, 0, 0.1)
  }
  100% {
    color: rgb(0, 255, 0, 0.5)
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  top: auto;
  margin-top: 50px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-align: center;
  a {
    display: block;
    background-color: green;
    padding: 5px;
    animation: ${shine} 1s;
    margin: 10px;
  }
`;