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
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 0 10px;
    color: ${mainColor};
    font-weight: 700;
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 5px;
      margin-left: 10px;
      background: red;
      border: none;
    }

    @media (max-width: 1020px) {
      font-size: 20px;
    }

    span {
      padding-left: 15px;

      @media (max-width: 1020px) {
        padding-left: 8px;
      }
    }
  }

`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
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
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 5;
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
  width: 30px;
  height: 30px;

  @media (max-width: 1020px) {
    width: 24px;
    height: 24px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
    a {
      margin: 0 20px;
      color: #acf9fb;
      text-shadow: 0 0 4px rgba(172,249,251,0.65);
      font-size: 20px;
    }
    @media (max-width: 1020px) {
      display: none !important;
    }
`;

export const HamburgerContainer = styled.button`
    display: none !important;
    @media (max-width: 1020px) {
      display: flex !important;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      border: none;
      background-color: inherit;
      img {
        border-radius: 5px;
        width: 40px;
        height: 40px;
      }
    }
`;