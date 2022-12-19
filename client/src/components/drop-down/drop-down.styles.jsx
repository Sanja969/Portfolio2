import styled from "styled-components";

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

export const DropdownContainer = styled.footer`
  position: absolute;
  width: 200px;
  height: auto;
  right: 0;
  top:0;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  box-shadow: 0 0 10px ${mainColor};
  gap: 15px;
  @media (min-width: 1020px) {
    display: none !important;
  }
  a {
    text-shadow: 0 0 5px ${mainColor};
    color: #acf9fb;
  }
  button {
    background-color: inherit;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }
`;