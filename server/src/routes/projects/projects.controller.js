const { getAllProjects, createProject } = require('../../models/projects/projects.model');

async function httpGetAllProjects(req, res) {
  const projects = await getAllProjects()
  return res.status(200).json(projects);
}

async function httpAddNewProject(req, res) {
  const project = req.body;

  if (project.img) {
    project.img = {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
  }
  if (!project.name || !project.description || !project.source || !project.live) {
    return res.status(400).json({
      error: 'Missing required project propery'
    })
  }
  await createProject(project);
  res.status(201).json(project);
}

module.exports = {
  httpGetAllProjects,
  httpAddNewProject
}