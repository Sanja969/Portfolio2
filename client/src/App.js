import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Projects from './routes/projects/projects.component';
import Background from './components/background/background.component';
import { fetchProjectsStart } from './redux/projects/projects.actions';
import AddProject from './routes/create_project/create_project.component';
import Blogs from './routes/blogs/blogs.component';
import AddBlog from './routes/create_blog/create_blog.component';
import { fetchBlogsStart } from './redux/blogs/blogs.actions';
import { fetchArticlesStart } from './redux/articles/articles.actions';
import Articles from './routes/articles/articles.component';
import AddArticle from './routes/create_article/create_article.component';
import Login from './routes/login/login.component';
import AddQuote from './routes/create_quote/create_quote.component';
import { fetchQuoteStart } from './redux/quotes/quotes.actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjectsStart());
    dispatch(fetchBlogsStart());
    dispatch(fetchArticlesStart());
    dispatch(fetchQuoteStart());
  }, []);

  return (
    <>
      <Background />
      <Routes>
      <Route path='/admin/login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Navigation />}>
          <Route index element={<Projects />} />
          <Route path='xyz/create' element={<AddProject />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/xyz/create' element={<AddBlog />} />
          <Route path='articles' element={<Articles />} />
          <Route path='articles/xyz/create' element={<AddArticle />} />
          <Route path='quotes' element={<AddQuote />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
