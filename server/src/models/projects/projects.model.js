const projects = require('./projects.mongo');

async function getAllProjects() {
  return await projects.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestProjectNumber() {
  const latestProject = await projects.
  findOne()
  .sort('-projectNumber');

  if (!latestProject) return 1;

  return latestProject.projectNumber;
}

async function saveProject(project) {
  await projects.findOneAndUpdate( 
    { projectNumber: project.projectNumber },
    project, 
    { upsert: true }
  )
}

async function createProject(project) {
  const newPojectNumber = await getLatestProjectNumber() + 1;
  const newProject = Object.assign(project,
    {
    projectNumber: newPojectNumber,
  });
  await saveProject(newProject);
}

async function findProject(filter) {
  return await projects.findOne(filter);
}

async function ifExistProject(id) {
  return await findProject({projectNumber: id});
}

async function deleteProject(ProjectId) {
  await projects.deleteOne({ProjectNumber: ProjectId})
}

module.exports = {
  getAllProjects,
  createProject,
  ifExistProject,
  deleteProject,
}