const fs = require('fs');
const { getAllBlogs, createBlog, deleteBlog, ifExistBlog } = require('../../models/blogs/blogs.model');

async function httpGetAllBlogs(req, res) {
  const blogs = await getAllBlogs()
  return res.status(200).json(blogs);
}

async function httpAddNewBlog(req, res) {
  const blog = req.body;

  if (!blog.title) {
    return res.status(400).json({
      error: 'Missing required Blog title'
    })
  }

  if (!blog.text) {
    return res.status(400).json({
      error: 'Missing required Blog text'
    })
  }

  await createBlog(blog);
  const blogs = await getAllBlogs()
  return res.status(201).json(blogs);
}

async function httpDeleteBlog(req, res) {
  const blogId = Number(req.params.id);
  const existBlog = await ifExistBlog(blogId)
  if (!existBlog) {
    return res.status(404).json({
      error: 'Blog not found'
    })
  }
  await deleteBlog(blogId);
  const blogs = await getAllBlogs()
  return res.status(202).json(blogs);
}

module.exports = {
  httpGetAllBlogs,
  httpAddNewBlog,
  httpDeleteBlog,
}