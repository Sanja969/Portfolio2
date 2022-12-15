const express = require('express');

const projectsRouter = require('./projects/projects.router');

const api = express.Router();

api.use('/projects', projectsRouter);

module.exports = api;