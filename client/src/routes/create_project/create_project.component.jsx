import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateProjectContainer } from './create_project.style';
import { postProjectStart } from '../../redux/projects/projects.actions';
import { loginAuth } from '../../redux/user/users.selector';

const AddProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(loginAuth)

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    name: '',
    description: '',
    technologies: '',
    source: '',
    live: '',
    img: {},
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    technologies,
    source,
    live,
    img,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createProject = (name, description, img, technologies, source, live) => dispatch(postProjectStart({
    name,
    description,
    technologies,
    source,
    live,
    img,
  }, token));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleImage = (event) => {
    setFormFields({ ...formFields,
      img: event.target.files[0]
    });
  }

  const submitProject = async () => {
    createProject(name, description, img, technologies, source, live);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <CreateProjectContainer>
      <h3 className="">ADD NEW PROJECT</h3>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description} required maxLength={500}/>
        <input type="file" id="image" name="image" placeholder="Image" onChange={handleImage} required accept="image/*"/>
        <input type="text" name="technologies" placeholder="Techologies" onChange={handleChange} value={technologies} required />
        <input type="text" name="source" placeholder="Source" onChange={handleChange} value={source} required />
        <input type="text" name="live" placeholder="Live" onChange={handleChange} value={live} required />
        <button type="submit" onClick={submitProject}>SUBMIT</button>
      </form>
    </CreateProjectContainer>
  );
};

export default AddProject;
