import { Outlet } from 'react-router-dom';
import useSound from 'use-sound';
import { NavContainer, Line, NavSub } from './navigation.styles';
import audio from '../../assets/click_link.mp3';

const Navigation = () => {
  const [soundClick] = useSound(audio, {volume: 0.5}, { interrupt: true });

  return (
    <>
      <NavContainer>
        <NavSub>
          <a href="/"  onClick={soundClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/1534/1534058.png" width="30" alt="galaxy"/>
            <span>SANJA MANDIC</span>
          </a>
          <div>
            <a href= "https://github.com/Sanja969" onClick={soundClick}>GitHub</a>
            <a href= "https://www.linkedin.com/in/sanja-mandic-823995a2/" onClick={soundClick}>LinkedIn</a>
            <a href= "https://twitter.com/SanjaMandic42" onClick={soundClick}>Twitter</a>
            <a href= "" onClick={soundClick}>Blogs</a>
          </div>
        </NavSub>
      </NavContainer>
      <Line><div></div></Line>


      <Outlet />
    </>
  );
}

export default Navigation;