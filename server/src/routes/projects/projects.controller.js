const fs = require('fs');
const path = require('path');
const { getAllProjects, createProject } = require('../../models/projects/projects.model');

async function httpGetAllProjects(req, res) {
  const projects = await getAllProjects()
  return res.status(200).json(projects);
}

async function httpAddNewProject(req, res, next) {
  const project = req.body;
  console.log(req.file)
  if (project.img) {
    project.img = {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
  }
  if (!project.name) {
    return res.status(400).json({
      error: 'Missing required project name'
    })
  }

  if (!project.description) {
    return res.status(400).json({
      error: 'Missing required project desc'
    })
  }

  if (!project.technologies) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  if (!project.source) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  if (!project.live) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  await createProject(project);
  res.status(201).json(project);
}

module.exports = {
  httpGetAllProjects,
  httpAddNewProject
}

// || !project.description || !project.source || !project.live