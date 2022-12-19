import styled, { keyframes } from 'styled-components';

const STAR_COUNT = 300
let starCount = ""

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for(let i = 0; i < STAR_COUNT; i++) {
    starCount += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px rgb(32,178,170, 0.5),`
}

export const BgContainer = styled.div`
background: url(https://i.pinimg.com/originals/f6/de/ab/f6deab221a6537605dbdd96edff034db.jpg) no-repeat;
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