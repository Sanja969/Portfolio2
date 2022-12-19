import { useSelector } from 'react-redux';
import { ArticlesContainer, ArticlesSubContainer, ArticleContainer } from './articles.styles';
import { getArticles, selectArticlesIsLoading } from '../../redux/articles/articles.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';

const Articles = () => {

  const articles = useSelector(getArticles);
  const isLoader = useSelector(selectArticlesIsLoading); 

  return (
    isLoader ? <Spinner /> :
    <>
      <ArticlesContainer>
        <h2>&gt;&gt; ARTICLES</h2>
        <ArticlesSubContainer>

          {
          Object.keys(articles).map(articleNumber => {
            const Article = articles[articleNumber]
            return (
            <ArticleContainer key={articleNumber}>
              <h3>{Article.title}</h3>
              <small>{Article.date}</small>
              <p>{Article.text}</p>
              <p>{Article.link}</p>
            </ArticleContainer>
          )})
          },
        </ArticlesSubContainer>
      </ArticlesContainer>
      <Footer />
    </>
    


  );
}

export default Articles;