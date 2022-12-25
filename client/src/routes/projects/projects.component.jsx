import { useSelector, useDispatch } from 'react-redux';
import { ProjectsContainer, ProjectContainer, ProjectSubContainer, ImageContainer, SubContainer } from './projects.styles';
import { getProjects, selectProjectsIsLoading } from '../../redux/projects/projects.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';
import { loginAuth } from '../../redux/user/users.selector';
import { deleteProjectStart } from '../../redux/projects/projects.actions';

const Buffer = require('buffer/').Buffer

const Projects = () => {
  const dispatch = useDispatch();
  const token = useSelector(loginAuth);
  const projects = useSelector(getProjects);
  const isLoader = useSelector(selectProjectsIsLoading); 

  return (
    isLoader ? <Spinner /> :
    <>
      <ProjectsContainer>
        <h2>&gt;&gt; PROJECTS</h2>
        <ProjectSubContainer>

          {
          Object.keys(projects).map(projectNumber => {
            const project = projects[projectNumber]
            let base64String = Buffer.from(project.img.data.data).toString('base64');
            const imgSource = `data:image/png;base64,${base64String}`;
            return (
            <ProjectContainer key={projectNumber}>
              <SubContainer>
                <h3>
                  {project.name}
                  <a href={project.live}>Live</a>
                  {
                    !token || token !== 1 ? <button onClick={() => dispatch(deleteProjectStart({projectNumber, token}))}>Delete</button> : ''
                  }
                  
                </h3>
                <a href={project.source}>&gt;&gt; More</a>
              </SubContainer>
              <SubContainer>
                <div>
                  <ImageContainer style={{background: `url(${imgSource})` }}></ImageContainer>
                </div>

                <p>{project.description.slice(0, 100) + "..."}</p>
                <p>{project.technologies}</p>
              </SubContainer>
            </ProjectContainer>
          )})
          }
        </ProjectSubContainer>
      </ProjectsContainer>
      <Footer />
    </>
    


  );
}

export default Projects;