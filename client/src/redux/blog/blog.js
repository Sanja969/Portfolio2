const INITIAL_STATE = {
  blog: {},
  isOpen: false,
}
const GET_BLOG_DATA = "GET_BLOG_DATA";
const CLOSE_BLOG_DATA = "CLOSE_BLOG_DATA";

export const blogReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_BLOG_DATA:
      return {blog: payload, isOpen: true};
    case CLOSE_BLOG_DATA:
      return {blog: {}, isOpen: false};
    default:
      return state;
  }
}

export const getBlog = (blog) => ({
  type: GET_BLOG_DATA,
  payload: blog
})

export const closeBlog = () => ({
  type: CLOSE_BLOG_DATA,
})