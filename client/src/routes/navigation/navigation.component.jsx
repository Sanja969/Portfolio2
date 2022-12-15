import { Outlet } from 'react-router-dom';
import useSound from 'use-sound';
import { NavContainer, Line, NavSub, SpinerImg } from './navigation.styles';
import audio from '../../assets/click_link.mp3';

const Navigation = () => {
  const [soundClick] = useSound(audio, {volume: 0.5}, { interrupt: true });

  return (
    <>
      <NavContainer>
        <NavSub>
          <a href="/"  onClick={soundClick}>
            <SpinerImg src="https://icons.iconarchive.com/icons/turbomilk/space-invaders/256/blackhole-icon.png" width="30" height="30" alt="galaxy"/>
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