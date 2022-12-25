import useSound from 'use-sound';
import { NavLink } from './link.styles';
import audio from '../../assets/click_link.mp3';

const StarLink = ({ text, url }) => {
  const [soundClick] = useSound(audio, {volume: 0.5})
  return (
  <NavLink onClick={soundClick} href={url} >
    {text}
  </NavLink>

  );
}

export default StarLink;