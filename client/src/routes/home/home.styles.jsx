import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  @media (max-width: 668px) {
    flex-direction: column;
    align-items: space-around !important;
  }
`;

const shine = keyframes`
  0% {
    box-shadow: 0 0 10px 0 ${mainColor};
  }
  100% {
    box-shadow: 0 0 20px 0 ${mainColor};
  }
`;

export const HeadLineContainer = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 700px;
  width: 100%;
  border: 2px solid ${mainColor};}
  color: ${mainColor};
  box-shadow: 0 0 10px 0 ${mainColor};
  animation: ${shine} 2s linear 2s infinite alternate;
  margin-bottom: 100px;
  h2,
  p {
    margin: 20px 0;
  }
  img {
    border: 2px solid ${mainColor};
  }
  span {
    padding: 10px;
    font-size: 20px;
    color: #acf9fb;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    a {
      color: inherit;
      text-decoration: none;
      currsor: pointer;
    }
    @media (max-width: 668px) {
      display: block;
    }
  }
  div iframe {
    margin: 20px;
    border: 2px solid ${mainColor};
    border-radius: 50%;
  }
  @media (max-width: 668px) {
    width: 90%;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  
  div {
    @media (max-width: 668px) {
      width: 90%;
      text-align: center;
    }
  }
`;


