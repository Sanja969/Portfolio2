import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Projects from './routes/projects/projects.component';
import Background from './components/background/background.component';
import { fetchProjectsStart } from './redux/projects/projects.actions';
import AddProject from './routes/create_project/create_project.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjectsStart());
  }, []);

  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Navigation />}>
          <Route index element={<Projects />} />
          <Route path='xyz/create' element={<AddProject />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
