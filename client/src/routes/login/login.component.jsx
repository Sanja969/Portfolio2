import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginContainer } from './login.styles';
import { loginStart } from '../../redux/user/users.actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotToHome = () => {
    navigate('/portfolio');
  };

  const defaultFormFields = {
    username: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    username,
    password,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const login = (username, password) => dispatch(loginStart({
    username,
    password,
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitBlog = async () => {
    login(username, password);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <LoginContainer>
      <h3 className="">ADD NEW BLOG</h3>
      <form>
        <input type="text" name="username" placeholder="username" onChange={handleChange} value={username} required />
        <input type="password" name="password" placeholder="password" onChange={handleChange} value={password} required maxLength={2000}/>
        <button type="submit" onClick={submitBlog}>SUBMIT</button>
      </form>
    </LoginContainer>
  );
};

export default Login;