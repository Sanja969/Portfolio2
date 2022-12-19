import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateArticleContainer } from './create_article.styles';
import { postArticleStart } from '../../redux/articles/articles.actions';
import { loginAuth } from '../../redux/user/users.selector';

const AddArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(loginAuth)

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    title: '',
    text: '',
    link: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    title,
    text,
    link,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createArticle = (title, text) => dispatch(postArticleStart({
    title,
    text,
    link,
  }, token));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitArticle = async () => {
    createArticle(title, text);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <CreateArticleContainer>
      <h3 className="">ADD NEW ARTICLE</h3>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} required />
        <input type="text" name="text" placeholder="Text" onChange={handleChange} value={text} required maxLength={2000}/>
        <input type="text" name="link" placeholder="Link" onChange={handleChange} value={link} required />
        <button type="submit" onClick={submitArticle}>SUBMIT</button>
      </form>
    </CreateArticleContainer>
  );
};

export default AddArticle;
