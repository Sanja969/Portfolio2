import styled, { keyframes } from 'styled-components';
import bg from '../../assets/bg.jpg'

const STAR_COUNT = 300
let starCount = ""

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for(let i = 0; i < STAR_COUNT; i++) {
    starCount += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px rgb(208, 165, 243, 0.5),`
}

export const BgContainer = styled.div`
background: url(${bg}) no-repeat;
background-size: cover;
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: -3;

&:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0.7;
}
`
const zoom = keyframes`
  from {
    transform: scale(1);
    display: block;
  }
  to {
    transform: scale(5.6);
    display: none;
  }
`

export const BgMet = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 100%;
  animation: ${zoom} 70s infinite;
  box-shadow: ${starCount.slice(0, -1)};
`;

// 