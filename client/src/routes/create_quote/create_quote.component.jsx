import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateQuoteContainer } from './create_quote.styles';
import { postQuoteStart } from '../../redux/quotes/quotes.actions';
import { loginAuth } from '../../redux/user/users.selector';

const AddQuote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(loginAuth)

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    text: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    text,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createQuote = (text) => dispatch(postQuoteStart({
    text,
  }, token));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const submitQuote = async () => {
    createQuote(text);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <CreateQuoteContainer>
      <h3 className="">ADD NEW QUOTE</h3>
      <form>
        <input type="text" name="text" placeholder="Text" onChange={handleChange} value={text} required maxLength={2000}/>
        <button type="submit" onClick={submitQuote}>SUBMIT</button>
      </form>
    </CreateQuoteContainer>
  );
};

export default AddQuote;