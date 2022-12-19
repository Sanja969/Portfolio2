import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateBlogContainer } from './create_blogs.styles';
import { postBlogStart } from '../../redux/blogs/blogs.actions';
import { loginAuth } from '../../redux/user/users.selector';

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(loginAuth)

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    title: '',
    text: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    title,
    text,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createBlog = (title, text) => dispatch(postBlogStart({
    title,
    text,
  }, token));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitBlog = async () => {
    createBlog(title, text);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <CreateBlogContainer>
      <h3 className="">ADD NEW BLOG</h3>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} required />
        <input type="text" name="text" placeholder="Text" onChange={handleChange} value={text} required maxLength={2000}/>
        <button type="submit" onClick={submitBlog}>SUBMIT</button>
      </form>
    </CreateBlogContainer>
  );
};

export default AddBlog;
