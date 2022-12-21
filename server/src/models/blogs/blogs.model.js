const blogs = require('./blogs.mongo');

async function getAllBlogs() {
  return await blogs.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestBlogNumber() {
  const latestBlog = await blogs.
  findOne()
  .sort('-blogNumber');

  if (!latestBlog) return 1;

  return latestBlog.blogNumber;
}

async function saveBlog(blog) {
  await blogs.findOneAndUpdate( 
    { blogNumber: blog.blogNumber },
    blog, 
    { upsert: true }
  )
}

async function createBlog(blog) {
  const newBlogNumber = await getLatestBlogNumber() + 1;
  const newBlog = Object.assign(blog,
    {
    blogNumber: newBlogNumber,
  });
  await saveBlog(newBlog);
}

async function findBlog(filter) {
  return await blogs.findOne(filter);
}

async function ifExistBlog(id) {
  return await findBlog({blogNumber: id});
}

async function deleteBlog(BlogId) {
  await blogs.deleteOne({blogNumber: BlogId})
}

module.exports = {
  getAllBlogs,
  createBlog,
  ifExistBlog,
  deleteBlog,
}