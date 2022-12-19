import styled, { keyframes } from 'styled-components';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

export const CreateQuoteContainer = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    
    input,
    textarea {
      margin: 10px 0;
      width: 100%;
      height: 30px;
      border: none;
      background-color: ${transColor};
      text-align: center;
      color: orange;

      &::placeholder {
        color: orange;
        font-size: 15px;
      }
    }
    button {
      margin: 20px;
      font-size: 20px;
      background-color: ${transColor2};
      border: 2px solid ${mainColor};
      padding: 5px 10px;
    }
  }
`;