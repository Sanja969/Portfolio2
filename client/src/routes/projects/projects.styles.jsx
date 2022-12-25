import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

const move = keyframes`
  0% {
    margin-top: 2000px;
  }
  100% {
    margin-top: 150px;
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  animation: ${move} 2s linear;
  z-index: 0;

  h2 {
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
    margin-bottom: 30px;
  }
`;

export const ProjectSubContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3,
  a {
    @media (max-width: 1020px) {
      font-size: 16px !important;
    }
  }
`;

export const ProjectContainer = styled.div`
  max-width: 490px !important;
  width: 100%;
  background-color: ${transColor2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${mainColor};
  @media (max-width: 1020px) {
    width: 90%;
  }

  h3 {
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
  }
`;

export const ImageContainer = styled.div`
  height: 200px !important;
  width: 100%;
  max-width: 300px;
  // border-radius: 50%;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
  border: none !important;
  background-color: black;
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child {
      padding: 20px;
      height: 70px;
      border-bottom: 2px solid ${mainColor};
      h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a,
        button {
          margin-left: 10px;
          padding: 5px !important;
          border: none;
          background-color: rgba(0, 255, 0, 0.5);
          cursor: pointer;
          font-size: 14px;
          height: 27px;
        }

        button {
          background-color: red;
        }
      }
    }
    &:nth-child(2) {
      padding: 0;
      text-align: center;
      height: 340px;
      border-bottom: 1px solid ${mainColor};
      flex-direction: column;

      p {
        padding: 0 20px;
        height: 50px:
        overflow: hidden;
        text-shadow: 0 0 4px rgba(172,249,251,0.65);

        &:nth-child(2) {
          font-size: 15px;
          color: rgb(208, 165, 243);
        }
        
        &:last-child {
          font-weight: bold;
          padding-bottom: 20px;
          @media (max-width: 1020px) {
            font-size: 16px;
            text-shadow: 0 0 2px rgba(172,249,251,0.65);
          }
        }
      }
    }
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: black;
      opacity: 0.7;
      padding: 0;
    }
`;