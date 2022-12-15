import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

const spiner = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

export const NavSub = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 0 10px;
    color: ${mainColor};
    font-weight: 700;
    font-size: 30px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    display: flex;

    span {
      padding-left: 15px;
    }
  }

  div {
    display: flex;
    a {
      margin: 0 20px;
      color: #acf9fb;
      text-shadow: 0 0 4px rgba(172,249,251,0.65);
      font-size: 24px;
    }
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
`;

const increase = keyframes`
  0% {
    width: 0
  }

  100% {
    width: 100%;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;

  div {
    border: 2px solid rgba(172,249,251,0.65);
    animation: ${increase} 2s linear;
    width: 100%;
  }
`;

export const SpinerImg = styled.img`
  animation: ${spiner} 2s linear infinite;
  filter: grayscale(50%);
  z-index: 5;
`;
