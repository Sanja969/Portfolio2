import styled from "styled-components";

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

export const BlogContainer = styled.div`

  position: absolute;
  max-width: 1000px;
  width: 90%;
  height: 500px;
  background-color: black;
  top: 200px;
  box-shadow: 0 0 10px 10px ${transColor};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px;
  text-align: justify;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 166, 0, 0);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${mainColor};
    border-radius: 20px;
  }

  button {
    margin-left: calc(100% - 15px);
    border: none;
    background-color: inherit;
    font-size: 30px;
    text-align: right;
    transform: translateX(-50%);
    margin-bottom: 20px;
  }

  h2 {
    text-align: center;
  }

  @media (max-width: 1020px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    } 
  }
`