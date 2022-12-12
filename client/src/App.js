import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Projects from './routes/projects/projects.component';
import Background from './components/background/background.component';

const App = () => {

  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Navigation />}>
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
