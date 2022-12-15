const express = require('express');
const { httpGetAllProjects, httpAddNewProject } = require('./projects.controller')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const projectsRouter = express.Router();

projectsRouter.get('/', httpGetAllProjects);
projectsRouter.post('/', upload.single('profile'), httpAddNewProject);

module.exports = projectsRouter;