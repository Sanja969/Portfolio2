import { BlogContainer } from "./blog.styles";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseSquare } from 'react-icons/ai';
import { closeBlog } from "../../redux/blog/blog";

const Blog = () => {
  const blog = useSelector((state) => state.blog)
  const dispatch = useDispatch();
  const replaceWithBr = () => {
    return blog.blog.text.replace(/\n/g, "<br /> <br />")
  }

  return (
    blog.isOpen ? <>
     <BlogContainer>
      <button onClick={() => dispatch(closeBlog())}><AiFillCloseSquare /></button>
      <h2>{blog.blog.title}</h2>
      <p dangerouslySetInnerHTML={{__html: replaceWithBr()}} />
     </BlogContainer>
    </> : ''
  )
}

export default Blog;