import { combineReducers } from 'redux';
import { projectsReducer } from './projects/projects.reducer';
import { blogsReducer } from './blogs/blogs.reducer';
import { dropdownReducer } from './dropdown/dropdown';
import { articlesReducer } from './articles/articles.reducer';
import { usersReducer } from './user/users.reducer';
import { quotesReducer } from './quotes/quotes.reducer';
import { blogReducer } from './blog/blog';

export const rootReducer = combineReducers({
  projects: projectsReducer,
  dropdown: dropdownReducer,
  blogs: blogsReducer,
  articles: articlesReducer,
  users: usersReducer,
  quotes: quotesReducer,
  blog: blogReducer,
});
