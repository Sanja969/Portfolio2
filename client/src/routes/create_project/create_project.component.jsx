import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateProjectContainer } from './create_project.style';
import { postProjectStart } from '../../redux/projects/projects.actions';

const AddProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const img = new FormData();

  const gotToHome = () => {
    navigate('/');
  };

  const defaultFormFields = {
    name: '',
    description: '',
    technologies: '',
    source: '',
    live: '',
    urlImg: {},
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    technologies,
    source,
    live,
    urlImg,
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
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleImage = (event) => {
    setFormFields({ ...formFields,
      urlImg: {
      picturePreview: URL.createObjectURL(event.target.files[0]),
      pictureAsFile: event.target.files[0]
    }});
  }

  const setImageAction = async (event) => {
    event.preventDefault();

    img.append("file",urlImg.pictureAsFile);

    console.log(urlImg.pictureAsFile);

    for (let key of img.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
  }

  const submitProject = async () => {
    const img = await setImageAction();
    createProject(name, description, img, technologies, source, live);
    resetFormFields();
    gotToHome();
  };
  
  return (
    <CreateProjectContainer>
      <h3 className="">ADD NEW PROJECT</h3>
      <form  onClick={submitProject}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description} required maxLength={500}/>
        <input type="file" id="img" name="img" placeholder="Image" onChange={handleImage} required />
        <input type="text" name="technologies" placeholder="Techologies" onChange={handleChange} value={technologies} required />
        <input type="text" name="source" placeholder="Source" onChange={handleChange} value={source} required />
        <input type="text" name="live" placeholder="Live" onChange={handleChange} value={live} required />
        <button type="submit">SUBMIT</button>
      </form>
    </CreateProjectContainer>
  );
};

export default AddProject;
