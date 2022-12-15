import { useSelector } from 'react-redux';
import { ProjectsContainer, ProjectContainer, ProjectSubContainer } from './projects.styles';
import { getProjects, selectProjectsIsLoading } from '../../redux/projects/projects.selector';
import Spinner from '../../components/spinner/spinner.component';

const Projects = () => {

  const projects = useSelector(getProjects);
  const isLoader = useSelector(selectProjectsIsLoading); 

  return (
    isLoader ? <Spinner /> : 
    <ProjectsContainer>
      <h2>&gt;&gt; PROJECTS</h2>
      <ProjectSubContainer>

        {
         Object.keys(projects).map(projectNumber => {
            const project = projects[projectNumber]
            return (
            <ProjectContainer key={projectNumber}>
              <div>
                <h3>{project.name}</h3>
                <a href={project.source}>&gt;&gt; More</a>
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco=" width="100" />
                <p>{project.description.slice(0, 100) + "..."}</p>
                <p>{project.technologies}</p>
              </div>
            </ProjectContainer>
          )})
        },
      </ProjectSubContainer>
    </ProjectsContainer>


  );
}

export default Projects;