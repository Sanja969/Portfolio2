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
    uplImg: {},
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    technologies,
    source,
    live,
    uplImg,
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

  const submitProject = async () => {
    // await setImageAction();
    createProject(name, description, img, technologies, source, live);
    resetFormFields();
    gotToHome();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name !== 'img' || name !=='urlImg') {
      setFormFields({ ...formFields, [name]: value });
    }
  }

  // const handleImage = (event) => {
  //   setFormFields({ ...formFields,
  //     uplImg: {
  //     picturePreview: URL.createObjectURL(event.target.files[0]),
  //     pictureAsFile: event.target.files[0]
  //   }});
  // }

  // const setImageAction = async (event) => {
  //   event.preventDefault();

  //   img.append("file",uplImg.pictureAsFile);

  //   console.log(uplImg.pictureAsFile);

  //   for (let key of img.entries()) {
  //     console.log(key[0] + ", " + key[1]);
  //   }
  // }
  
  return (
    <CreateProjectContainer>
      <h3 className="">ADD NEW PROJECT</h3>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description} required maxLength={500}/>
        {/* <input type="file" id="img" name="img" placeholder="Image" onChange={handleImage} required /> */}
        <input type="text" name="technologies" placeholder="Techologies" onChange={handleChange} value={technologies} required />
        <input type="text" name="source" placeholder="Source" onChange={handleChange} value={source} required />
        <input type="text" name="live" placeholder="Live" onChange={handleChange} value={live} required />
        <button type="submit" onClick={submitProject}>SUBMIT</button>
      </form>
    </CreateProjectContainer>
  );
};

export default AddProject;
