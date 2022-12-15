import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

// const shine2 = keyframes`
//   0% {
//     box-shadow: 0 0 15px 0 ${mainColor};
//   }
//   100% {
//     box-shadow: 0 0 20px 0 ${mainColor};
//   }
// `;

const move = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  animation: ${move} 2s linear;

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
  grid-template-columns: auto auto;
`;

export const ProjectContainer = styled.div`
  background-color: ${transColor2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${mainColor};

  h3 {
    font-size: 26px;
    text-shadow: 0 0 4px rgba(172,249,251,0.65);
  }

  div {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child {
      height: 100px;
      border-bottom: 2px solid ${mainColor};

      img:hover {
        width: 70px;
      }
    }
    &:nth-child(2) {
      text-align: center;
      height: 380px;
      border-bottom: 2px solid ${mainColor};
      flex-direction: column;

      img {
        height: 200px;
        width: auto;
        max-width: 300px;
        border-radius: 50%;
      }
      p {
        height: 50px:
        overflow: hidden;
        text-shadow: 0 0 4px rgba(172,249,251,0.65);

        &:nth-child(2) {
          font-size: 15px;
          color: orange;
        }
        
        &:last-child {
          font-weight: bold;
        }
      }
    }
  }
`;
