import { BlogContainer } from "./blog.styles";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseSquare } from 'react-icons/ai';
import { closeBlog } from "../../redux/blog/blog";

const Blog = () => {
  const blog = useSelector((state) => state.blog)
  const dispatch = useDispatch();

  return (
    blog.isOpen ? <>
     <BlogContainer>
      <button onClick={() => dispatch(closeBlog())}><AiFillCloseSquare /></button>
      <h2>{blog.blog.title}</h2>
      <p>{blog.blog.text}</p>
     </BlogContainer>
    </> : ''
  )
}

export default Blog;