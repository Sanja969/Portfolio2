import { useSelector } from 'react-redux';
import { BlogsContainer, BlogsSubContainer, BlogContainer } from './blogs.styles';
import { getBlogs, selectBlogsIsLoading } from '../../redux/blogs/blogs.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';

const Blogs = () => {

  const blogs = useSelector(getBlogs);
  const isLoader = useSelector(selectBlogsIsLoading); 

  return (
    isLoader ? <Spinner /> :
    <>
      <BlogsContainer>
        <h2>&gt;&gt; BLOGS</h2>
        <BlogsSubContainer>

          {
          Object.keys(blogs).map(blogNumber => {
            const blog = blogs[blogNumber]
            return (
            <BlogContainer key={blogNumber}>
              <h3>{blog.title}</h3>
              <small>{blog.date}</small>
              <p>{blog.text.slice(0, 100)}...</p>
            </BlogContainer>
          )})
          },
        </BlogsSubContainer>
      </BlogsContainer>
      <Footer />
    </>
    


  );
}

export default Blogs;