import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mainColor ='#30fffe';
const transColor = '#30fffe40';
const transColor2 = '#30fffe20';

export const NavLink = styled(Link)`
  padding: 20px;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, ${transColor} 20%, ${transColor2} 50%);
  padding: 10px 20px;
  margin: 12px;
  text-align: center;
  overflow: hidden;
  color: ${mainColor};
  border: 2px solid ${mainColor};
  box-shadow: 0 0 10px 0 ${mainColor};
  font-size: 15px;
  text-align: center;
  dispaly: flex;
  justify-content: center;
  &:hover {
    background: ${transColor};
  }

  `;

