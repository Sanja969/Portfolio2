import { useSelector, useDispatch } from 'react-redux';
import { ArticlesContainer, ArticlesSubContainer, ArticleContainer } from './articles.styles';
import { getArticles, selectArticlesIsLoading } from '../../redux/articles/articles.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';
import { deleteArticleStart } from '../../redux/articles/articles.actions';
import { loginAuth } from '../../redux/user/users.selector';

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(getArticles);
  const isLoader = useSelector(selectArticlesIsLoading);
  const token = useSelector(loginAuth);

  return (
    isLoader ? <Spinner /> :
    <>
      <ArticlesContainer>
        <h2>
          &gt;&gt; ARTICLES
        </h2>
        <ArticlesSubContainer>

          {
          Object.keys(articles).map(articleNumber => {
            const article = articles[articleNumber]
            return (
            <ArticleContainer key={articleNumber}>
              <h3>
                {article.title}
                {
                  token !== 1 ? <button onClick={() => dispatch(deleteArticleStart({articleNumber, token}))}>Delete</button> : ''
                }
              </h3>
              <small>{article.date}</small>
              <p>{article.text}</p>
              <p>{article.link}</p>
            </ArticleContainer>
          )})
          }
        </ArticlesSubContainer>
      </ArticlesContainer>
      <Footer />
    </>
    


  );
}

export default Articles;