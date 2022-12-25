import { useSelector, useDispatch } from 'react-redux';
import { DropdownContainer } from "./drop-down.styles";
import { AiFillCloseSquare } from 'react-icons/ai';
import { triggerMenu } from "../../redux/dropdown/dropdown";

const Dropdown = () => {
  const isToggle = useSelector((state) => state.dropdown)
  const dispatch = useDispatch();

  return (
    <DropdownContainer style={{display: isToggle ? 'flex' : 'none'}} >
      <button onClick={() => dispatch(triggerMenu())}><AiFillCloseSquare /></button>
      <a href= "/portfolio">Projects</a>
      <a href= "/portfolio/articles">Articles</a>
      <a href= "/portfolio/blogs">Blogs</a>
      <a href= "https://github.com/Sanja969">GitHub</a>
      <a href= "https://www.linkedin.com/in/sanja-mandic-823995a2/">LinkedIn</a>
      <a href= "https://twitter.com/SanjaMandic42">Twitter</a>  
    </DropdownContainer>
  )
}

export default Dropdown;