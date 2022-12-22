import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { triggerMenu } from '../../redux/dropdown/dropdown';
import { NavContainer, Line, NavSub, SpinerImg, NavLinks, HamburgerContainer } from './navigation.styles';
import theme from '../../assets/click_link.mp3';
import Dropdown from '../../components/drop-down/drop-down.component';
import { loginAuth } from '../../redux/user/users.selector';

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(loginAuth)
  const Playit = () => {
    const audio = new Audio(theme);
    audio.play();
    }

  return (
    <>
      <NavContainer>
        <NavSub>
          <a href="/" onClick={Playit()}>
            <SpinerImg src="https://icons.iconarchive.com/icons/turbomilk/space-invaders/256/blackhole-icon.png" alt="galaxy"/>
            <span>SANJA MANDIC</span>
            {
              token !== 1 ? <button onClick={() => {localStorage.setItem('token', JSON.stringify(1))}}>Logout</button> : ''
            }
            
          </a>
          <NavLinks>
            <a href= "/portfolio">Projects</a>
            <a href= "/portfolio/articles">Articles</a>
            <a href= "/portfolio/blogs">Blogs</a>
            <a href= "https://github.com/Sanja969">GitHub</a>
            <a href= "https://www.linkedin.com/in/sanja-mandic-823995a2/">LinkedIn</a>
            <a href= "https://twitter.com/SanjaMandic42">Twitter</a>
          </NavLinks>
          <HamburgerContainer onClick={() => dispatch(triggerMenu())}>
            <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-768x768.jpg" />
          </HamburgerContainer>
        </NavSub>
        <Dropdown />
      </NavContainer>
      <Line><div></div></Line>


      <Outlet />
    </>
  );
}

export default Navigation;